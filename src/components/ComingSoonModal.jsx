import React, { useState } from 'react';
import { X, Sparkles, Bell, Check } from 'lucide-react';

export default function ComingSoonModal({ isOpen, onClose, contextTitle = 'Cart' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div
      className="coming-soon-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(10, 6, 8, 0.88)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'modalFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Modal Dialog Card */}
      <div
        className="coming-soon-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'linear-gradient(135deg, #1C0A0E 0%, #2A0E15 60%, #15070A 100%)',
          border: '1px solid var(--border-gold-bright)',
          borderRadius: '12px',
          padding: 'clamp(2rem, 5vw, 3.25rem)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.15)',
          position: 'relative',
          textAlign: 'center',
          animation: 'modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-gold-subtle)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Brand Insignia / Seal */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(20, 7, 10, 0.8) 70%)',
            border: '1px solid var(--gold-primary)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
          }}>
            <Sparkles size={28} color="var(--gold-primary)" />
          </div>
        </div>

        {/* Context subtitle */}
        <div style={{
          fontSize: '0.75rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--gold-primary)',
          fontWeight: 600,
          marginBottom: '8px'
        }}>
          {contextTitle}
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)',
          fontWeight: 500,
          letterSpacing: '0.04em',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          lineHeight: 1.15
        }}>
          COMING <span className="gold-gradient-text">SOON</span>
        </h2>

        {/* Required Prompt Copy */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '2rem',
          fontWeight: 300
        }}>
          Something beautiful is being prepared for you.
        </p>

        {/* VIP Early Access Notification form */}
        {!subscribed ? (
          <form onSubmit={handleSubmit} style={{ marginBottom: '1.75rem' }}>
            <div style={{
              display: 'flex',
              gap: '8px',
              maxWidth: '420px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for VIP launch access"
                style={{
                  flex: '1 1 220px',
                  padding: '12px 16px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-luxury"
                style={{ padding: '12px 20px', fontSize: '0.78rem' }}
              >
                <Bell size={14} />
                <span>Notify Me</span>
              </button>
            </div>
          </form>
        ) : (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-primary)',
            borderRadius: '30px',
            color: 'var(--gold-light)',
            fontSize: '0.82rem',
            marginBottom: '1.75rem'
          }}>
            <Check size={16} color="var(--gold-primary)" />
            <span>You're on the royal notification list ✨</span>
          </div>
        )}

        {/* Continue Exploring CTA Button */}
        <div>
          <button
            onClick={onClose}
            className="btn-luxury-outline"
            style={{ width: '100%', maxWidth: '320px' }}
          >
            Continue Exploring
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
