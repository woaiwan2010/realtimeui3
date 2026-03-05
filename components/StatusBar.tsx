import React from 'react';
import { GridSize } from '../types';
import { Grid3X3, Database, Wifi } from 'lucide-react';

interface StatusBarProps {
  gridSize: GridSize;
  setGridSize: (size: GridSize) => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ gridSize, setGridSize }) => {
  return (
    <div className="h-8 bg-brand-dark border-t border-slate-700 flex items-center justify-between px-4 text-xs select-none">
      <div className="flex items-center space-x-6 text-slate-400">
        <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>求解器: 就绪</span>
        </div>
        <div className="flex items-center space-x-1">
            <Database size={12} />
            <span>内存占用: 1.2 GB / 4.0 GB (Undo Buffer)</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Requirement 5.1.6: Grid Size Setting */}
        <div className="flex items-center space-x-2 border-r border-slate-700 pr-4">
            <Grid3X3 size={12} className="text-slate-500" />
            <span className="text-slate-500">背景网格:</span>
            <select 
                value={gridSize} 
                onChange={(e) => setGridSize(e.target.value as GridSize)}
                className="bg-slate-800 border border-slate-700 rounded text-slate-300 text-xs px-1 py-0.5 focus:outline-none focus:border-blue-500"
            >
                {Object.values(GridSize).map(size => (
                    <option key={size} value={size}>{size}</option>
                ))}
            </select>
        </div>

        <div className="flex items-center space-x-2 text-slate-400">
            <span>单位: mm, kg, N, s, C</span>
        </div>
        
        <div className="flex items-center space-x-1 text-slate-500">
            <Wifi size={12} />
            <span>INTESIM Cloud: Connected</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;