import React from 'react';
import RepositoryMeta from './RepositoryMeta';
import RepositoryTitle from './RepositoryTitle';
import RepositoryVisibility from './RepositoryVisibility';
import { LANGUAGE_COLORS } from './constants';

const RepositoryCard = ({ name, visibility, language, size, updatedAt }) => {
  const isPublic = visibility === 'Public';
  const languageColor = LANGUAGE_COLORS[language] || 'text-gray-500';

  return (
    <div className="px-0 md:px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <RepositoryTitle name={name} />
            <RepositoryVisibility isPublic={isPublic} visibility={visibility} />
          </div>
        </div>
        <RepositoryMeta 
          language={language} 
          languageColor={languageColor} 
          size={size} 
          updatedAt={updatedAt} 
        />
      </div>
    </div>
  );
};

export default RepositoryCard;