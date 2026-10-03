import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, onStoryClick }) {
  return (
    <section className="hero-section" id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'clamp(100px, 14vh, 140px)',
      paddingBottom: 'clamp(50px, 8vh, 90px)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #12090C 0%, #26080E 40%, #0E0709 100%)',
    }}>
      {/* Background Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(143, 29, 44, 0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(50px)'
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'center'
        }}>
          {/* LEFT: Brand Statement & Typography */}
          <div style={{ maxWidth: '640px' }}>
            {/* Traditional Label */}
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} color="var(--gold-primary)" />
              <span>Haute Couture • Indian Heritage</span>
            </div>

            {/* Main Brand Title */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 6.2vw, 5.25rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              VINAYAK <br />
              <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                FASHION
              </span>
            </h1>

            {/* Tagline */}
            <div style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '0.02em',
              marginBottom: '1.5rem'
            }}>
              Tradition, Reimagined.
            </div>

            {/* Editorial Paragraph */}
            <p style={{
              fontSize: 'clamp(0.95rem, 1.2vw, 1.12rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontWeight: 300,
              maxWidth: '520px'
            }}>
              An ode to centuries of royal Indian handloom mastery. Where pure Banarasi zari, heirloom silks, and majestic silhouettes converge into the contemporary world.
            </p>

            {/* Two Sophisticated CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <button
                onClick={onExploreClick}
                className="btn-luxury"
                id="btn-hero-explore"
              >
                <span>Explore Collection</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onStoryClick}
                className="btn-luxury-outline"
                id="btn-hero-story"
              >
                <Compass size={16} />
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Micro Pillars */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(1.2rem, 3vw, 2.5rem)',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-gold-subtle)'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                  100%
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Handloom Mulberry Silk
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                  180+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Hours of Hand Crafting
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                  24K
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Antique Gold Foil Zari
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Fashion Composition & 3D Interactive Medallion */}
          <div style={{ position: 'relative' }}>
            {/* Visual Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--border-gold-bright)',
              background: '#150A0D'
            }}>
              <img
                src="/assets/images/hero-fashion.jpg"
                alt="Vinayak Fashion Luxury Indian Couture Saree"
                style={{
                  width: '100%',
                  height: 'clamp(420px, 58vh, 620px)',
                  objectFit: 'cover',
                  filter: 'contrast(1.05) brightness(0.95)'
                }}
              />

              {/* Gradient Vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(13, 8, 10, 0.05) 0%, rgba(35, 10, 16, 0.15) 60%, rgba(13, 8, 10, 0.75) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Inset Haute Couture Editorial Label */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 20px',
                background: 'rgba(20, 10, 12, 0.85)',
                border: '1px solid var(--border-gold-subtle)',
                backdropFilter: 'blur(10px)',
                borderRadius: '4px',
                pointerEvents: 'none'
              }}>
                <div>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    Signature Heritage Edition
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                    Pure Banarasi Katan Silk & Antique Zari
                  </div>
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  color: 'var(--gold-light)',
                  border: '1px solid var(--border-gold-subtle)',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}>
                  Heirloom
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Border Offset */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              right: '-14px',
              bottom: '14px',
              left: '14px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              pointerEvents: 'none',
              zIndex: -1
            }} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          marginTop: '3.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '0.72rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase'
        }}>
          <span>Scroll to Discover Heritage</span>
          <span style={{ animation: 'bounceDown 2s infinite', color: 'var(--gold-primary)' }}>↓</span>
        </div>
      </div>

      <style>{`
        @keyframes bounceDown {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
}
