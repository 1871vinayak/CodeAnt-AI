import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';

const UnderDevelopment = ({ pageName }) => {
  return (
    <div className="flex-1 md:p-8 h-[100vh]">
      <div className="bg-white rounded-none md:rounded-xl shadow-sm h-full flex flex-col items-center justify-center p-4">
        <ConstructionIcon className="text-blue-600 w-20 h-20 mb-6 animate-bounce" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          {pageName} Page
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-md">
          This page is currently under development. Check back soon for updates!
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopment;