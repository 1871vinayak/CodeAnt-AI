import React from 'react';
import StatsCard from './StatsCard';
import MetricsCard from './MetricsCard';

const StatsSection = () => {
  return (
    <div className="h-full bg-white p-8 flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Main Stats Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl drop-shadow-2xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img src="/CodeAnt_Small.svg" alt="CodeAnt AI" className="h-8" />
            <span className="text-xl font-semibold text-gray-900">AI to Detect & Autofix Bad Code</span>
          </div>
          <hr className="border-gray-200 mb-8" />
          <StatsCard />
        </div>

        {/* Metrics Card - Positioned to overlap */}
        <div className="relative left-[50%] top-[-15%]">
          <MetricsCard />
        </div>
      </div>
      
      {/* Background Logo */}
      <img 
        src="/CodeAntBG.svg" 
        alt="" 
        className="absolute bottom-0 left-0 w-64 opacity-100"
      />
    </div>
  );
};

export default StatsSection;