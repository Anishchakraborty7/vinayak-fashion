import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FashionBanner({ onExplore }) {
  return (
    <section className="fullwidth-fashion-banner" style={{
      position: 'relative',
      minHeight: 'clamp(480px, 65vh, 650px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderTop: '1px solid var(--border-gold-subtle)',
      borderBottom: '1px solid var(--border-gold-subtle)'
    }}>
      {/* Background Image with Slow Ambient Zoom */}
      <img
        src="/assets/images/banner-full.jpg"
        alt="Vinayak Fashion Regal Heritage Palace"
        loading="lazy"
        className="banner-zoom-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          animation: 'slowZoom 25s ease-in-out infinite alternate',
          transformOrigin: 'center center'
        }}
      />

      {/* Deep Burgundy & Noir Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(13, 8, 10, 0.7) 0%, rgba(43, 8, 14, 0.6) 50%, rgba(13, 8, 10, 0.85) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Floating Center Content */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          background: 'rgba(20, 8, 11, 0.8)',
          border: '1px solid var(--border-gold-bright)',
          borderRadius: '30px',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(8px)'
        }}>
          <Sparkles size={14} color="var(--gold-primary)" />
          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)'
          }}>
            Imperial Splendor
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          letterSpacing: '0.04em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
        }}>
          WEAR YOUR <br />
          <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontWeight: 400 }}>
            HERITAGE
          </span>
        </h2>

        <p style={{
          fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '620px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          fontWeight: 300
        }}>
          Crafted for those who walk with royalty in their stride. Experience garments woven with eternal Indian grace.
        </p>

        <button
          onClick={onExplore}
          className="btn-luxury"
          id="btn-banner-explore"
          style={{ padding: '16px 42px', fontSize: '0.9rem' }}
        >
          <span>Explore Vinayak Fashion</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
}
