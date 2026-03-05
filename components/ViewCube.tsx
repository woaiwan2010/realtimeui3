import React from 'react';

// A CSS-only representation of a 3D Cube Controller
// Requirement 5.1.5: View Cube for quick orientation
const ViewCube: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 z-10 w-24 h-24 perspective-500 group pointer-events-none">
        <div className="relative w-full h-full transform-style-3d rotate-x-neg-15 rotate-y-45 transition-transform duration-500 pointer-events-auto cursor-pointer hover:scale-105">
            {/* Faces */}
            <div className="absolute w-12 h-12 bg-slate-600/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform translate-z-6">前</div>
            <div className="absolute w-12 h-12 bg-slate-600/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform rotate-y-180 translate-z-6">后</div>
            <div className="absolute w-12 h-12 bg-slate-500/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform rotate-y-90 translate-z-6">右</div>
            <div className="absolute w-12 h-12 bg-slate-500/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform rotate-y-neg-90 translate-z-6">左</div>
            <div className="absolute w-12 h-12 bg-slate-400/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform rotate-x-90 translate-z-6">上</div>
            <div className="absolute w-12 h-12 bg-slate-700/90 border border-slate-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner
                transform rotate-x-neg-90 translate-z-6">下</div>
            
            {/* Edges/Corners would be clickable areas in a real implementation */}
            <div className="absolute -top-4 -right-4 bg-transparent p-2">
                <div className="w-4 h-4 rounded-full bg-blue-500/50 hover:bg-blue-400 cursor-pointer" title="Isometric View"></div>
            </div>
        </div>
        
        {/* Helper styles injected here for the 3d transform demo */}
        <style>{`
            .perspective-500 { perspective: 500px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .translate-z-6 { transform: translateZ(24px); } /* half of 48px width */
            .rotate-x-neg-15 { transform: rotateX(-20deg) rotateY(-30deg); }
            .rotate-y-45 { /* Default viewing angle */ }
            .rotate-y-90 { transform: rotateY(90deg) translateZ(24px); }
            .rotate-y-neg-90 { transform: rotateY(-90deg) translateZ(24px); }
            .rotate-y-180 { transform: rotateY(180deg) translateZ(24px); }
            .rotate-x-90 { transform: rotateX(90deg) translateZ(24px); }
            .rotate-x-neg-90 { transform: rotateX(-90deg) translateZ(24px); }
        `}</style>
    </div>
  );
};

export default ViewCube;