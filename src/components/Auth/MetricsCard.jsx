import React from 'react';
import DataUsageTwoToneIcon from '@mui/icons-material/DataUsageTwoTone';

const MetricsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg w-[280px]">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          
            <img className="w-12 h-12" src="/Metriclogo.svg" alt="Metriclogo" />
          
        </div>
        <div className="text-right">
          <div className="text-blue-600 font-medium">↑ 14%</div>
          <div className="text-sm text-gray-500">This week</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600 mb-1">Issues Fixed</div>
        <div className="text-4xl font-bold text-gray-900">500K+</div>
      </div>
    </div>
  );
};

export default MetricsCard;