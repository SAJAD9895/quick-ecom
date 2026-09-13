import React, { useEffect } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { CategoriesSection } from '../sections/CategoriesSection';
import { FeaturedProductsSection } from '../sections/FeaturedProductsSection';
import { DealsSection } from '../sections/DealsSection';
import { NewArrivalsSection } from '../sections/NewArrivalsSection';
import { PromoBannerSection } from '../sections/PromoBannerSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { NewsletterSection } from '../sections/NewsletterSection';

export const Home = () => {
  useEffect(() => {
    document.title = 'Quick-Ecom — Everything You Need. One Quick Shop.';
  }, []);

  return (
    <div className="space-y-4">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <DealsSection />
      <NewArrivalsSection />
      <PromoBannerSection />
      <WhyUsSection />
      <NewsletterSection />
    </div>
  );
};
