import React from 'react';
import { BRAND_VALUES } from '../data/products';
import { Crown, Sparkles, Gem, ShieldCheck } from 'lucide-react';

export default function WhyVinayak() {
  const getIcon = (type) => {
    switch (type) {
      case 'crown': return <Crown size={28} color="var(--gold-primary)" />;
      case 'sparkles': return <Sparkles size={28} color="var(--gold-primary)" />;
      case 'gem': return <Gem size={28} color="var(--gold-primary)" />;
      case 'shield-check': default: return <ShieldCheck size={28} color="var(--gold-primary)" />;
    }
  };

  return (
    <section className="site-section why-vinayak-section" style={{
      background: 'var(--bg-dark)',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">
            <span>The Couture Benchmark</span>
          </div>
          <h2 className="section-heading">
            WHY <span className="gold-gradient-text">VINAYAK FASHION</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Four foundational pillars that elevate every Vinayak Fashion creation from clothing into timeless wearable art.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="why-card"
              style={{
                background: 'rgba(24, 15, 18, 0.65)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Corner Pillar Number */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: 'rgba(212, 175, 55, 0.15)',
                fontWeight: 600
              }}>
                0{idx + 1}
              </div>

              {/* Icon Container with subtle glow */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid var(--border-gold-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.75rem',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }} className="why-icon-box">
                {getIcon(val.icon)}
              </div>

              <div style={{
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                marginBottom: '6px'
              }}>
                {val.subtitle}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                letterSpacing: '0.04em'
              }}>
                {val.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontWeight: 300
              }}>
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-8px);
          border-color: var(--gold-primary) !important;
          background: rgba(35, 20, 24, 0.85) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.15) !important;
        }
        .why-card:hover .why-icon-box {
          transform: scale(1.1);
          border-color: var(--gold-light) !important;
        }
      `}</style>
    </section>
  );
}
