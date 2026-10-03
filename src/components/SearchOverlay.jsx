import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../data/products';
import { Search, X, Sparkles } from 'lucide-react';

export default function SearchOverlay({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const suggestions = ["Sarees", "Kurta", "Jewellery", "Accessories", "Women", "Men", "Banarasi", "Zardozi", "Silk"];

  const results = PRODUCTS.filter((item) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.subCategory.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.fabric.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="search-overlay-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(10, 6, 8, 0.94)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(2rem, 6vw, 4rem) 1.5rem',
        overflowY: 'auto',
        animation: 'searchFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid var(--border-gold-subtle)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        aria-label="Close search"
      >
        <X size={22} />
      </button>

      <div style={{ width: '100%', maxWidth: '800px', marginTop: '2rem' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Sparkles size={13} color="var(--gold-primary)" />
            <span>Search Catalog</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--text-primary)',
            fontWeight: 500
          }}>
            Search <span className="gold-gradient-text">Vinayak Fashion</span>
          </h2>
        </div>

        {/* Search Bar Input */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <Search
            size={24}
            color="var(--gold-primary)"
            style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silk, saree, kurta, jewellery, craft..."
            style={{
              width: '100%',
              padding: '18px 24px 18px 60px',
              fontSize: '1.15rem',
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'rgba(26, 12, 16, 0.85)',
              border: '1px solid var(--border-gold-bright)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              outline: 'none',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.15)'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute',
                right: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggested Queries */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '10px'
          }}>
            Suggested Searches:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results / Coming Soon State */}
        {query.trim() && (
          <div>
            <div style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              marginBottom: '1.25rem'
            }}>
              Results for "{query}" ({results.length})
            </div>

            {results.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1.25rem'
              }}>
                {results.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(prod);
                    }}
                    style={{
                      background: 'rgba(25, 14, 18, 0.8)',
                      border: '1px solid var(--border-gold-subtle)',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    className="search-item-card"
                  >
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '12px' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
                        {prod.category}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        margin: '4px 0 6px'
                      }}>
                        {prod.name}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                        {prod.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Coming Soon Elegant Result Animation */
              <div style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                background: 'rgba(25, 12, 16, 0.65)',
                border: '1px solid var(--border-gold-bright)',
                borderRadius: '8px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}>
                  <Sparkles size={24} color="var(--gold-primary)" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: 'var(--gold-light)',
                  marginBottom: '8px'
                }}>
                  COMING SOON
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                  No exact matches found for "{query}". Exclusive additions are actively being prepared in our upcoming royal collection launch.
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="btn-luxury-outline"
                  style={{ fontSize: '0.78rem', padding: '10px 24px' }}
                >
                  View All Suggestions
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes searchFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .search-item-card:hover {
          border-color: var(--gold-primary) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
