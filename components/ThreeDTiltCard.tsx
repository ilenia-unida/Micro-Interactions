
import React, { useState, useCallback, useRef } from 'react';

export const ThreeDTiltCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    const x = (clientY - top - height / 2) / 10;
    const y = (clientX - left - width / 2) / -10;

    setRotation({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
  }, []);

  return (
    <div className="perspective-1000">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: rotation.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.05s linear',
          transformStyle: 'preserve-3d'
        }}
        className="relative h-[280px] w-full bg-[#151515] rounded-3xl border border-white/5 overflow-hidden flex flex-col p-6 shadow-xl"
      >
        <div 
            className="w-full h-32 rounded-2xl bg-zinc-800 mb-4 overflow-hidden"
            style={{ transform: 'translateZ(20px)' }}
        >
            <img 
                src="https://picsum.photos/400/300?grayscale" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" 
                alt="3D Demo" 
            />
        </div>
        <div style={{ transform: 'translateZ(40px)' }}>
            <h4 className="text-white font-bold text-lg">Haptic 3D</h4>
            <p className="text-gray-500 text-sm mt-1">Spatial orientation using JS client coordinates.</p>
        </div>
        
        {/* Floating Accent */}
        <div 
            className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
            style={{ transform: 'translateZ(60px)' }}
        ></div>
      </div>
    </div>
  );
};
