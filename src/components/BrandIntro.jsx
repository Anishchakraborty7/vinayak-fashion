import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function BrandIntro({ onOpenStory }) {
  return (
    <section className="site-section brand-intro-section" id="intro" style={{
      background: 'var(--bg-dark)',
      position: 'relative'
    }}>
      <div className="site-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5.5rem)',
          alignItems: 'center'
        }}>
          {/* Left: Artisan Craftsmanship Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--border-gold-subtle)'
            }}>
              <img
                src="/assets/images/brand-craft.jpg"
                alt="Vinayak Fashion Artisanal Handloom Craftsmanship"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'clamp(380px, 50vh, 520px)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(13, 8, 10, 0.85) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Inset Label */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                padding: '12px 18px',
                background: 'rgba(20, 10, 12, 0.85)',
                border: '1px solid var(--border-gold-subtle)',
                backdropFilter: 'blur(8px)',
                borderRadius: '4px'
              }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                  Sacred Handloom Looms
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  Preserving centuries of generational Varanasi & Kanchipuram weaving
                </div>
              </div>
            </div>

            {/* Corner Traditional Motif Accent */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '40px',
              height: '40px',
              borderTop: '2px solid var(--gold-primary)',
              borderLeft: '2px solid var(--gold-primary)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-10px',
              width: '40px',
              height: '40px',
              borderBottom: '2px solid var(--gold-primary)',
              borderRight: '2px solid var(--gold-primary)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right: Editorial Storytelling */}
          <div>
            <div className="section-label">
              <span>Philosophy & Heritage</span>
            </div>

            <h2 className="section-heading">
              ROOTED IN <br />
              <span className="gold-gradient-text">INDIAN TRADITION</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.45rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              fontWeight: 400
            }}>
              "True luxury does not imitate the world. It draws from the deepest springs of ancestral memory."
            </p>

            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.25rem'
            }}>
              Vinayak Fashion was born from an unwavering reverence for India’s glorious textile heritage. We believe that an authentic Indian garment is never merely cloth — it is an archive of culture, an architectural marvel of gold and silver zari, and a celebration of human dexterity.
            </p>

            <p style={{
              fontSize: '0.94rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '2rem'
            }}>
              By marrying centuries-old handloom techniques with refined contemporary tailoring, we craft statement pieces meant to be cherished today and passed down as tomorrow’s heirlooms.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-dark-subtle)'
            }}>
              <button
                onClick={onOpenStory}
                className="btn-luxury-outline"
                id="btn-intro-story"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={16} />
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>
                <Sparkles size={16} />
                <span>Heirloom Promise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
