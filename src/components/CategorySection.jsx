import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section className="site-section category-showcase-section" id="categories" style={{
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(26, 7, 11, 0.35) 50%, var(--bg-dark) 100%)',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">
            <span>Couture Pillars</span>
          </div>
          <h2 className="section-heading">
            CURATED <span className="gold-gradient-text">FASHION CHAPTERS</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore our universe through three distinguished domains of luxury Indian dressing, tailored for momentous celebrations and royal weddings.
          </p>
        </div>

        {/* Category Cards Editorial Magazine Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(1.75rem, 3.5vw, 2.75rem)'
        }}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => onSelectCategory(cat.name)}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#160E11',
                border: '1px solid var(--border-gold-subtle)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease'
              }}
            >
              {/* Image Container with Hover Zoom */}
              <div style={{
                position: 'relative',
                height: 'clamp(440px, 55vh, 560px)',
                overflow: 'hidden'
              }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="category-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Rich Gradient Vignette */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(13, 8, 10, 0.15) 0%, rgba(20, 10, 12, 0.4) 40%, rgba(13, 8, 10, 0.95) 100%)',
                  transition: 'opacity 0.4s ease'
                }} />

                {/* Top Corner Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(20, 7, 10, 0.85)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '30px',
                  backdropFilter: 'blur(8px)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)'
                }}>
                  <Sparkles size={12} color="var(--gold-primary)" />
                  <span>{cat.count}</span>
                </div>

                {/* Bottom Content Area */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  zIndex: 2,
                  transform: 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    marginBottom: '8px',
                    fontWeight: 600
                  }}>
                    {cat.subtitle}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    letterSpacing: '0.02em'
                  }}>
                    {cat.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    fontWeight: 300
                  }}>
                    {cat.description}
                  </p>

                  {/* Micro subcategories list */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '1.5rem'
                  }}>
                    {cat.items.map((sub, i) => (
                      <span key={i} style={{
                        padding: '3px 10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        backdropFilter: 'blur(4px)'
                      }}>
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Explore Link with arrow animation */}
                  <div className="btn-editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Explore {cat.name} Collection</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-card:hover {
          transform: translateY(-8px);
          border-color: var(--gold-primary) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.2) !important;
        }
        .category-card:hover .category-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
