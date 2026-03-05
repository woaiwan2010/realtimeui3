import React, { useState } from 'react';
import { AppMode, GridSize } from './types';
import { MOCK_TREE_DATA } from './constants';
import Ribbon from './components/Ribbon';
import TreeSidebar from './components/TreeSidebar';
import Viewport from './components/Viewport';
import StatusBar from './components/StatusBar';
import AutomationPanel from './components/AutomationPanel';

const App: React.FC = () => {
  const [activeMode, setActiveMode] = useState<AppMode>(AppMode.REALTIME);
  const [gridSize, setGridSize] = useState<GridSize>(GridSize.STANDARD);
  
  // Requirement 5.1.2: Mode Switching Logic
  const handleModeChange = (mode: AppMode) => {
    setActiveMode(mode);
  };

  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action} in mode ${activeMode}`);
    // Here we would implement the logic for importing, solving, etc.
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-900 text-white font-sans antialiased">
      {/* 1. Header with Mode Switcher (Tabs) */}
      <div className="flex items-end bg-slate-900 pt-2 px-2 border-b border-slate-800 select-none">
        <div className="pb-2 pl-2 pr-6 font-bold text-xl tracking-wider text-blue-500 italic">
          INTESIM <span className="text-slate-400 not-italic text-sm font-normal ml-1">v2024.1</span>
        </div>
        
        <div className="flex space-x-1">
          <ModeTab 
            label="模型处理 (Modeling)" 
            isActive={activeMode === AppMode.MODELING} 
            onClick={() => handleModeChange(AppMode.MODELING)} 
          />
          <ModeTab 
            label="即时仿真 (Real-time)" 
            isActive={activeMode === AppMode.REALTIME} 
            onClick={() => handleModeChange(AppMode.REALTIME)} 
          />
          <ModeTab 
            label="自动化仿真 (Automation)" 
            isActive={activeMode === AppMode.AUTOMATION} 
            onClick={() => handleModeChange(AppMode.AUTOMATION)} 
          />
        </div>
      </div>

      {/* 2. Ribbon Toolbar */}
      <Ribbon mode={activeMode} onAction={handleAction} />

      {/* 3. Main Workspace */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar: Tree (Always visible in Modeling and Realtime) */}
        <TreeSidebar data={MOCK_TREE_DATA} />

        {/* Center Content: Viewport or Automation Dashboard */}
        {activeMode === AppMode.AUTOMATION ? (
          <AutomationPanel />
        ) : (
          <Viewport gridSize={gridSize} />
        )}
      </div>

      {/* 4. Footer Status Bar */}
      <StatusBar gridSize={gridSize} setGridSize={setGridSize} />
    </div>
  );
};

// Helper component for tabs
const ModeTab: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-t-lg text-sm font-medium transition-colors border-t border-x ${
      isActive 
        ? 'bg-slate-800 border-slate-700 text-blue-400 border-b-slate-800 translate-y-[1px]' 
        : 'bg-slate-900 border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800'
    }`}
  >
    {label}
  </button>
);

export default App;