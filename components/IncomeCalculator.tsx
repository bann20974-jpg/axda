import React, { useState, useMemo } from 'react';
import { Settings, Info } from 'lucide-react';
import { ContentDictionary } from '../types';

interface IncomeCalculatorProps {
  t?: ContentDictionary;
}

export const IncomeCalculator: React.FC<IncomeCalculatorProps> = ({ t }) => {
  const [hours, setHours] = useState<number>(8);
  const [days, setDays] = useState<number>(5);
  const [transportType, setTransportType] = useState<'foot' | 'bike' | 'auto'>('bike');

  const hourlyRate = useMemo(() => {
    switch (transportType) {
      case 'auto': return 450;
      case 'bike': return 350;
      case 'foot': return 250;
      default: return 250;
    }
  }, [transportType]);

  const weeklyIncome = hours * days * hourlyRate;
  const monthlyIncome = weeklyIncome * 4;

  const labels = {
    title: t?.calcTitle || "Калькулятор дохода",
    foot: t?.calcFoot || "Пеший",
    bike: t?.calcBike || "Вело",
    auto: t?.calcAuto || "Авто",
    hours: t?.calcHours || "Часов в день",
    days: t?.calcDays || "Дней в неделю",
    income: t?.calcIncome || "Примерный доход в месяц",
    disclaimer: t?.calcDisclaimer || "Расчет приблизительный. Доход зависит от города, количества заказов и бонусов.",
    currency: t?.currency || "₽"
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 w-full max-w-2xl mx-auto border border-gray-100/50">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-yandex-yellow p-2 rounded-lg">
          <Settings className="w-6 h-6 text-yandex-black" />
        </div>
        <h2 className="text-2xl font-bold text-yandex-black">{labels.title}</h2>
      </div>

      {/* Transport Type Selection */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { id: 'foot', label: labels.foot, emoji: '🚶' },
          { id: 'bike', label: labels.bike, emoji: '🚲' },
          { id: 'auto', label: labels.auto, emoji: '🚗' }
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setTransportType(type.id as any)}
            className={`py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
              transportType === type.id
                ? 'bg-yandex-black text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{type.emoji}</span>
            <span className="text-sm font-medium">{type.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {/* Hours Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-medium">{labels.hours}</span>
            <span className="font-bold text-yandex-black">{hours} ч.</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yandex-yellow"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span>
            <span>12</span>
          </div>
        </div>

        {/* Days Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-medium">{labels.days}</span>
            <span className="font-bold text-yandex-black">{days} д.</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yandex-yellow"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span>
            <span>7</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-8 bg-yandex-gray/80 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm mb-1">{labels.income}</p>
            <p className="text-4xl font-extrabold text-yandex-black">
              {monthlyIncome.toLocaleString('ru-RU')} {labels.currency}
            </p>
          </div>
          <div className="flex items-start gap-2 max-w-xs text-xs text-gray-500 bg-white/80 p-3 rounded-lg border border-gray-200/50">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>{labels.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};