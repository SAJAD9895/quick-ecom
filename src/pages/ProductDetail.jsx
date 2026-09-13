import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductImageGallery } from '../components/product/ProductImageGallery';
import { ProductSpecs } from '../components/product/ProductSpecs';
import { ProductReviews } from '../components/product/ProductReviews';
import { ProductGrid } from '../components/product/ProductGrid';
import { Rating } from '../components/common/Rating';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { Badge } from '../components/common/Badge';
import { QuantitySelector } from '../components/common/QuantitySelector';
import { Button } from '../components/common/Button';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw, Zap } from 'lucide-react';

export const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    setIsLoading(true);
    setQuantity(1);
    productService.getProductBySlug(slug).then((res) => {
      if (res) {
        setProduct(res);
        setSelectedVariant(res.variants?.[0] || null);
        document.title = `${res.name} — Quick-Ecom`;

        productService.getRelatedProducts(res.category, res.id, 4).then((rel) => {
          setRelatedProducts(rel);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-slate-500 animate-pulse">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-slate-500 text-sm">Sorry, we couldn't find the product you are looking for.</p>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb
        items={[
          { label: 'Shop', url: '/shop' },
          { label: product.category, url: `/category/${product.category}` },
          { label: product.name }
        ]}
      />

      {/* Main Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Left Gallery */}
        <ProductImageGallery images={product.images} productName={product.name} />

        {/* Right Info Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest">
                {product.brand}
              </span>
              <Badge variant={product.stock > 0 ? 'inStock' : 'outOfStock'}>
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {product.name}
            </h1>

            <Rating rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <PriceDisplay
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              size="xl"
            />
            <p className="text-[11px] text-slate-500 font-medium">Inclusive of all taxes. Free shipping on orders over ₹1,999.</p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {product.shortDescription}
          </p>

          {/* Variants selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Select Option: <span className="text-brand-600">{selectedVariant?.name}</span>
              </label>
              <div className="flex items-center gap-2.5 flex-wrap">
                {product.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50 text-brand-700 ring-2 ring-brand-100 font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {v.colorHex && (
                        <span className="w-3 h-3 rounded-full border border-slate-300 shadow-inner" style={{ backgroundColor: v.colorHex }} />
                      )}
                      <span>{v.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Actions */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700">Quantity:</span>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                max={product.stock}
                size="md"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAddToCart}
                size="lg"
                fullWidth
                icon={ShoppingBag}
                className="flex-1"
              >
                Add to Cart
              </Button>

              <Button
                onClick={handleBuyNow}
                variant="secondary"
                size="lg"
                fullWidth
                icon={Zap}
                className="flex-1"
              >
                Buy Now
              </Button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                  isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-slate-50'
                }`}
                title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-500 text-center">
            <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
              <Truck className="w-4 h-4 text-brand-600" />
              <span>Fast Dispatch</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50">
              <RefreshCw className="w-4 h-4 text-amber-600" />
              <span>7 Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section: Description, Specifications, Reviews */}
      <div className="pt-8 border-t border-slate-200">
        <div className="flex items-center gap-6 border-b border-slate-200 text-sm font-bold">
          {[
            { id: 'description', label: 'Product Description' },
            { id: 'specs', label: 'Specifications' },
            { id: 'reviews', label: `Reviews (${product.reviewCount})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 transition-colors relative ${
                activeTab === tab.id
                  ? 'text-brand-600 border-b-2 border-brand-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
              <p>{product.description}</p>
              <p>SKU Identifier: <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-mono">{product.sku}</code></p>
            </div>
          )}

          {activeTab === 'specs' && <ProductSpecs specifications={product.specifications} />}

          {activeTab === 'reviews' && (
            <ProductReviews rating={product.rating} reviewCount={product.reviewCount} />
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900">Recommended Products</h3>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};
