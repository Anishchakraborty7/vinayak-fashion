import React, { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadingOut(true);
          setTimeout(() => {
            onLoaded();
          }, 650);
          return 100;
        }
        // Rapid luxury load
        return prev + Math.floor(Math.random() * 25 + 15);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div
      className={`loading-screen ${fadingOut ? 'loading-screen-fade' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0D080A',
        backgroundImage: 'radial-gradient(circle at center, rgba(68, 13, 23, 0.45) 0%, #0D080A 80%)',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: fadingOut ? 0 : 1,
        transform: fadingOut ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: fadingOut ? 'none' : 'all'
      }}
    >
      {/* Central Brand Insignia & Logo */}
      <div style={{
        animation: 'pulseGlow 2.5s ease-in-out infinite',
        transform: 'translateY(-10px)'
      }}>
        <BrandLogo variant="loading" />
      </div>

      {/* Elegant Progress Line */}
      <div style={{
        width: '200px',
        maxWidth: '65vw',
        height: '1.5px',
        background: 'rgba(212, 175, 55, 0.2)',
        marginTop: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px'
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${Math.min(progress, 100)}%`,
            background: 'var(--gold-gradient)',
            boxShadow: '0 0 12px var(--gold-primary)',
            transition: 'width 0.25s ease-out'
          }}
        />
      </div>

      {/* Subtle Micro Tagline */}
      <div style={{
        marginTop: '1.25rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.72rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--gold-light)',
        opacity: 0.75
      }}>
        Tradition • Reimagined
      </div>
    </div>
  );
}
