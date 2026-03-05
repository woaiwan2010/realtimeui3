export enum AppMode {
  MODELING = 'MODELING', // 模型处理
  REALTIME = 'REALTIME', // 即时仿真
  AUTOMATION = 'AUTOMATION' // 自动化仿真
}

export enum TreeNodeType {
  ASSEMBLY = 'ASSEMBLY',
  PART = 'PART',
  MATERIAL = 'MATERIAL',
  LOAD = 'LOAD',
  CONSTRAINT = 'CONSTRAINT',
  MESH = 'MESH',
  RESULT = 'RESULT'
}

export interface TreeNode {
  id: string;
  name: string;
  type: TreeNodeType;
  visible: boolean;
  children?: TreeNode[];
  expanded?: boolean;
}

export interface SimulationScenario {
  id: string;
  name: string;
  description: string;
  status: 'idle' | 'running' | 'completed';
  progress: number;
}

export enum GridSize {
  STANDARD = '标准',
  FINE = '精细',
  ULTRA_FINE = '极细'
}