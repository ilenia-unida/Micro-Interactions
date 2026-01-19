
import React from 'react';

export const NeonGlowCard: React.FC = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* Background Glow - Now Emerald/Green */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Main Content */}
      <div className="relative h-[280px] bg-black rounded-3xl flex flex-col items-center justify-center overflow-hidden border border-white/10">
        <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/40">
          <i className="fas fa-bolt"></i>
        </div>
        <h4 className="text-lg font-bold text-white mb-2">Neon Engine</h4>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s`, boxShadow: '0 0 8px #10b981' }}></div>
          ))}
        </div>
        
        {/* Tooltip implementation */}
        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-emerald-500/60">
          FILTER: DROP-SHADOW(0 0 15PX)
        </div>
      </div>
    </div>
  );
};
