import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Search, Heart, ShoppingBag, User, Package, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenModal, wishlistCount = 0, cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Categories', href: '#categories' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'Craft & Story', href: '#craft' },
    { label: 'About', href: '#story' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '14px 0' : '22px 0',
          backgroundColor: scrolled ? 'rgba(15, 10, 12, 0.88)' : 'rgba(15, 10, 12, 0.45)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid rgba(212, 175, 55, 0.1)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
        }}
      >
        <div className="site-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          {/* LEFT: Vinayak Fashion Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{ display: 'inline-flex', alignItems: 'center' }}
            aria-label="Vinayak Fashion Home"
          >
            <BrandLogo variant="navbar" />
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="desktop-nav-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.2rem, 2.2vw, 2.4rem)'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link-item"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.25s ease'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Action Icons */}
          <div className="nav-actions-desktop" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="nav-icon-btn"
              aria-label="Search Collection"
              title="Search Catalog"
              style={{
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                transition: 'color 0.2s, transform 0.2s'
              }}
            >
              <Search size={19} />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => onOpenModal('Wishlist')}
              className="nav-icon-btn"
              aria-label="Wishlist"
              title="Wishlist"
              style={{
                color: 'var(--text-primary)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-4px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--gold-primary)',
                  color: '#1A070B',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Orders Modal */}
            <button
              onClick={() => onOpenModal('My Orders')}
              className="nav-icon-btn desktop-only-icon"
              aria-label="Orders"
              title="Track Orders"
              style={{
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
            >
              <Package size={19} />
            </button>

            {/* Login Modal */}
            <button
              onClick={() => onOpenModal('Client Login & Concierge')}
              className="nav-icon-btn desktop-only-icon"
              aria-label="Account Login"
              title="Account"
              style={{
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
            >
              <User size={19} />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => onOpenModal('Shopping Cart')}
              className="nav-cart-btn"
              aria-label="Shopping Cart"
              title="Cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '30px',
                color: 'var(--gold-light)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                transition: 'all 0.25s ease'
              }}
            >
              <ShoppingBag size={17} />
              <span className="cart-text">Cart</span>
              {cartCount > 0 && (
                <span style={{
                  padding: '2px 6px',
                  background: 'var(--gold-primary)',
                  color: '#1A070B',
                  borderRadius: '10px',
                  fontSize: '0.65rem',
                  fontWeight: 700
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger-btn"
              aria-label="Toggle Mobile Menu"
              style={{
                color: 'var(--gold-light)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================================
          MOBILE FULLSCREEN LUXURY MENU
          ==================================================================== */}
      {mobileMenuOpen && (
        <div
          className="mobile-fullscreen-menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: '#0D080A',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(68, 13, 23, 0.5) 0%, #0D080A 85%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '90px 24px 36px',
            animation: 'fadeInMenu 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span style={{
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              opacity: 0.8
            }}>
              Navigation
            </span>

            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                  padding: '4px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  animation: `slideInMenuItem 0.4s ease forwards ${idx * 0.05}s`
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Actions Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-gold-subtle)'
          }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="btn-luxury-outline"
              style={{ padding: '12px', fontSize: '0.78rem' }}
            >
              <Search size={16} />
              <span>Search</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Wishlist');
              }}
              className="btn-luxury-outline"
              style={{ padding: '12px', fontSize: '0.78rem' }}
            >
              <Heart size={16} />
              <span>Wishlist</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Orders');
              }}
              className="btn-luxury-outline"
              style={{ padding: '12px', fontSize: '0.78rem' }}
            >
              <Package size={16} />
              <span>Orders</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Login');
              }}
              className="btn-luxury-outline"
              style={{ padding: '12px', fontSize: '0.78rem' }}
            >
              <User size={16} />
              <span>Login</span>
            </button>
          </div>

          {/* Footer of Menu */}
          <div style={{ textAlign: 'center', paddingTop: '16px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
              VINAYAK FASHION • TRADITION REIMAGINED
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-only-icon {
            display: none !important;
          }
          .cart-text {
            display: none;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInMenuItem {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
