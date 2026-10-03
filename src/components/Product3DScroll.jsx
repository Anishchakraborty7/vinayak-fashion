import React, { useRef } from 'react';
import { PRODUCTS } from '../data/products';
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Heart } from 'lucide-react';

export default function Product3DScroll({ onSelectProduct, onOpenModal }) {
  const scrollRef = useRef(null);

  const scrollProducts = PRODUCTS.filter(p => p.in3DScroll);

  const handleScrollTo = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 18;
    const rotateY = (x / rect.width) * 18;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="site-section product-3d-scroll-section" id="collections" style={{
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(35, 10, 16, 0.4) 50%, var(--bg-dark) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Gold Floating Rings in Background */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-100px',
        width: '450px',
        height: '450px',
        border: '1px solid rgba(212, 175, 55, 0.08)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="site-container">
        {/* Section Header with Controls */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          gap: '1.5rem'
        }}>
          <div>
            <div className="section-label">
              <span>Dimensional Haute Couture</span>
            </div>
            <h2 className="section-heading">
              IMMERSIVE <span className="gold-gradient-text">3D SHOWCASE</span>
            </h2>
            <p className="section-subtitle">
              Interact with our signature creations in 3D perspective. Hover and glide through royal silks, antique gold temple jewellery, and ceremonial couture.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => handleScrollTo('left')}
              className="btn-luxury-outline"
              aria-label="Previous products"
              style={{
                width: '48px',
                height: '48px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScrollTo('right')}
              className="btn-luxury-outline"
              aria-label="Next products"
              style={{
                width: '48px',
                height: '48px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3D Scrolling Gallery */}
        <div
          ref={scrollRef}
          className="product-3d-track"
          style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            paddingBottom: '2.5rem',
            paddingTop: '1rem',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {scrollProducts.map((product, idx) => (
            <div
              key={product.id}
              className="product-3d-card"
              onMouseMove={(e) => handleCardMouseMove(e, idx)}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => onSelectProduct(product)}
              style={{
                flex: '0 0 clamp(290px, 32vw, 360px)',
                scrollSnapAlign: 'start',
                background: 'rgba(22, 14, 16, 0.75)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.05)',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Product Visual Container */}
              <div style={{
                position: 'relative',
                height: '420px',
                overflow: 'hidden',
                background: '#150E10'
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="product-img-zoom"
                />

                {/* Dark Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 40%, rgba(13, 8, 9, 0.9) 100%)',
                  pointerEvents: 'none'
                }} />

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '5px 12px',
                  background: 'rgba(26, 7, 11, 0.85)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '3px',
                  backdropFilter: 'blur(8px)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)'
                }}>
                  {product.badge}
                </div>

                {/* Top Action Icons */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(`Wishlist — ${product.name}`);
                    }}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(20, 10, 12, 0.85)',
                      border: '1px solid var(--border-gold-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    title="Add to Wishlist"
                  >
                    <Heart size={16} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(20, 10, 12, 0.85)',
                      border: '1px solid var(--border-gold-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    title="Quick Preview"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info Card Body */}
              <div style={{ padding: '1.5rem', position: 'relative' }}>
                <div style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  marginBottom: '6px'
                }}>
                  {product.subCategory} • {product.category}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>
                  {product.name}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-dark-subtle)'
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      color: 'var(--gold-light)',
                      fontWeight: 600,
                      letterSpacing: '0.05em'
                    }}>
                      {product.price}
                    </span>
                  </div>

                  <span className="btn-editorial-link" style={{ fontSize: '0.78rem' }}>
                    <span>Explore Piece</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
