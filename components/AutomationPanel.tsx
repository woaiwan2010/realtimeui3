import React from 'react';
import { AUTO_SCENARIOS } from '../constants';
import { Play, FileText, CheckCircle2, Clock } from 'lucide-react';

const AutomationPanel: React.FC = () => {
  return (
    <div className="flex-1 bg-slate-900 p-6 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-light text-white mb-2">自动化仿真流程 (Automated Workflows)</h2>
            <p className="text-slate-400 text-sm">选择预定义场景，系统将自动识别BOM、匹配材料并提交计算。</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-lg flex items-center space-x-2">
            <FileText size={16} />
            <span>导入 BOM 表 (Excel)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {AUTO_SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="bg-slate-800 border border-slate-700 rounded-lg p-5 hover:border-blue-500 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-full ${scenario.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-blue-400'}`}>
                    {scenario.status === 'completed' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                  </div>
                  <h3 className="text-lg font-medium text-slate-200 group-hover:text-blue-400">{scenario.name}</h3>
                </div>
                {scenario.status === 'idle' && (
                  <button className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white p-2 rounded-full shadow-lg transition-opacity">
                    <Play size={16} fill="currentColor" />
                  </button>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-4 h-10">{scenario.description}</p>
              
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${scenario.progress}%` }}></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                 <span>状态: {scenario.status === 'idle' ? '等待开始' : '运行中'}</span>
                 <span>{scenario.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOM Preview Table Placeholder */}
        <div className="mt-8">
            <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center">
                <FileText className="mr-2" size={18}/> 
                BOM 结构预览 (智能识别)
            </h3>
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="bg-slate-900 text-slate-200 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">零件名称</th>
                            <th className="px-6 py-3">材料 (AI 识别)</th>
                            <th className="px-6 py-3">数量</th>
                            <th className="px-6 py-3">类型</th>
                            <th className="px-6 py-3">状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                            <td className="px-6 py-4">Top_Cover_V2</td>
                            <td className="px-6 py-4 text-green-400">ABS Plastic (98%)</td>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Part</td>
                            <td className="px-6 py-4"><span className="bg-green-900 text-green-300 py-1 px-2 rounded text-xs">已匹配</span></td>
                        </tr>
                        <tr className="border-b border-slate-700 hover:bg-slate-750">
                            <td className="px-6 py-4">Screw_M3x10</td>
                            <td className="px-6 py-4 text-yellow-400">Steel (High Strength)</td>
                            <td className="px-6 py-4">4</td>
                            <td className="px-6 py-4">Fastener</td>
                            <td className="px-6 py-4"><span className="bg-yellow-900 text-yellow-300 py-1 px-2 rounded text-xs">冗余件 (建议删除)</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPanel;