import React, { useState } from 'react';
import MainContent from './MainContent/MainContent';

const mockRepositories = [
  {
    name: 'design-system',
    visibility: 'Public',
    language: 'React',
    size: 7320,
    updatedAt: '1 day ago',
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    language: 'JavaScript',
    size: 5871,
    updatedAt: '2 days ago',
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    size: 4521,
    updatedAt: '5 days ago',
  },
  {
    name: 'mobile-app',
    visibility: 'Public',
    language: 'Swift',
    size: 3096,
    updatedAt: '3 days ago',
  },
  {
    name: 'e-commerce-platform',
    visibility: 'Private',
    language: 'Java',
    size: 6210,
    updatedAt: '6 days ago',
  },
  {
    name: 'blog-website',
    visibility: 'Public',
    language: 'HTML/CSS',
    size: 1876,
    updatedAt: '4 days ago',
  },
  {
    name: 'social-network',
    visibility: 'Private',
    language: 'PHP',
    size: 5432,
    updatedAt: '7 days ago',
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [repositories, setRepositories] = useState(mockRepositories);

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRefresh = () => {
    console.log('Refreshing repositories...');
  };

  const handleAddRepository = () => {
    console.log('Adding new repository...');
  };

  return (
    <MainContent
      repositories={filteredRepositories}
      totalRepositories={repositories.length}
      onRefresh={handleRefresh}
      onAddRepository={handleAddRepository}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    />
  );
};

export default Dashboard;