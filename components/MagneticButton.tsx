
import React, { useRef, useState, useCallback } from 'react';

export const MagneticButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const strength = 0.4;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;

    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none'
      }}
      className="relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden group shadow-2xl shadow-emerald-500/5 active:scale-95"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-emerald-600">
        Explore Tech
      </span>
      {/* Visual Ripple effect */}
      <div className="absolute inset-0 bg-emerald-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </button>
  );
};
