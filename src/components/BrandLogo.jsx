import React, { useState } from 'react';

export default function BrandLogo({ variant = 'navbar', className = '' }) {
  const [imageError, setImageError] = useState(false);

  // Return appropriate high-resolution official logo variant
  const getLogoConfig = () => {
    switch (variant) {
      case 'loading':
        return {
          src: '/assets/brand/vinayak-logo-darkmode.png',
          style: {
            width: '280px',
            maxWidth: '82vw',
            height: 'auto',
            filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.45))'
          }
        };
      case 'footer':
        return {
          src: '/assets/brand/vinayak-logo-darkmode.png',
          style: {
            width: '230px',
            maxWidth: '75vw',
            height: 'auto',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.6))'
          }
        };
      case 'card':
      case 'badge':
        return {
          src: '/assets/brand/vinayak-logo-card.png',
          style: {
            width: '180px',
            maxWidth: '70vw',
            height: 'auto',
            borderRadius: '8px',
            border: '1px solid var(--border-gold-bright)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.15)'
          }
        };
      case 'monogram':
        return {
          src: '/assets/brand/vinayak-monogram-dark.png',
          style: {
            width: '54px',
            height: 'auto',
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))'
          }
        };
      case 'navbar':
      default:
        return {
          src: '/assets/brand/vinayak-logo-horizontal.png',
          style: {
            height: 'clamp(38px, 4.2vw, 48px)',
            width: 'auto',
            maxWidth: '260px',
            filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.45))'
          }
        };
    }
  };

  const config = getLogoConfig();

  return (
    <div
      className={`brand-logo-container brand-logo-${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease'
      }}
    >
      <img
        src={imageError ? '/assets/brand/vinayak-logo-card.png' : config.src}
        onError={() => setImageError(true)}
        alt="VINAYAK FASHION — Style That Defines You"
        style={{
          display: 'block',
          objectFit: 'contain',
          ...config.style
        }}
      />
    </div>
  );
}
