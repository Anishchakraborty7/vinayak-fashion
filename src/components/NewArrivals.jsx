import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';

export default function NewArrivals({ onSelectProduct, onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Women', 'Men', 'Accessories', 'Traditional', 'New'];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Women') return product.category === 'Women';
    if (activeFilter === 'Men') return product.category === 'Men';
    if (activeFilter === 'Accessories') return product.category === 'Accessories';
    if (activeFilter === 'Traditional') return product.tags.includes('Traditional');
    if (activeFilter === 'New') return product.tags.includes('New');
    return true;
  });

  return (
    <section className="site-section new-arrivals-section" id="new-arrivals" style={{
      background: 'var(--bg-dark)',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-label">
            <Sparkles size={13} color="var(--gold-primary)" />
            <span>Seasonal Premieres</span>
          </div>
          <h2 className="section-heading">
            NEW <span className="gold-gradient-text">ARRIVALS</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Fresh off the master looms. A limited curation of hand-embroidered ensembles, pure silks, and royal statement pieces.
          </p>
        </div>

        {/* Filter Tabs (Section 14) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '3rem'
        }}>
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="filter-pill-btn"
                style={{
                  padding: '9px 22px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#140608' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid var(--gold-light)' : '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.25rem)'
        }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        {/* Catalog Note */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          padding: '24px',
          background: 'rgba(22, 14, 16, 0.5)',
          border: '1px solid var(--border-gold-subtle)',
          borderRadius: '8px',
          maxWidth: '680px',
          margin: '3.5rem auto 0'
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            color: 'var(--gold-light)',
            marginBottom: '6px'
          }}>
            Exclusive Bridal & Couture Concierge
          </div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Seeking a bespoke color palette, customized kali flair, or bridal trousseau consultation? Our master design studio provides private commissions.
          </p>
          <button
            onClick={() => onOpenModal('Bespoke Bridal Trousseau Commission')}
            className="btn-luxury-outline"
            style={{ marginTop: '14px', fontSize: '0.78rem', padding: '10px 24px' }}
          >
            Inquire for Custom Creation
          </button>
        </div>
      </div>
    </section>
  );
}
