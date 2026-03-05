import React from 'react';
import { AppMode } from '../types';
import { RIBBON_CONFIG } from '../constants';
import { Undo, Redo, Save, FolderOpen, HelpCircle, Settings } from 'lucide-react';

interface RibbonProps {
  mode: AppMode;
  onAction: (action: string) => void;
}

const Ribbon: React.FC<RibbonProps> = ({ mode, onAction }) => {
  const tools = RIBBON_CONFIG[mode];

  return (
    <div className="w-full bg-slate-800 border-b border-slate-700 flex flex-col">
      {/* Top Utility Bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white" title="新建">
             <div className="w-4 h-4 border border-current rounded-sm"></div>
          </button>
          <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white" title="打开">
             <FolderOpen size={14} />
          </button>
          <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white" title="保存">
             <Save size={14} />
          </button>
          <div className="h-4 w-px bg-slate-700 mx-2"></div>
          <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white" title="撤销 (Ctrl+Z)">
             <Undo size={14} />
          </button>
          <button className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white" title="重做 (Ctrl+Y)">
             <Redo size={14} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
           <span className="text-slate-500">INTESIM Structural 2024</span>
           <button className="p-1 hover:bg-slate-700 rounded text-blue-400 hover:text-blue-300" title="帮助 / 引导">
             <HelpCircle size={14} />
           </button>
        </div>
      </div>

      {/* Main Ribbon Area */}
      <div className="flex items-center px-4 py-3 space-x-6 overflow-x-auto">
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={() => onAction(tool.action)}
            className="group flex flex-col items-center justify-center space-y-1 min-w-[64px] p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <div className="p-2 bg-slate-700 group-hover:bg-slate-600 rounded-md text-blue-400 ring-1 ring-slate-600 group-hover:ring-blue-500">
              <tool.icon size={24} />
            </div>
            <span className="text-xs font-medium text-slate-300">{tool.label}</span>
          </button>
        ))}
        
        <div className="h-10 w-px bg-slate-700 mx-2"></div>
        
        {/* Common Tools across all modes */}
        <button className="group flex flex-col items-center justify-center space-y-1 min-w-[64px] p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <div className="p-2 bg-slate-700 group-hover:bg-slate-600 rounded-md text-slate-400">
              <Settings size={24} />
            </div>
            <span className="text-xs font-medium text-slate-300">设置</span>
        </button>

      </div>
    </div>
  );
};

export default Ribbon;