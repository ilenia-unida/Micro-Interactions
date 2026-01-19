
import React, { useState } from 'react';

export const GlassMorphCard: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative group h-[280px] w-full cursor-pointer"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-emerald-500 to-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

      {/* Main Glass Layer */}
      <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md group-hover:bg-white/[0.08] transition-all duration-500 overflow-hidden p-6 flex flex-col justify-between">
        
        {/* Dynamic Spotlight Follower */}
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
            inset: 0
          }}
        ></div>

        <div className="flex justify-between items-start relative z-10">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                <i className="fas fa-microchip text-emerald-400"></i>
            </div>
            <div className="text-[10px] font-mono text-emerald-400/70 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md uppercase tracking-wider">Active_Filter</div>
        </div>

        <div className="space-y-3 relative z-10">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-emerald-500/50 group-hover:w-full transition-all duration-1000"></div>
            </div>
            <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
        </div>

        <div className="relative z-10">
            <h4 className="text-white font-bold tracking-tight">Refractive Glass</h4>
            <p className="text-gray-500 text-[10px] font-mono mt-1 uppercase">Math.atan2() / backdrop-filter</p>
        </div>
      </div>
    </div>
  );
};
