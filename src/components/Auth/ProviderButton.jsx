import React from 'react';

const ProviderButton = ({ icon: Icon, image, name }) => {
  return (
    <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
      {Icon ? (
        <Icon className="w-5 h-5 text-gray-900" />
      ) : (
        <img src={image} alt="" className="w-5 h-5" />
      )}
      <span className="text-gray-900 font-medium">Sign in with {name}</span>
    </button>
  );
};

export default ProviderButton;