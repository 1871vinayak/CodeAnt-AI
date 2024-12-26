import React from 'react';
import { Chip } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const RepositoryCard = ({ name, visibility, language, size, updatedAt }) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
          <Chip
            label={visibility}
            size="small"
            variant="outlined"
            className={`${
              visibility === 'Public' ? 'text-blue-600' : 'text-gray-600'
            }`}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <CircleIcon sx={{ fontSize: 12 }} className={getLanguageColor(language)} />
          <span>{language}</span>
        </div>
        <span>{formatSize(size)} KB</span>
        <span>Updated {updatedAt}</span>
      </div>
    </div>
  );
};

const getLanguageColor = (language) => {
  const colors = {
    React: 'text-blue-500',
    JavaScript: 'text-yellow-500',
    Python: 'text-green-500',
    Swift: 'text-orange-500',
    Java: 'text-red-500',
    'HTML/CSS': 'text-purple-500',
    PHP: 'text-indigo-500',
  };
  return colors[language] || 'text-gray-500';
};

const formatSize = (size) => {
  return size.toLocaleString();
};

export default RepositoryCard;