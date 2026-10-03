import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenComingSoon }) {
  const [selectedImg, setSelectedImg] = useState(product?.image || null);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  const displayImg = selectedImg || product.image;
  const galleryList = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div
      className="product-modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(10, 6, 8, 0.9)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 4vw, 2.5rem)',
        overflowY: 'auto',
        animation: 'modalFadeIn 0.3s ease'
      }}
    >
      <div
        className="product-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#160E12',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(68, 13, 23, 0.35) 0%, #160E12 80%)',
          border: '1px solid var(--border-gold-bright)',
          borderRadius: '12px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.12)',
          position: 'relative',
          padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          animation: 'modalScaleUp 0.3s ease'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-gold-subtle)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          aria-label="Close product modal"
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          alignItems: 'center'
        }}>
          {/* Left: Product Imagery with Thumbnails */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              height: 'clamp(360px, 48vh, 500px)',
              border: '1px solid var(--border-gold-subtle)',
              marginBottom: '1rem',
              background: '#0F080A'
            }}>
              <img
                src={displayImg}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {product.badge && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '5px 12px',
                  background: 'rgba(20, 7, 10, 0.88)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '2px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)'
                }}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {galleryList.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(img)}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: selectedImg === img ? '2px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    padding: 0,
                    opacity: selectedImg === img ? 1 : 0.6,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Narrative & Actions */}
          <div>
            <div style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              marginBottom: '6px',
              fontWeight: 600
            }}>
              {product.category} • {product.subCategory}
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '10px',
              lineHeight: 1.2
            }}>
              {product.name}
            </h2>

            {/* Price section */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              marginBottom: '1.25rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--gold-light)'
              }}>
                {product.price}
              </span>
              {product.originalPrice && (
                <span style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through'
                }}>
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p style={{
              fontSize: '0.94rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem'
            }}>
              {product.description}
            </p>

            {/* Technical Specifications */}
            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-gold-subtle)',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.85rem'
            }}>
              <div>
                <strong style={{ color: 'var(--gold-primary)' }}>Fabric & Zari: </strong>
                <span style={{ color: 'var(--text-primary)' }}>{product.fabric}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--gold-primary)' }}>Artisanship: </strong>
                <span style={{ color: 'var(--text-primary)' }}>{product.craftsmanship}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--gold-primary)' }}>Provenance: </strong>
                <span style={{ color: 'var(--text-primary)' }}>{product.origin}</span>
              </div>
            </div>

            {/* Color Swatches */}
            {product.colors && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Available Bespoke Hues
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {product.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: c,
                        border: selectedColor === idx ? '2px solid var(--gold-light)' : '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: selectedColor === idx ? '0 0 10px var(--gold-primary)' : 'none',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  onClose();
                  onOpenComingSoon(`Pre-order / Reserve — ${product.name}`);
                }}
                className="btn-luxury"
                style={{ flex: '1 1 200px' }}
              >
                <ShoppingBag size={16} />
                <span>Reserve for Launch</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenComingSoon(`Wishlist — ${product.name}`);
                }}
                className="btn-luxury-outline"
                style={{ padding: '14px 20px' }}
                title="Add to Wishlist"
              >
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
