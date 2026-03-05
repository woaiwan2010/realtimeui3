import React, { useState } from 'react';
import { GridSize } from '../types';
import ViewCube from './ViewCube';
import { Maximize, ZoomIn, ZoomOut } from 'lucide-react';

interface ViewportProps {
  gridSize: GridSize;
}

const Viewport: React.FC<ViewportProps> = ({ gridSize }) => {
  // Simulating a 3D environment with SVG
  const gridGap = gridSize === GridSize.STANDARD ? 50 : gridSize === GridSize.FINE ? 25 : 10;
  
  return (
    <div className="relative flex-1 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col justify-center items-center group">
      {/* Background Grid Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`,
             backgroundSize: `${gridGap}px ${gridGap}px`
           }}>
      </div>

      {/* 3D Object Placeholder - Simulated CAD Model */}
      <div className="relative w-64 h-64 border-2 border-blue-500/50 bg-blue-500/10 rounded transform rotate-12 transition-transform duration-700 group-hover:rotate-0">
          <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-blue-400 font-mono text-xs">CAD PART: HOUSING_V1</span>
          </div>
          {/* Simulated Stress Cloud Map Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-red-500/40 via-yellow-500/20 to-transparent blur-xl"></div>
      </div>

      {/* Axis Indicator (Bottom Left) */}
      <div className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <line x1="10" y1="90" x2="80" y2="90" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow)" />
            <text x="85" y="95" fill="#ef4444" fontSize="20" fontWeight="bold">X</text>
            
            <line x1="10" y1="90" x2="10" y2="20" stroke="#22c55e" strokeWidth="4" markerEnd="url(#arrow)" />
            <text x="5" y="15" fill="#22c55e" fontSize="20" fontWeight="bold">Y</text>
            
            <line x1="10" y1="90" x2="60" y2="40" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow)" />
            <text x="65" y="35" fill="#3b82f6" fontSize="20" fontWeight="bold">Z</text>
         </svg>
      </div>

      {/* Floating Toolbar for View Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur border border-slate-600 rounded-full px-4 py-2 flex space-x-4 shadow-lg">
          <button className="text-slate-300 hover:text-white"><ZoomIn size={18} /></button>
          <button className="text-slate-300 hover:text-white"><ZoomOut size={18} /></button>
          <div className="w-px h-5 bg-slate-600"></div>
          <button className="text-slate-300 hover:text-white"><Maximize size={18} /></button>
      </div>

      {/* View Cube Requirement 5.1.5 */}
      <ViewCube />
    </div>
  );
};

export default Viewport;