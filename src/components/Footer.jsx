import React from 'react';
import BrandLogo from './BrandLogo';
import { Sparkles, ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Categories', href: '#categories' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'Craft & Weaves', href: '#craft' },
    { label: 'About Vinayak', href: '#story' },
  ];

  const customerLinks = ['Wishlist', 'Cart', 'Orders', 'Login', 'Bespoke Atelier', 'Size Guide'];
  const infoLinks = ['Privacy Policy', 'Terms of Service', 'Shipping & Delivery', 'Returns & Exchanges', 'Certificate of Authenticity'];

  return (
    <footer style={{
      background: '#0B0708',
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(68, 13, 23, 0.3) 0%, #0B0708 70%)',
      borderTop: '1px solid var(--border-gold-bright)',
      padding: 'clamp(4rem, 8vw, 6.5rem) 0 2rem',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Top Footer Row: Logo, Brand Statement & Back to Top */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          gap: '2rem'
        }}>
          <div>
            <BrandLogo variant="footer" />
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              marginTop: '1rem',
              maxWidth: '360px',
              lineHeight: 1.6
            }}>
              Where millennia of Indian royal textile heritage meet timeless modern luxury.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-luxury-outline"
            style={{
              padding: '12px 20px',
              fontSize: '0.75rem',
              gap: '8px'
            }}
          >
            <span>Back to Pinnacle</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Four Column Directory Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          padding: '3.5rem 0'
        }}>
          {/* Col 1: Navigation */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              Navigation
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Customer Concierge */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              Client Care
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {customerLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenModal(item)}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Information & Ethics */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              Information
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {infoLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenModal(item)}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social Ateliers */}
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              marginBottom: '1.25rem'
            }}>
              Social Ateliers
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Follow our fashion journeys, behind-the-loom documentation, and ceremonial launches.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => onOpenModal('Instagram Atelier')}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-gold-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Vinayak Fashion on Instagram"
              >
                <InstagramIcon />
              </button>

              <button
                onClick={() => onOpenModal('Facebook Atelier')}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-gold-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Vinayak Fashion on Facebook"
              >
                <FacebookIcon />
              </button>

              <button
                onClick={() => onOpenModal('YouTube Fashion Films')}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-gold-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Vinayak Fashion on YouTube"
              >
                <YoutubeIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Vinayak Fashion. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-muted)' }}>
            <Sparkles size={12} color="var(--gold-primary)" />
            <a href="https://vinayakfashion.shop/" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-light)' }}>
              vinayakfashion.shop
            </a>
            <span>•</span>
            <span>Tradition Reimagined</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
