import { TreeNode, TreeNodeType, SimulationScenario } from './types';
import { Box, Layers, Zap, Activity, Thermometer, Database, Settings, ShieldCheck, PlayCircle, MousePointer2 } from 'lucide-react';

export const MOCK_TREE_DATA: TreeNode[] = [
  {
    id: 'root-assembly',
    name: 'Main_Assembly_v01',
    type: TreeNodeType.ASSEMBLY,
    visible: true,
    expanded: true,
    children: [
      {
        id: 'part-1',
        name: 'Housing_Top_Case',
        type: TreeNodeType.PART,
        visible: true,
      },
      {
        id: 'part-2',
        name: 'PCB_Mount_Bracket',
        type: TreeNodeType.PART,
        visible: true,
      },
      {
        id: 'part-3',
        name: 'Thermal_Sink_Al',
        type: TreeNodeType.PART,
        visible: true,
      }
    ]
  },
  {
    id: 'materials',
    name: '材料定义 (Materials)',
    type: TreeNodeType.MATERIAL,
    visible: true,
    expanded: false,
    children: [
      { id: 'mat-1', name: 'Structural Steel', type: TreeNodeType.MATERIAL, visible: true },
      { id: 'mat-2', name: 'Aluminum Alloy 6061', type: TreeNodeType.MATERIAL, visible: true }
    ]
  },
  {
    id: 'physics',
    name: '物理场设定 (Physics)',
    type: TreeNodeType.LOAD,
    visible: true,
    expanded: true,
    children: [
      { id: 'load-1', name: 'Force_Load_500N', type: TreeNodeType.LOAD, visible: true },
      { id: 'cons-1', name: 'Fixed_Support_Base', type: TreeNodeType.CONSTRAINT, visible: true }
    ]
  },
  {
    id: 'results',
    name: '求解结果 (Results)',
    type: TreeNodeType.RESULT,
    visible: true,
    expanded: false,
    children: [
      { id: 'res-1', name: 'Equivalent Stress (Von-Mises)', type: TreeNodeType.RESULT, visible: true },
      { id: 'res-2', name: 'Total Deformation', type: TreeNodeType.RESULT, visible: true }
    ]
  }
];

export const AUTO_SCENARIOS: SimulationScenario[] = [
  { id: 's1', name: '结构刚强度分析', description: '自动识别结构薄弱点，评估最大应力与变形。', status: 'idle', progress: 0 },
  { id: 's2', name: '撑头排布优化分析', description: '基于拓扑优化算法自动推荐撑头位置。', status: 'idle', progress: 0 },
  { id: 's3', name: '注塑镶件疲劳分析', description: '评估循环载荷下的寿命预测。', status: 'idle', progress: 0 },
  { id: 's4', name: '脱模力计算', description: '模拟开模过程，计算所需脱模力。', status: 'idle', progress: 0 },
];

export const RIBBON_CONFIG = {
  MODELING: [
    { label: '几何导入', icon: Database, action: 'import' },
    { label: '几何清理', icon: Layers, action: 'cleanup' },
    { label: '几何修复', icon: ShieldCheck, action: 'repair' },
    { label: '布尔运算', icon: Box, action: 'boolean' },
    { label: '网格划分', icon: Activity, action: 'mesh' },
  ],
  REALTIME: [
    { label: '材料库', icon: Database, action: 'material' },
    { label: '添加载荷', icon: Zap, action: 'load' },
    { label: '添加约束', icon: Box, action: 'constraint' },
    { label: '热分析设定', icon: Thermometer, action: 'thermal' },
    { label: '一键求解', icon: PlayCircle, action: 'solve' },
  ],
  AUTOMATION: [
    { label: 'BOM识别', icon: Layers, action: 'bom' },
    { label: '场景选择', icon: MousePointer2, action: 'scenario' },
    { label: 'AI零件匹配', icon: Zap, action: 'ai_match' },
    { label: '批量运行', icon: PlayCircle, action: 'batch_run' },
    { label: '报告生成', icon: Settings, action: 'report' },
  ]
};