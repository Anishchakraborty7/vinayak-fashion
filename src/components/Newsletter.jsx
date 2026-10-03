import React, { useState } from 'react';
import { Sparkles, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#D4AF37', '#F7E5A9', '#7A1C28', '#FFFFFF']
        });
      } catch {}
    }
  };

  return (
    <section className="site-section newsletter-section" id="newsletter" style={{
      background: 'linear-gradient(135deg, #1C060A 0%, #300C13 50%, #150508 100%)',
      borderTop: '1px solid var(--border-gold-subtle)',
      borderBottom: '1px solid var(--border-gold-subtle)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4.5rem, 8vw, 7rem) 0'
    }}>
      {/* Decorative Gold Rings */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '720px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <Sparkles size={13} color="var(--gold-primary)" />
          <span>The Atelier Circle</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.04em',
          marginBottom: '1rem',
          lineHeight: 1.15
        }}>
          JOIN THE <span className="gold-gradient-text">VINAYAK WORLD</span>
        </h2>

        <p style={{
          fontSize: 'clamp(0.98rem, 1.3vw, 1.15rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          fontWeight: 300
        }}>
          Be the first to discover new collections, fashion stories and upcoming launches.
        </p>

        {!joined ? (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '520px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                flex: '1 1 280px',
                padding: '16px 22px',
                fontSize: '0.92rem',
                fontFamily: 'var(--font-sans)',
                background: 'rgba(20, 10, 12, 0.85)',
                border: '1px solid var(--border-gold-bright)',
                borderRadius: '4px',
                color: 'var(--text-primary)',
                outline: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
              }}
            />
            <button
              type="submit"
              className="btn-luxury"
              id="btn-newsletter-join"
              style={{ padding: '16px 32px' }}
            >
              <span>Join Us</span>
              <Send size={15} />
            </button>
          </form>
        ) : (
          <div style={{
            padding: '24px 32px',
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid var(--gold-primary)',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'fadeInSuccess 0.4s ease'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#150608'
            }}>
              <Check size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--gold-light)' }}>
                You're on the list ✨
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Welcome to the inner sanctum of Vinayak Fashion.
              </div>
            </div>
          </div>
        )}

        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.06em'
        }}>
          Discreet communications only. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
}
