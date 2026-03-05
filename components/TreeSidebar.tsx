import React, { useState } from 'react';
import { TreeNode, TreeNodeType } from '../types';
import { ChevronRight, ChevronDown, Box, FileText, Layers, Activity, Eye, EyeOff } from 'lucide-react';

interface TreeProps {
  data: TreeNode[];
}

const TreeSidebar: React.FC<TreeProps> = ({ data }) => {
  const [nodes, setNodes] = useState(data);

  const toggleExpand = (id: string) => {
    const toggleNode = (list: TreeNode[]): TreeNode[] => {
      return list.map(node => {
        if (node.id === id) return { ...node, expanded: !node.expanded };
        if (node.children) return { ...node, children: toggleNode(node.children) };
        return node;
      });
    };
    setNodes(toggleNode(nodes));
  };

  const toggleVisibility = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const toggleVis = (list: TreeNode[]): TreeNode[] => {
      return list.map(node => {
        if (node.id === id) return { ...node, visible: !node.visible };
        if (node.children) return { ...node, children: toggleVis(node.children) };
        return node;
      });
    };
    setNodes(toggleVis(nodes));
  };

  const getIcon = (type: TreeNodeType) => {
    switch (type) {
      case TreeNodeType.ASSEMBLY: return <Box size={14} className="text-yellow-500" />;
      case TreeNodeType.PART: return <Box size={14} className="text-blue-400" />;
      case TreeNodeType.MATERIAL: return <Layers size={14} className="text-purple-400" />;
      case TreeNodeType.LOAD: return <Activity size={14} className="text-red-400" />;
      case TreeNodeType.RESULT: return <FileText size={14} className="text-green-400" />;
      default: return <Box size={14} />;
    }
  };

  const renderTree = (list: TreeNode[], level = 0) => {
    return list.map(node => (
      <div key={node.id}>
        <div 
          className="flex items-center py-1 px-2 hover:bg-slate-700 cursor-pointer text-sm group"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => toggleExpand(node.id)}
        >
          <div className="mr-1 text-slate-400">
             {node.children && node.children.length > 0 ? (
               node.expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
             ) : <div className="w-[14px]" />}
          </div>
          <div className="mr-2">
            {getIcon(node.type)}
          </div>
          <span className={`flex-1 truncate ${!node.visible ? 'text-slate-500 italic' : 'text-slate-200'}`}>
            {node.name}
          </span>
          <button 
            onClick={(e) => toggleVisibility(node.id, e)} 
            className={`opacity-0 group-hover:opacity-100 hover:text-white p-1 rounded ${node.visible ? 'text-slate-400' : 'text-slate-600'}`}
          >
            {node.visible ? <Eye size={12} /> : <EyeOff size={12} />}
          </button>
        </div>
        {node.children && node.expanded && (
          <div>{renderTree(node.children, level + 1)}</div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col h-full">
      <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
        模型树 (Model Tree)
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {renderTree(nodes)}
      </div>
    </div>
  );
};

export default TreeSidebar;