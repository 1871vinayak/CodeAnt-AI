import React from 'react';

const stats = [
  { value: '30+', label: 'Language Support' },
  { value: '10K+', label: 'Developers' },
  { value: '100K+', label: 'Hours Saved' },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;