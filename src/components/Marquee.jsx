import React from 'react';

export default function Marquee() {
  const marqueeItems = [
    { text: "VINAYAK FASHION", style: "serif-bold" },
    { text: "TRADITION", style: "sans-spaced" },
    { text: "SACRED WEAVES", style: "editorial-italic" },
    { text: "CRAFT", style: "sans-spaced" },
    { text: "ROYAL BANARASI", style: "serif-bold" },
    { text: "STYLE", style: "sans-spaced" },
    { text: "HAUTE COUTURE", style: "editorial-italic" },
    { text: "HERITAGE", style: "sans-spaced" },
    { text: "TIMELESS LUXURY", style: "serif-bold" },
  ];

  return (
    <div className="marquee-wrapper" style={{
      width: '100%',
      overflow: 'hidden',
      padding: '20px 0',
      background: 'linear-gradient(90deg, #1C0509 0%, #300A10 50%, #1C0509 100%)',
      borderTop: '1px solid var(--border-gold-subtle)',
      borderBottom: '1px solid var(--border-gold-subtle)',
      position: 'relative',
      whiteSpace: 'nowrap'
    }}>
      <div className="marquee-track" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2.5rem',
        animation: 'marqueeScroll 35s linear infinite'
      }}>
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>
            <span
              style={{
                fontFamily: item.style === 'serif-bold' ? 'var(--font-serif)' : item.style === 'editorial-italic' ? 'var(--font-editorial)' : 'var(--font-sans)',
                fontStyle: item.style === 'editorial-italic' ? 'italic' : 'normal',
                fontWeight: item.style === 'serif-bold' ? 600 : item.style === 'sans-spaced' ? 500 : 400,
                fontSize: item.style === 'serif-bold' ? '1.25rem' : '1.05rem',
                letterSpacing: item.style === 'sans-spaced' ? '0.24em' : '0.12em',
                textTransform: 'uppercase',
                color: item.style === 'serif-bold' ? 'var(--gold-light)' : 'var(--text-secondary)'
              }}
            >
              {item.text}
            </span>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              transform: 'rotate(45deg)',
              background: 'var(--gold-primary)',
              opacity: 0.7
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
