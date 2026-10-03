import React from 'react';
import { GALLERY_ITEMS } from '../data/products';
import { Sparkles, Eye } from 'lucide-react';

export default function FashionGallery({ onOpenModal }) {
  return (
    <section className="site-section fashion-gallery-section" id="gallery" style={{
      background: 'var(--bg-dark)',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">
            <Sparkles size={13} color="var(--gold-primary)" />
            <span>Visual Editorial</span>
          </div>
          <h2 className="section-heading">
            THE VINAYAK <span className="gold-gradient-text">GALLERY</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated visual archive capturing the majesty of pure zari, intricate resham threads, and royal Indian fashion moments.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="gallery-mosaic-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          gridAutoFlow: 'dense'
        }}>
          {GALLERY_ITEMS.map((item, idx) => {
            // Assign responsive spans for magazine editorial look
            let colSpan = 'span 4';
            let rowSpan = 'span 1';
            let height = '320px';

            if (idx === 0) {
              colSpan = 'span 4';
              rowSpan = 'span 2';
              height = '660px'; // Tall Portrait
            } else if (idx === 1) {
              colSpan = 'span 8';
              height = '320px'; // Wide Landscape
            } else if (idx === 2) {
              colSpan = 'span 4';
              height = '320px';
            } else if (idx === 3) {
              colSpan = 'span 4';
              height = '320px';
            } else if (idx === 4) {
              colSpan = 'span 4';
              height = '320px';
            } else if (idx === 5) {
              colSpan = 'span 8';
              height = '320px';
            }

            return (
              <div
                key={item.id}
                className="gallery-item-tile"
                onClick={() => onOpenModal(`Editorial Exhibition — ${item.title}`)}
                style={{
                  gridColumn: colSpan,
                  gridRow: rowSpan,
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--border-gold-subtle)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                  height: height
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-item-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Hover Overlay */}
                <div
                  className="gallery-item-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(20, 7, 10, 0.2) 0%, rgba(13, 8, 10, 0.85) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.75rem',
                    opacity: 0,
                    transition: 'opacity 0.35s ease'
                  }}
                >
                  <div style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    marginBottom: '4px'
                  }}>
                    {item.category}
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    color: 'var(--gold-light)'
                  }}>
                    <Eye size={14} />
                    <span>View Editorial Story</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-item-tile:hover .gallery-item-img {
          transform: scale(1.08);
        }
        .gallery-item-tile:hover .gallery-item-overlay {
          opacity: 1 !important;
        }
        .gallery-item-tile:hover {
          border-color: var(--gold-primary) !important;
        }
        @media (max-width: 900px) {
          .gallery-mosaic-grid > div {
            grid-column: span 6 !important;
            grid-row: span 1 !important;
            height: 280px !important;
          }
        }
        @media (max-width: 600px) {
          .gallery-mosaic-grid > div {
            grid-column: span 12 !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
