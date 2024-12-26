import React from 'react';
import RepositoryCard from './RepositoryCard';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="bg-white">
      {repositories.map((repo, index) => (
        <RepositoryCard key={index} {...repo} />
      ))}
    </div>
  );
};

export default RepositoryList;