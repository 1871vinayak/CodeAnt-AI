import React from 'react';

const SignInModeSelector = ({ mode, onModeChange }) => {
  return (
    <div className="flex gap-2 bg-gray-100 rounded-xl mb-6">
      <button
        onClick={() => onModeChange('saas')}
        className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
          mode === 'saas'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <span className="font-bold">SAAS</span>
      </button>
      <button
        onClick={() => onModeChange('self-hosted')}
        className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
          mode === 'self-hosted'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <span className="font-bold">Self Hosted</span>
      </button>
    </div>
  );
};

export default SignInModeSelector;