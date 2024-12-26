import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ icon: Icon, label, isActive, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path === '/logout') {
      navigate('/');
    } else {
      navigate(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors rounded-lg',
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-700 hover:bg-gray-50 md:hover:bg-gray-100'
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-base font-medium">{label}</span>
    </button>
  );
};

export default MenuItem;