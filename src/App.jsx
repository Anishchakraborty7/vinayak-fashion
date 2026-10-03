import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BrandIntro from './components/BrandIntro';
import CategorySection from './components/CategorySection';
import Product3DScroll from './components/Product3DScroll';
import FeaturedCollection from './components/FeaturedCollection';
import NewArrivals from './components/NewArrivals';
import Craft3D from './components/Craft3D';
import BrandStory from './components/BrandStory';
import WhyVinayak from './components/WhyVinayak';
import FashionBanner from './components/FashionBanner';
import FashionGallery from './components/FashionGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import ProductModal from './components/ProductModal';
import ComingSoonModal from './components/ComingSoonModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comingSoonContext, setComingSoonContext] = useState(null);
  const wishlistCount = 2;
  const cartCount = 1;

  const openComingSoon = (context) => {
    setComingSoonContext(context);
  };

  const closeComingSoon = () => {
    setComingSoonContext(null);
  };

  const handleExploreHero = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStoryHero = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = () => {
    const el = document.getElementById('new-arrivals');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="vinayak-fashion-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 1. Cinematic Loading Screen on First Visit */}
      {loading && <LoadingScreen onLoaded={() => setLoading(false)} />}

      {/* 2. Custom Desktop Cursor */}
      <CustomCursor />

      {/* 3. Luxury Navigation Bar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenModal={openComingSoon}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
      />

      {/* Main Page Content */}
      <main id="main-content">
        {/* 4. Hero Section with 3D Jewelry Ornament */}
        <Hero
          onExploreClick={handleExploreHero}
          onStoryClick={handleStoryHero}
        />

        {/* 5. Infinite Marquee */}
        <Marquee />

        {/* 6. Brand Introduction: Rooted in Tradition */}
        <BrandIntro onOpenStory={handleStoryHero} />

        {/* 7. Category Showcase: Women, Men, Accessories */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 8. 3D Product Perspective Showcase */}
        <Product3DScroll
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenModal={openComingSoon}
        />

        {/* 9. Featured Collection: The Heritage Collection */}
        <FeaturedCollection
          onExploreCollection={(col) => openComingSoon(col)}
        />

        {/* 10. New Arrivals with Filter Tabs */}
        <NewArrivals
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenModal={openComingSoon}
        />

        {/* 11. Traditional 3D Section: The Art of Indian Craft */}
        <Craft3D onOpenModal={openComingSoon} />

        {/* 12. Brand Story: A Story Woven in Tradition */}
        <BrandStory />

        {/* 13. Why Vinayak Fashion: 4 Pillars */}
        <WhyVinayak />

        {/* 14. Full-width Cinematic Fashion Banner */}
        <FashionBanner onExplore={handleExploreHero} />

        {/* 15. The Vinayak Fashion Gallery */}
        <FashionGallery onOpenModal={openComingSoon} />

        {/* 16. Newsletter: Join the Vinayak World */}
        <Newsletter />
      </main>

      {/* 17. Luxury Footer */}
      <Footer onOpenModal={openComingSoon} />

      {/* Modals & Overlays */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenComingSoon={openComingSoon}
        />
      )}

      <ComingSoonModal
        isOpen={!!comingSoonContext}
        onClose={closeComingSoon}
        contextTitle={comingSoonContext || 'Exclusive Feature'}
      />
    </div>
  );
}
