import React from 'react';
import { ArrowRight, Gem } from 'lucide-react';

export default function FeaturedCollection({ onExploreCollection }) {
  return (
    <section className="site-section featured-collection-section" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #1C0509 0%, #2D0911 50%, #120508 100%)',
      overflow: 'hidden',
      padding: 'clamp(5rem, 10vw, 9rem) 0'
    }}>
      {/* Background Decorative Gold Arch */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '900px',
        border: '1px solid rgba(212, 175, 55, 0.08)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="site-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2.5rem, 6vw, 6rem)',
          alignItems: 'center'
        }}>
          {/* Left: Editorial Narrative & Statement */}
          <div style={{ maxWidth: '580px' }}>
            <div className="section-label">
              <Gem size={13} color="var(--gold-primary)" />
              <span>Couture Edition 2026</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.1,
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              THE HERITAGE <br />
              <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                COLLECTION
              </span>
            </h2>

            <div style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.45rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              marginBottom: '1.75rem',
              letterSpacing: '0.02em'
            }}>
              Crafted in tradition. Designed for today.
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
              fontWeight: 300
            }}>
              A grand celebration of Indian textile grandeur. Featuring handwoven pure Banarasi brocades with real zari work, paired with sculpted royal menswear and heirloom Jadau jewels designed for regal galas and momentous weddings.
            </p>

            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '2.5rem',
              fontSize: '0.92rem',
              color: 'var(--text-secondary)'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', background: 'var(--gold-primary)' }} />
                <span>Hand-spun Mulberry Silk Warp & Gold Zari Weft</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', background: 'var(--gold-primary)' }} />
                <span>Over 300 Hours of Dedicated Master Artisan Craftsmanship</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', background: 'var(--gold-primary)' }} />
                <span>Limited Edition Heirloom Numbering</span>
              </li>
            </ul>

            <button
              onClick={() => onExploreCollection('The Heritage Collection')}
              className="btn-luxury"
              id="btn-featured-explore"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: Large Editorial Fashion Image Composition */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7), 0 0 35px rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--border-gold-bright)'
            }}>
              <img
                src="/assets/images/featured-collection.jpg"
                alt="Vinayak Fashion The Heritage Collection"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'clamp(460px, 62vh, 660px)',
                  objectFit: 'cover'
                }}
              />

              {/* Editorial Caption Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                padding: '16px 24px',
                background: 'rgba(18, 8, 11, 0.88)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '4px',
                backdropFilter: 'blur(12px)',
                textAlign: 'right'
              }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                  Haute Bridal Edit
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Zardozi & Liquid Gold
                </div>
              </div>
            </div>

            {/* Traditional Corner Gold Accents */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '-16px',
              width: '50px',
              height: '50px',
              borderTop: '2px solid var(--gold-light)',
              borderLeft: '2px solid var(--gold-light)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
