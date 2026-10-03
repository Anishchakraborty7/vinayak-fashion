import React from 'react';
import { Heart, Eye, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct, onOpenModal }) {
  return (
    <div
      className="luxury-product-card"
      onClick={() => onSelectProduct(product)}
      style={{
        background: 'rgba(22, 14, 17, 0.7)',
        border: '1px solid var(--border-gold-subtle)',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease'
      }}
    >
      {/* Product Image Frame */}
      <div style={{
        position: 'relative',
        height: '380px',
        overflow: 'hidden',
        backgroundColor: '#160E11'
      }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="prod-card-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Subtle Vignette Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 50%, rgba(13, 8, 10, 0.8) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Top Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '4px 10px',
            background: 'rgba(20, 7, 10, 0.85)',
            border: '1px solid var(--border-gold-subtle)',
            borderRadius: '2px',
            backdropFilter: 'blur(8px)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)'
          }}>
            {product.badge}
          </div>
        )}

        {/* Top Action Icons */}
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 3
        }}>
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(`Wishlist — ${product.name}`);
            }}
            className="card-action-btn"
            title="Add to Wishlist"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(20, 10, 12, 0.85)',
              border: '1px solid var(--border-gold-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={15} />
          </button>

          {/* Quick Preview Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="card-action-btn"
            title="View Details"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(20, 10, 12, 0.85)',
              border: '1px solid var(--border-gold-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Eye size={15} />
          </button>
        </div>
      </div>

      {/* Info Body */}
      <div style={{
        padding: '1.25rem 1.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          <div style={{
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            marginBottom: '6px'
          }}>
            {product.subCategory} • {product.category}
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.18rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            lineHeight: 1.35,
            marginBottom: '8px'
          }}>
            {product.name}
          </h3>

          <p style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.description}
          </p>
        </div>

        {/* Card Footer with Price & Explore Action */}
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
              fontSize: '1.1rem',
              color: 'var(--gold-light)',
              fontWeight: 600
            }}>
              {product.price}
            </span>
          </div>

          <span className="btn-editorial-link" style={{ fontSize: '0.75rem' }}>
            <span>Explore</span>
            <ArrowRight size={13} />
          </span>
        </div>
      </div>

      <style>{`
        .luxury-product-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold-primary) !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.2) !important;
        }
        .luxury-product-card:hover .prod-card-image {
          transform: scale(1.08);
        }
        .card-action-btn:hover {
          background: var(--gold-primary) !important;
          color: #150508 !important;
          border-color: var(--gold-light) !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
