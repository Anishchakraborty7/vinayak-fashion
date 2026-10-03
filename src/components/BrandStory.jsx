import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="site-section brand-story-section" id="story" style={{
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #17070B 50%, var(--bg-dark) 100%)',
      position: 'relative',
      padding: 'clamp(5rem, 10vw, 8rem) 0'
    }}>
      <div className="site-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center'
        }}>
          {/* Left: Magazine Narrative */}
          <div>
            <div className="section-label">
              <Compass size={14} color="var(--gold-primary)" />
              <span>Our Genesis & Mission</span>
            </div>

            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              A STORY WOVEN IN <br />
              <span className="gold-gradient-text">SACRED TRADITION</span>
            </h2>

            {/* Decorative Gold Separator */}
            <div style={{
              width: '80px',
              height: '2px',
              background: 'var(--gold-gradient)',
              marginBottom: '2rem'
            }} />

            <div style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.35rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              "Every thread holds a prayer. Every weave records the heartbeat of an artisan who poured weeks of devotion into a single garment."
            </div>

            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              marginBottom: '1.25rem'
            }}>
              Vinayak Fashion was established with a singular conviction: to preserve the soul of Indian textile heritage against the tide of mass-produced fashion. In an era of fleeting trends, we stand firmly for slow, deliberate, generational artistry.
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '2rem'
            }}>
              Our master weavers in Varanasi, Kanchipuram, and Rajasthan belong to lineages that have dressed maharajas and maharanis. We support these artisanal clusters with fair wages, sustainable natural fibers, and a global platform that honors their magnificent talent.
            </p>

            {/* Editorial Signature Block */}
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-gold-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  Vinayak Fashion Design Studio
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Handcrafted with Pride in India
                </div>
              </div>

              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: '1px solid var(--border-gold-bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={20} color="var(--gold-primary)" />
              </div>
            </div>
          </div>

          {/* Right: Large Editorial Imagery */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--border-gold-subtle)'
            }}>
              <img
                src="/assets/images/story-weaving.jpg"
                alt="Vinayak Fashion Handloom Weaving Story"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'clamp(420px, 56vh, 600px)',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Floating Editorial Quote Card */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: 'clamp(10px, 5%, 30px)',
              padding: '18px 24px',
              background: 'rgba(22, 12, 15, 0.92)',
              border: '1px solid var(--border-gold-bright)',
              borderRadius: '6px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
              maxWidth: '340px'
            }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '4px' }}>
                Handcrafted Guarantee
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                Zero synthetic fibers. 100% natural silks and organic weaves.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
