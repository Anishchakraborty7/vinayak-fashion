import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine-pointer desktop devices
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, [role="button"], .product-3d-card, .category-card, .gallery-item-tile, .luxury-product-card');
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animId;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(updateTrailing);
    };
    animId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Solid Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />

      {/* Trailing Luxury Ring */}
      <div
        className={`custom-cursor-ring ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`
        }}
      />
    </>
  );
}
