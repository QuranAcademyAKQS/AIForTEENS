"use client";
import { useState } from 'react';

const pillars = [
  'نظام بندگی',
  'نظام زندگی',
  'نظام ربوبیت',
];

const floors = [
  'عبادت',
  'اطاعت',
  'تقویٰ',
  'شہادت علی الناس',
];

const foundation = [
  'ایمان حقیقی',
  'تصدیق بالقلب',
  'شہادت ان لا الہ الا اللہ و ان محمد رسول اللہ',
];

const roof = 'وَیَکُونَ الدِّینُ کُلُّهُ لِلّٰہِ';

export default function ComprehensiveDutyPage() {
  const [selectedCell, setSelectedCell] = useState<{pillar: string, floor: string} | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-2 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" dir="rtl">
      {/* Roof */}
      <div className="text-white text-2xl font-bold mb-4 font-urdu text-center">
        {roof}
      </div>
      {/* Building Grid */}
      <div className="bg-white/10 rounded-xl shadow-lg border border-white/20 p-4 mb-8">
        <div className="grid grid-cols-3 gap-4 mb-2">
          {pillars.map((pillar, idx) => (
            <div key={pillar} className="text-center text-lg font-bold text-yellow-300 font-urdu pb-2 border-b-2 border-yellow-300">
              {pillar}
            </div>
          ))}
        </div>
        {floors.map((floor, rowIdx) => (
          <div className="grid grid-cols-3 gap-4 mb-2" key={floor}>
            {pillars.map((pillar, colIdx) => (
              <button
                key={pillar + floor}
                className="bg-white/80 hover:bg-yellow-100 transition rounded-lg shadow p-4 text-center font-urdu text-lg font-semibold text-purple-900 border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => setSelectedCell({ pillar, floor })}
              >
                {floor}
              </button>
            ))}
          </div>
        ))}
      </div>
      {/* Foundation */}
      <div className="flex flex-col items-center gap-2 mb-8">
        {foundation.map((item, idx) => (
          <div key={item} className="bg-yellow-200 text-purple-900 font-urdu text-lg font-semibold rounded px-4 py-2 shadow">
            {item}
          </div>
        ))}
      </div>
      {/* Popup (to be implemented) */}
      {selectedCell && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setSelectedCell(null)}>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full font-urdu text-right text-lg relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 left-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setSelectedCell(null)}>&times;</button>
            <div className="mb-4 text-yellow-600 font-bold">{selectedCell.pillar}</div>
            <div className="mb-2 text-purple-900 font-bold">{selectedCell.floor}</div>
            <div className="text-gray-700">(تفصیل بعد میں شامل کی جائے گی)</div>
          </div>
        </div>
      )}
    </div>
  );
} 