
import React from 'react';
import { NeonGlowCard } from './components/NeonGlowCard';
import { MagneticButton } from './components/MagneticButton';
import { ThreeDTiltCard } from './components/ThreeDTiltCard';
import { GlassMorphCard } from './components/GlassMorphCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-20 px-6">
      <header className="mb-20 text-center max-w-4xl">
        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-white">
          Micro <span className="bg-gradient-to-br from-emerald-300 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">Interactions</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto">
          Galleria tecnica di micro-animazioni progettata per dimostrare padronanza nel design responsivo e nelle interazioni moderne.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        <div className="group/container">
          <NeonGlowCard />
          <div className="mt-6 space-y-1 border-l-2 border-zinc-800 pl-4 group-hover/container:border-emerald-500 transition-all duration-500">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">01. Neon Radiance</h3>
            <p className="text-xs text-emerald-500/70 font-mono">box-shadow | filter: blur()</p>
          </div>
        </div>

        <div className="group/container">
          <div className="h-[280px] w-full flex items-center justify-center bg-emerald-950/10 rounded-3xl border border-white/5 relative overflow-hidden group-hover/container:border-emerald-500/40 transition-colors">
             <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
             <MagneticButton />
          </div>
          <div className="mt-6 space-y-1 border-l-2 border-zinc-800 pl-4 group-hover/container:border-emerald-500 transition-all duration-500">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">02. Magnetic Flux</h3>
            <p className="text-xs text-emerald-500/70 font-mono">lerp() | translate3d</p>
          </div>
        </div>

        <div className="group/container">
          <ThreeDTiltCard />
          <div className="mt-6 space-y-1 border-l-2 border-zinc-800 pl-4 group-hover/container:border-emerald-500 transition-all duration-500">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">03. Spatial Tilt</h3>
            <p className="text-xs text-emerald-500/70 font-mono">rotateX | rotateY | perspective</p>
          </div>
        </div>

        <div className="group/container">
          <GlassMorphCard />
          <div className="mt-6 space-y-1 border-l-2 border-zinc-800 pl-4 group-hover/container:border-emerald-500 transition-all duration-500">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">04. Refractive Glass</h3>
            <p className="text-xs text-emerald-500/70 font-mono">backdrop-filter | radial-gradient</p>
          </div>
        </div>
      </div>

      <footer className="mt-32 w-full max-w-2xl pt-10 border-t border-white/10 flex flex-col items-center gap-6 text-center">
        <div className="flex gap-8 items-center mb-2">
           <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 text-2xl">
             <i className="fab fa-github"></i>
           </a>
           <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 text-2xl">
             <i className="fab fa-linkedin"></i>
           </a>
        </div>
        <div className="space-y-2">
          <p className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
            Ilenia Unida
          </p>
          <p className="text-zinc-500 text-[11px] font-mono tracking-widest uppercase opacity-80">
            Creative Web Developer &copy; 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
