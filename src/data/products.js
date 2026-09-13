export const products = [
  {
    id: 'prod-001',
    name: 'Wireless Noise-Canceling Headphones X1',
    slug: 'wireless-noise-canceling-headphones-x1',
    brand: 'SonicPro',
    category: 'electronics',
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    rating: 4.8,
    reviewCount: 342,
    stock: 25,
    sku: 'SP-NCX1-BLK',
    isNew: false,
    isFeatured: true,
    isDeal: true,
    tags: ['featured', 'deal', 'bestseller', 'audio', 'bluetooth'],
    shortDescription: 'Immersive active noise cancellation with 40-hour battery life and ultra-soft memory foam earcups.',
    description: 'Elevate your listening experience with SonicPro X1 Wireless Headphones. Featuring custom-tuned 40mm neodymium drivers, active noise cancellation technology, and ergonomic swivel earcups designed for all-day comfort. Enjoy crystal-clear hands-free calls with dual beamforming microphones.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-blk', name: 'Matte Black', colorHex: '#18181b' },
      { id: 'v-sil', name: 'Silver Gray', colorHex: '#94a3b8' },
      { id: 'v-navy', name: 'Midnight Navy', colorHex: '#1e3a8a' }
    ],
    specifications: {
      'Bluetooth Version': 'v5.3',
      'Battery Life': 'Up to 40 Hours (ANC On)',
      'Charging Time': '1.5 Hours via USB-C',
      'Driver Size': '40mm Dynamic',
      'Weight': '250g',
      'Warranty': '1 Year Brand Warranty'
    }
  },
  {
    id: 'prod-002',
    name: 'Smart OLED Watch Ultra Series 8',
    slug: 'smart-oled-watch-ultra-series-8',
    brand: 'Horizon',
    category: 'accessories',
    price: 4999,
    originalPrice: 7999,
    discount: 37,
    rating: 4.7,
    reviewCount: 218,
    stock: 14,
    sku: 'HZ-SW8-SLV',
    isNew: true,
    isFeatured: true,
    isDeal: false,
    tags: ['new', 'featured', 'smartwatch', 'fitness'],
    shortDescription: '1.96" Retina AMOLED display, titanium casing, SpO2 blood oxygen monitor, and multi-sport tracking.',
    description: 'Engineered for adventure and daily tracking, the Horizon Watch Ultra features a military-grade titanium case, Sapphire crystal glass, and comprehensive health telemetry including ECG, heart rate, sleep quality, and GPS route recording.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-tit', name: 'Titanium Silver', colorHex: '#cbd5e1' },
      { id: 'v-ste', name: 'Space Black', colorHex: '#0f172a' }
    ],
    specifications: {
      'Display': '1.96-inch AMOLED (410x502 px)',
      'Water Resistance': '50M (5 ATM)',
      'Sensors': 'Optical Heart Rate, SpO2, Accelerometer',
      'Battery': '450 mAh (Up to 7 Days)',
      'Connectivity': 'Bluetooth 5.2, GPS'
    }
  },
  {
    id: 'prod-003',
    name: 'Aura Smartphone Pro Max (256GB)',
    slug: 'aura-smartphone-pro-max-256gb',
    brand: 'Aura',
    category: 'mobiles',
    price: 64999,
    originalPrice: 74999,
    discount: 13,
    rating: 4.9,
    reviewCount: 512,
    stock: 8,
    sku: 'AU-SPM-256',
    isNew: true,
    isFeatured: true,
    isDeal: true,
    tags: ['new', 'featured', 'deal', 'flagship', 'mobile'],
    shortDescription: '120Hz LTPO display, triple 200MP camera system, 5000mAh battery, and Snapdragon 8 Gen 3 chipset.',
    description: 'Experience unparalleled mobile performance with the Aura Pro Max. Capture professional grade 8K video, take breathtaking night photography with 200MP sensor, and enjoy silky smooth scrolling on the Quad HD+ LTPO display.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-ph', name: 'Phantom Black', colorHex: '#09090b' },
      { id: 'v-em', name: 'Emerald Green', colorHex: '#047857' }
    ],
    specifications: {
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB LPDDR5X',
      'Storage': '256GB UFS 4.0',
      'Camera': '200MP Main + 50MP Ultra-wide + 50MP Periscope',
      'Battery': '5000mAh (100W Fast Charging)'
    }
  },
  {
    id: 'prod-004',
    name: 'Ergonomic Minimalist Leather Backpack',
    slug: 'ergonomic-minimalist-leather-backpack',
    brand: 'UrbanFit',
    category: 'accessories',
    price: 3499,
    originalPrice: 5999,
    discount: 41,
    rating: 4.6,
    reviewCount: 165,
    stock: 30,
    sku: 'UF-BP-LWR',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'leather', 'backpack', 'travel'],
    shortDescription: 'Water-resistant full-grain leather, padded 15.6" laptop compartment, and anti-theft hidden pocket.',
    description: 'Designed for daily commuters and modern professionals. Crafted from premium full-grain Italian leather, this bag offers dedicated padded protection for your laptop, tablet, water bottle, and passport.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-brn', name: 'Cognac Brown', colorHex: '#78350f' },
      { id: 'v-blk', name: 'Stealth Black', colorHex: '#18181b' }
    ],
    specifications: {
      'Material': 'Full-Grain Genuine Leather',
      'Capacity': '22 Liters',
      'Laptop Compatibility': 'Up to 15.6 inch',
      'Dimensions': '44 x 30 x 15 cm',
      'Weight': '980g'
    }
  },
  {
    id: 'prod-005',
    name: 'Modern Organic Cotton Casual Shirt',
    slug: 'modern-organic-cotton-casual-shirt',
    brand: 'UrbanFit',
    category: 'fashion',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.5,
    reviewCount: 94,
    stock: 45,
    sku: 'UF-SH-OC',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'fashion', 'cotton', 'shirt'],
    shortDescription: '100% GOTS certified organic cotton, breathable weave, pre-shrunk slim fit styling.',
    description: 'Experience effortless sophistication with our organic cotton casual button-down shirt. Perfect for casual weekend outings or elevated casual workdays.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-wht', name: 'Crisp White', colorHex: '#ffffff' },
      { id: 'v-blu', name: 'Sky Blue', colorHex: '#93c5fd' },
      { id: 'v-olv', name: 'Olive Green', colorHex: '#4d7c0f' }
    ],
    specifications: {
      'Fabric': '100% Certified Organic Cotton',
      'Fit Type': 'Slim Fit',
      'Collar Style': 'Button-Down',
      'Wash Care': 'Machine wash cold with like colors'
    }
  },
  {
    id: 'prod-006',
    name: 'Minimalist Ceramic Coffee Maker & Dripper',
    slug: 'minimalist-ceramic-coffee-maker-dripper',
    brand: 'ZenHome',
    category: 'home-living',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.9,
    reviewCount: 142,
    stock: 19,
    sku: 'ZH-CM-CRM',
    isNew: false,
    isFeatured: true,
    isDeal: true,
    tags: ['featured', 'deal', 'coffee', 'kitchen', 'ceramic'],
    shortDescription: 'Heat-resistant handcrafted ceramic pour-over carafe with stainless steel mesh filter.',
    description: 'Brew cafe-quality pour-over coffee right at home. The double-walled heat retaining ceramic body ensures steady extraction temperature for balanced floral and chocolaty notes.',
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-matte', name: 'Matte White', colorHex: '#f8fafc' },
      { id: 'v-sand', name: 'Warm Beige', colorHex: '#fef3c7' }
    ],
    specifications: {
      'Capacity': '600 ml (4 Cups)',
      'Material': 'High-Fired Ceramic + Stainless Mesh',
      'Thermal Resistance': 'Up to 220°C',
      'Dishwasher Safe': 'Yes'
    }
  },
  {
    id: 'prod-007',
    name: 'Ultra Lightweight Running Shoes Apex Air',
    slug: 'ultra-lightweight-running-shoes-apex-air',
    brand: 'Apex',
    category: 'sports',
    price: 3299,
    originalPrice: 5499,
    discount: 40,
    rating: 4.7,
    reviewCount: 289,
    stock: 22,
    sku: 'AP-RS-AIR',
    isNew: true,
    isFeatured: true,
    isDeal: false,
    tags: ['new', 'featured', 'footwear', 'running', 'sports'],
    shortDescription: 'Breathable knit upper, high-rebound nitrogen-infused foam midsole, high-traction rubber lug sole.',
    description: 'Designed for runners demanding maximum energy return. The engineered mesh upper keeps your feet cool over marathons, while the responsive foam attenuates shock on concrete streets.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-red', name: 'Flame Red', colorHex: '#ef4444' },
      { id: 'v-cyn', name: 'Electric Blue', colorHex: '#06b6d4' }
    ],
    specifications: {
      'Weight': '210g (Single Shoe Size 9)',
      'Upper': 'Engineered FlyKnit Mesh',
      'Midsole': 'Nitro-Foam Cushioning',
      'Drop': '8mm'
    }
  },
  {
    id: 'prod-008',
    name: 'Hydrating Botanical Facial Serum (50ml)',
    slug: 'hydrating-botanical-facial-serum-50ml',
    brand: 'Botanical',
    category: 'beauty',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.9,
    reviewCount: 408,
    stock: 50,
    sku: 'BT-FS-HYD',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'beauty', 'skincare', 'organic'],
    shortDescription: 'Hyaluronic acid + Vitamin C + Niacinamide formula for luminous, plump skin barrier repair.',
    description: 'A deep hydration serum enriched with wild rosehip oil, triple-weight hyaluronic acid, and green tea antioxidants. Non-greasy and absorbs instantly to lock in 24-hour hydration.',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597349-4c6806509f6d?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-50', name: '50 ml Bottle', colorHex: '#ec4899' }
    ],
    specifications: {
      'Volume': '50 ml',
      'Skin Type': 'All Skin Types (Sensitive Friendly)',
      'Cruelty Free': 'Yes (Leaping Bunny Certified)',
      'Paraben Free': 'Yes'
    }
  },
  {
    id: 'prod-009',
    name: 'Artisanal Single-Origin Arabica Coffee Beans (1kg)',
    slug: 'artisanal-single-origin-arabica-coffee-beans-1kg',
    brand: 'ZenHome',
    category: 'grocery',
    price: 899,
    originalPrice: 1299,
    discount: 30,
    rating: 4.8,
    reviewCount: 177,
    stock: 40,
    sku: 'ZH-CB-1KG',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'grocery', 'coffee', 'organic'],
    shortDescription: 'Medium roast shade-grown Arabica whole beans with notes of dark chocolate and citrus blossom.',
    description: 'Freshly roasted in small batches weekly. Grown at 4,500 feet elevation in organic volcanic soil, producing low acidity and smooth cocoa finish.',
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-whole', name: 'Whole Beans', colorHex: '#451a03' },
      { id: 'v-grnd', name: 'Medium Espresso Grind', colorHex: '#78350f' }
    ],
    specifications: {
      'Roast Level': 'Medium Roast',
      'Elevation': '1400m',
      'Net Weight': '1000g',
      'Shelf Life': '12 Months'
    }
  },
  {
    id: 'prod-010',
    name: 'Portable Mini Bluetooth Speaker SoundCube',
    slug: 'portable-mini-bluetooth-speaker-soundcube',
    brand: 'SonicPro',
    category: 'electronics',
    price: 1599,
    originalPrice: 2999,
    discount: 46,
    rating: 4.5,
    reviewCount: 230,
    stock: 35,
    sku: 'SP-SPK-SC',
    isNew: false,
    isFeatured: true,
    isDeal: true,
    tags: ['featured', 'deal', 'audio', 'speaker', 'waterproof'],
    shortDescription: 'IPX7 waterproof rating, 360-degree bass radiator, 16-hour playtime with rugged outdoor silicone strap.',
    description: 'Take your tunes anywhere. SoundCube packs surprising punch with a custom passive bass radiator, 10W peak power output, and rugged drop-resistant armor.',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-camo', name: 'Army Olive', colorHex: '#365314' },
      { id: 'v-blk', name: 'Charcoal Gray', colorHex: '#334155' }
    ],
    specifications: {
      'Power Output': '10W RMS',
      'Waterproof Rating': 'IPX7 (Submersible up to 1m)',
      'Battery': '2600 mAh (16 hours)',
      'Weight': '320g'
    }
  },
  {
    id: 'prod-011',
    name: '4K Ultra HD Mechanical Gaming Keyboard RGB',
    slug: '4k-ultra-hd-mechanical-gaming-keyboard-rgb',
    brand: 'SonicPro',
    category: 'electronics',
    price: 3999,
    originalPrice: 6999,
    discount: 42,
    rating: 4.7,
    reviewCount: 310,
    stock: 18,
    sku: 'SP-KB-RGB',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'gaming', 'keyboard', 'electronics'],
    shortDescription: 'Hot-swappable tactile red switches, per-key RGB backlighting, aircraft aluminum frame, and detachable Type-C cable.',
    description: 'Built for gamers and heavy typists. Double-shot PBT keycaps resist shine and wear, while sound-dampening foam delivers a satisfying thocky acoustics.',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-red', name: 'Linear Red Switches', colorHex: '#dc2626' },
      { id: 'v-blu', name: 'Clicky Blue Switches', colorHex: '#2563eb' }
    ],
    specifications: {
      'Switch Type': 'Hot-Swappable Mechanical',
      'Layout': '75% Compact (84 Keys)',
      'Polling Rate': '1000Hz',
      'Connection': 'Tri-Mode (2.4GHz / BT 5.0 / USB-C)'
    }
  },
  {
    id: 'prod-012',
    name: '4K Cinema Smart Projector Pocket Edition',
    slug: '4k-cinema-smart-projector-pocket-edition',
    brand: 'Horizon',
    category: 'electronics',
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.6,
    reviewCount: 88,
    stock: 9,
    sku: 'HZ-PJ-4K',
    isNew: false,
    isFeatured: true,
    isDeal: false,
    tags: ['featured', 'projector', 'home-theater'],
    shortDescription: '800 ANSI Lumens, Android TV built-in, auto keystone correction, up to 150-inch cinematic display.',
    description: 'Transform any room into a movie theater. Compact footprint with built-in Harman Kardon speakers and dual-band Wi-Fi for instant streaming from Netflix and Prime Video.',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-std', name: 'Space Gray', colorHex: '#475569' }
    ],
    specifications: {
      'Native Resolution': '1920x1080 (Supports 4K Input)',
      'Brightness': '800 ANSI Lumens',
      'OS': 'Android TV 11.0',
      'Speaker': 'Dual 5W Dolby Audio'
    }
  },
  {
    id: 'prod-013',
    name: 'Slim Fit Denim Jacket Heritage Edition',
    slug: 'slim-fit-denim-jacket-heritage-edition',
    brand: 'UrbanFit',
    category: 'fashion',
    price: 2799,
    originalPrice: 4299,
    discount: 34,
    rating: 4.4,
    reviewCount: 119,
    stock: 26,
    sku: 'UF-JK-DNM',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'fashion', 'denim', 'jacket'],
    shortDescription: 'Heavyweight 14oz ring-spun denim with distressed wash and copper button closures.',
    description: 'A timeless staple reimagined. Crafted with premium cotton selvage denim, offering vintage fades and reinforced double-needle stitching throughout.',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-ind', name: 'Vintage Indigo', colorHex: '#1e40af' },
      { id: 'v-blk', name: 'Washed Charcoal', colorHex: '#334155' }
    ],
    specifications: {
      'Fabric Weight': '14 oz Heavyweight Denim',
      'Fit': 'Regular Slim',
      'Pockets': '4 Exterior Pockets, 2 Interior',
      'Closure': 'Custom Brass Buttons'
    }
  },
  {
    id: 'prod-014',
    name: 'Polarized Aviator Sunglasses Titanium Frame',
    slug: 'polarized-aviator-sunglasses-titanium-frame',
    brand: 'Titan',
    category: 'accessories',
    price: 1999,
    originalPrice: 3499,
    discount: 42,
    rating: 4.8,
    reviewCount: 204,
    stock: 32,
    sku: 'TT-SG-AV',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'accessories', 'sunglasses', 'titanium'],
    shortDescription: '100% UV400 anti-glare TAC polarized lenses with featherlight Japanese titanium alloy frames.',
    description: 'Protect your eyes with style. Ultra-lightweight titanium arms weigh less than 18 grams, offering flex hinges that adapt comfortably to any face shape.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-gld', name: 'Gold Frame / Dark Green Lens', colorHex: '#eab308' },
      { id: 'v-slv', name: 'Silver Frame / Smoke Gray', colorHex: '#94a3b8' }
    ],
    specifications: {
      'Lens Material': 'TAC Triacetate Cellulose Polarized',
      'Protection': 'UV400 (UVA & UVB)',
      'Frame Material': 'Beta-Titanium Alloy',
      'Weight': '17.5g'
    }
  },
  {
    id: 'prod-015',
    name: 'Velvet Accent Armchair Mid-Century Modern',
    slug: 'velvet-accent-armchair-mid-century-modern',
    brand: 'ZenHome',
    category: 'home-living',
    price: 12499,
    originalPrice: 17999,
    discount: 30,
    rating: 4.7,
    reviewCount: 76,
    stock: 7,
    sku: 'ZH-AC-VVT',
    isNew: false,
    isFeatured: true,
    isDeal: false,
    tags: ['featured', 'furniture', 'decor', 'armchair'],
    shortDescription: 'Plush stain-resistant velvet upholstery, solid oak tapered legs, high-density foam seat cushion.',
    description: 'Add sophisticated elegance to your living room or study. Features flared armrests and subtle tufted back details for cozy afternoon reading sessions.',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-tea', name: 'Teal Blue', colorHex: '#0f766e' },
      { id: 'v-mus', name: 'Mustard Yellow', colorHex: '#ca8a04' }
    ],
    specifications: {
      'Dimensions': '82cm W x 78cm D x 85cm H',
      'Frame': 'Kilm-Dried Solid Hardwood',
      'Max Weight Capacity': '150 kg',
      'Assembly Required': 'Leg attachment (5 mins)'
    }
  },
  {
    id: 'prod-016',
    name: 'Smart WiFi Robot Vacuum Cleaner with Mop',
    slug: 'smart-wifi-robot-vacuum-cleaner-mop',
    brand: 'Horizon',
    category: 'home-living',
    price: 14999,
    originalPrice: 21999,
    discount: 31,
    rating: 4.6,
    reviewCount: 165,
    stock: 12,
    sku: 'HZ-RV-4000',
    isNew: true,
    isFeatured: true,
    isDeal: true,
    tags: ['new', 'featured', 'deal', 'smart-home', 'vacuum'],
    shortDescription: '4000Pa suction power, LiDAR room mapping, auto-dock charging, Alexa & Google Home compatible.',
    description: 'Keep your floors spotless effortlessly. High-precision LiDAR sensors create interactive 3D floor maps, avoiding obstacles while vacuuming and mopping simultaneously.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-wht', name: 'Pure White', colorHex: '#ffffff' }
    ],
    specifications: {
      'Suction Power': '4000 Pa',
      'Navigation': 'LiDAR LDS 4.0 Laser',
      'Dust Bin Capacity': '450 ml',
      'Water Tank': '250 ml Smart Control',
      'Battery': '5200 mAh (Up to 150 mins)'
    }
  },
  {
    id: 'prod-017',
    name: 'Anti-Aging Night Renewal Cream with Peptides',
    slug: 'anti-aging-night-renewal-cream-peptides',
    brand: 'Botanical',
    category: 'beauty',
    price: 1699,
    originalPrice: 2499,
    discount: 32,
    rating: 4.8,
    reviewCount: 295,
    stock: 38,
    sku: 'BT-NC-PEP',
    isNew: false,
    isFeatured: false,
    isDeal: false,
    tags: ['skincare', 'beauty', 'anti-aging', 'peptides'],
    shortDescription: 'Rich restorative moisturizer infused with copper peptides, squalane, and ceramides.',
    description: 'Wake up to firmer, smoother skin. Designed to boost collagen synthesis overnight while strengthening the moisture barrier against environmental stress.',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-jar', name: '50g Glass Jar', colorHex: '#fbcfe8' }
    ],
    specifications: {
      'Net Weight': '50g',
      'Key Ingredients': 'Copper Tripeptide-1, Squalane, Ceramides',
      'Application': 'Nightly on cleansed face and neck'
    }
  },
  {
    id: 'prod-018',
    name: 'Pro Non-Slip Eco Yoga Mat (6mm Thick)',
    slug: 'pro-non-slip-eco-yoga-mat-6mm',
    brand: 'Apex',
    category: 'sports',
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    rating: 4.9,
    reviewCount: 380,
    stock: 45,
    sku: 'AP-YM-ECO',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'yoga', 'fitness', 'sports'],
    shortDescription: 'Made from biodegradable TPE material, alignment laser lines, double-sided grip texture.',
    description: 'Provides cushion for joints and stability for balancing poses. Free from PVC, latex, and toxic phthalates, with carrying strap included.',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-pur', name: 'Deep Violet', colorHex: '#6b21a8' },
      { id: 'v-grn', name: 'Sage Green', colorHex: '#15803d' }
    ],
    specifications: {
      'Thickness': '6mm High Density Cushion',
      'Dimensions': '183cm x 61cm',
      'Material': 'Eco-TPE (Thermoplastic Elastomer)',
      'Weight': '850g'
    }
  },
  {
    id: 'prod-019',
    name: 'Adjustable Dumbbell Set (2.5kg - 24kg)',
    slug: 'adjustable-dumbbell-set-2-5kg-24kg',
    brand: 'Apex',
    category: 'sports',
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    rating: 4.8,
    reviewCount: 154,
    stock: 11,
    sku: 'AP-DB-ADJ',
    isNew: true,
    isFeatured: true,
    isDeal: false,
    tags: ['new', 'featured', 'gym', 'fitness', 'workout'],
    shortDescription: 'Replaces 15 sets of weights in one compact design. Smooth dial selector mechanism.',
    description: 'Save room in your home gym. Turn the dial to smoothly adjust weight from 2.5 kg all the way up to 24 kg in 1.5 kg increments.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-pair', name: 'Pair (2 Dumbbells)', colorHex: '#18181b' }
    ],
    specifications: {
      'Weight Range': '2.5 to 24 kg per dumbbell',
      'Increments': '15 Weight Settings',
      'Material': 'Steel Plates with Thermoplastic Molding'
    }
  },
  {
    id: 'prod-020',
    name: 'Aura Tablet Pro 11-inch M3 Chip',
    slug: 'aura-tablet-pro-11-inch-m3-chip',
    brand: 'Aura',
    category: 'mobiles',
    price: 49999,
    originalPrice: 59999,
    discount: 16,
    rating: 4.9,
    reviewCount: 320,
    stock: 15,
    sku: 'AU-TAB-11M3',
    isNew: true,
    isFeatured: true,
    isDeal: false,
    tags: ['new', 'featured', 'tablet', 'aura'],
    shortDescription: 'Ultra Retina XDR display, M3 Chip, Apple Pencil Pro support, Thunderbolt 4 port.',
    description: 'Incredible performance in an impossibly thin design. Ideal for digital illustration, 4K video editing, mobile gaming, and desktop multi-tasking.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-spg', name: 'Space Black', colorHex: '#1e293b' },
      { id: 'v-sil', name: 'Silver', colorHex: '#e2e8f0' }
    ],
    specifications: {
      'Processor': 'M3 8-Core CPU / 10-Core GPU',
      'Screen': '11-inch Tandem OLED Display',
      'Storage': '128GB High Speed SSD',
      'Weight': '444g'
    }
  },
  {
    id: 'prod-021',
    name: 'Pure Cold Pressed Organic Extra Virgin Olive Oil',
    slug: 'pure-cold-pressed-organic-extra-virgin-olive-oil',
    brand: 'ZenHome',
    category: 'grocery',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.7,
    reviewCount: 221,
    stock: 60,
    sku: 'ZH-OO-500ML',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'grocery', 'organic', 'oil'],
    shortDescription: 'Single-estate Koroneiki olives harvested in Crete, Greece. First cold press under 27°C.',
    description: 'Unfiltered, rich in polyphenols and healthy monounsaturated fats. Elevates salads, roasted vegetables, dips, and gourmet cooking.',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541256942802-7b29531f0df8?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-500', name: '500ml Glass Bottle', colorHex: '#65a30d' }
    ],
    specifications: {
      'Acidity': '< 0.3%',
      'Origin': 'Chania, Crete, Greece',
      'Volume': '500 ml',
      'Extraction': '100% Cold Pressed'
    }
  },
  {
    id: 'prod-022',
    name: 'Matte Luxe Liquid Lipstick Set (5 Shades)',
    slug: 'matte-luxe-liquid-lipstick-set-5-shades',
    brand: 'Botanical',
    category: 'beauty',
    price: 1199,
    originalPrice: 1899,
    discount: 36,
    rating: 4.6,
    reviewCount: 188,
    stock: 28,
    sku: 'BT-LS-SET5',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'beauty', 'makeup', 'lipstick'],
    shortDescription: 'Transfer-proof 16-hour wear liquid lipsticks enriched with vitamin E and jojoba oil.',
    description: 'Curated 5 universally flattering shades ranging from nude mauve to classic ruby red. Soft velvety matte finish without drying your lips.',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-set', name: '5 Color Gift Vault', colorHex: '#be123c' }
    ],
    specifications: {
      'Shades': 'Dusty Rose, Ruby Red, Bare Nude, Berry Plum, Terracotta',
      'Finish': 'Velvet Matte',
      'Wear Time': 'Up to 16 Hours'
    }
  },
  {
    id: 'prod-023',
    name: 'Classic Genuine Leather Men Quartz Watch',
    slug: 'classic-genuine-leather-men-quartz-watch',
    brand: 'Titan',
    category: 'accessories',
    price: 2899,
    originalPrice: 4499,
    discount: 35,
    rating: 4.8,
    reviewCount: 145,
    stock: 20,
    sku: 'TT-QW-LEA',
    isNew: false,
    isFeatured: true,
    isDeal: true,
    tags: ['featured', 'deal', 'watch', 'accessories', 'leather'],
    shortDescription: 'Japanese Seiko Quartz movement, stainless steel case, anti-scratch mineral crystal dial.',
    description: 'Simple elegance for formal and daily attire. Features sunray blue dial with date window and dark brown calfskin leather strap.',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-blu', name: 'Blue Dial / Brown Leather', colorHex: '#1d4ed8' },
      { id: 'v-blk', name: 'Black Dial / Black Leather', colorHex: '#000000' }
    ],
    specifications: {
      'Case Diameter': '41 mm',
      'Case Thickness': '9.5 mm',
      'Movement': 'Japanese Quartz',
      'Water Resistance': '3 ATM (30 meters)'
    }
  },
  {
    id: 'prod-024',
    name: 'Wireless Ergonomic Vertical Mouse Wave Pro',
    slug: 'wireless-ergonomic-vertical-mouse-wave-pro',
    brand: 'SonicPro',
    category: 'electronics',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.6,
    reviewCount: 209,
    stock: 33,
    sku: 'SP-MS-VERT',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'electronics', 'mouse', 'ergonomic'],
    shortDescription: '57-degree vertical handshake angle reduces forearm strain and wrist pressure during long workdays.',
    description: 'Work healthier and faster. Silent click buttons, smooth thumb scroll wheel, and high-precision optical sensor with switchable DPI (800-4000).',
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-gr', name: 'Graphite Black', colorHex: '#1f2937' },
      { id: 'v-wh', name: 'Off-White', colorHex: '#f3f4f6' }
    ],
    specifications: {
      'Angle': '57-Degree Ergonomic Lift',
      'DPI Range': '800 / 1600 / 2400 / 4000 DPI',
      'Battery': 'Rechargeable 500 mAh (3 months per charge)',
      'Connectivity': 'Bluetooth 5.1 + 2.4GHz USB Dongle'
    }
  },
  {
    id: 'prod-025',
    name: 'Women Oversized Knit Cashmere Sweater',
    slug: 'women-oversized-knit-cashmere-sweater',
    brand: 'UrbanFit',
    category: 'fashion',
    price: 3299,
    originalPrice: 5299,
    discount: 37,
    rating: 4.8,
    reviewCount: 98,
    stock: 17,
    sku: 'UF-SW-CSH',
    isNew: true,
    isFeatured: true,
    isDeal: false,
    tags: ['new', 'featured', 'fashion', 'knitwear', 'sweater'],
    shortDescription: '100% Mongolian Grade-A cashmere, buttery soft rib knit collar, relaxed drop-shoulder silhouette.',
    description: 'Wrap yourself in pure warmth. Exceptionally light yet 8 times warmer than sheep wool. Perfect for cozy layering over dresses or tailored trousers.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-crm', name: 'Oatmeal Cream', colorHex: '#fef3c7' },
      { id: 'v-ros', name: 'Dusty Rose', colorHex: '#f472b6' }
    ],
    specifications: {
      'Material': '100% Mongolian Cashmere (2-ply 12G)',
      'Fit': 'Oversized / Relaxed',
      'Care': 'Dry clean or gentle hand wash cold'
    }
  },
  {
    id: 'prod-026',
    name: 'Stainless Steel Insulated Water Bottle 1000ml',
    slug: 'stainless-steel-insulated-water-bottle-1000ml',
    brand: 'Apex',
    category: 'sports',
    price: 999,
    originalPrice: 1599,
    discount: 37,
    rating: 4.9,
    reviewCount: 540,
    stock: 75,
    sku: 'AP-WB-1L',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'bottle', 'sports', 'insulated'],
    shortDescription: 'Keeps drinks cold for 24 hours or hot for 12 hours. Double wall vacuum insulation with leakproof straw lid.',
    description: 'BPA-free 18/8 food grade stainless steel construction. Powder-coated exterior finish provides slip-free grip and sweat-free condensation barrier.',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-mat', name: 'Matte Onyx Black', colorHex: '#09090b' },
      { id: 'v-teal', name: 'Pacific Teal', colorHex: '#0891b2' }
    ],
    specifications: {
      'Capacity': '1000 ml (32 oz)',
      'Insulation': 'Double Wall TempShield Vacuum',
      'Lid': 'Flex Straw Lid + Wide Mouth Lid Included'
    }
  },
  {
    id: 'prod-027',
    name: 'Aura Smartphone Lite 5G (128GB)',
    slug: 'aura-smartphone-lite-5g-128gb',
    brand: 'Aura',
    category: 'mobiles',
    price: 18999,
    originalPrice: 23999,
    discount: 20,
    rating: 4.5,
    reviewCount: 176,
    stock: 21,
    sku: 'AU-SPL-128',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'mobile', '5g', 'aura'],
    shortDescription: '6.6" 90Hz AMOLED display, 64MP AI dual camera, 5000mAh battery, 33W fast charging.',
    description: 'Everything you need in a modern 5G smartphone without breaking the bank. Sleek lightweight body with crystal clear screen and expandable storage.',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-blu', name: 'Ice Blue', colorHex: '#38bdf8' }
    ],
    specifications: {
      'Processor': 'MediaTek Dimensity 7050 5G',
      'RAM': '8GB',
      'Storage': '128GB (Expandable up to 1TB)',
      'Battery': '5000 mAh'
    }
  },
  {
    id: 'prod-028',
    name: 'Smart Air Purifier with HEPA H13 Filter',
    slug: 'smart-air-purifier-hepa-h13-filter',
    brand: 'ZenHome',
    category: 'home-living',
    price: 6999,
    originalPrice: 10999,
    discount: 36,
    rating: 4.8,
    reviewCount: 190,
    stock: 16,
    sku: 'ZH-AP-H13',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'home-living', 'air-purifier', 'hepa'],
    shortDescription: 'Filters 99.97% of dust, pollen, smoke, PM2.5 particles, and pet dander in rooms up to 500 sq ft.',
    description: 'Breathe cleaner air every minute. Equipped with real-time PM2.5 numerical display sensor, ultra-quiet 22dB sleep mode, and smart smartphone app connectivity.',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-wht', name: 'Gloss White', colorHex: '#ffffff' }
    ],
    specifications: {
      'CADR Rate': '380 m³/h',
      'Coverage Area': 'Up to 500 sq. ft.',
      'Filter Life': '6 - 12 Months',
      'Noise Level': '22dB - 52dB'
    }
  },
  {
    id: 'prod-029',
    name: 'Raw Unfiltered Wildflower Honey (1kg)',
    slug: 'raw-unfiltered-wildflower-honey-1kg',
    brand: 'ZenHome',
    category: 'grocery',
    price: 649,
    originalPrice: 899,
    discount: 27,
    rating: 4.9,
    reviewCount: 312,
    stock: 80,
    sku: 'ZH-HN-1KG',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'grocery', 'honey', 'organic'],
    shortDescription: '100% pure raw honey harvested from wild mountain blossoms. Unpasteurized and rich in natural enzymes.',
    description: 'Golden, thick, aromatic honey containing natural pollen and propolis. No added sugar, syrup, or preservatives.',
    images: [
      'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-1kg', name: '1000g Glass Jar', colorHex: '#f59e0b' }
    ],
    specifications: {
      'Purity': '100% Pure Raw Honey',
      'Processing': 'Unfiltered & Cold Extracted',
      'Weight': '1000g'
    }
  },
  {
    id: 'prod-030',
    name: 'True Wireless Earbuds ANC Studio Bass',
    slug: 'true-wireless-earbuds-anc-studio-bass',
    brand: 'SonicPro',
    category: 'electronics',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.7,
    reviewCount: 489,
    stock: 40,
    sku: 'SP-TWS-ANC',
    isNew: true,
    isFeatured: true,
    isDeal: true,
    tags: ['new', 'featured', 'deal', 'earbuds', 'audio'],
    shortDescription: 'Active Noise Cancellation (-32dB), low latency game mode (40ms), 32-hour playback with wireless charging case.',
    description: 'Punchy bass, crisp highs, and crystal clear call clarity. Quad microphone ENC filters out background traffic noise during phone calls.',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-wht', name: 'Pearl White', colorHex: '#ffffff' },
      { id: 'v-blk', name: 'Piano Black', colorHex: '#000000' }
    ],
    specifications: {
      'ANC Depth': '-32 dB',
      'Bluetooth': 'v5.3 AAC/SBC',
      'Playtime': '8 Hours (Earbuds) + 24 Hours (Case)',
      'Water Resistance': 'IPX5 Splashproof'
    }
  },
  {
    id: 'prod-031',
    name: 'Classic Polarized Wayfarer Sunglasses',
    slug: 'classic-polarized-wayfarer-sunglasses',
    brand: 'Titan',
    category: 'accessories',
    price: 1299,
    originalPrice: 2199,
    discount: 40,
    rating: 4.5,
    reviewCount: 167,
    stock: 25,
    sku: 'TT-SG-WF',
    isNew: false,
    isFeatured: false,
    isDeal: true,
    tags: ['deal', 'accessories', 'sunglasses'],
    shortDescription: 'Matte acetate frame with scratch-resistant green polarized lenses.',
    description: 'Iconic shape crafted for timeless summer style. Offers complete glare reduction for driving, beach days, and outdoor sports.',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-blk', name: 'Matte Black', colorHex: '#0f172a' }
    ],
    specifications: {
      'Frame': 'Handcrafted Acetate',
      'Protection': 'UV400 Polarized'
    }
  },
  {
    id: 'prod-032',
    name: 'Organic Matcha Green Tea Powder (100g)',
    slug: 'organic-matcha-green-tea-powder-100g',
    brand: 'ZenHome',
    category: 'grocery',
    price: 1099,
    originalPrice: 1599,
    discount: 31,
    rating: 4.9,
    reviewCount: 260,
    stock: 55,
    sku: 'ZH-MT-100G',
    isNew: true,
    isFeatured: false,
    isDeal: false,
    tags: ['new', 'grocery', 'tea', 'organic', 'matcha'],
    shortDescription: '100% Ceremonial grade stone-ground matcha imported directly from Uji, Kyoto, Japan.',
    description: 'Vibrant green color with silky smooth umami taste. Rich in L-theanine and antioxidants for calm, sustained mental focus.',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80'
    ],
    variants: [
      { id: 'v-tin', name: '100g Sealed Tin', colorHex: '#22c55e' }
    ],
    specifications: {
      'Grade': 'First Harvest Ceremonial Grade',
      'Origin': 'Uji, Kyoto, Japan',
      'Net Weight': '100g'
    }
  }
];
