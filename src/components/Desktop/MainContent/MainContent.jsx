import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../Search/SearchBar';
import RepositoryList from '../Repository/RepositoryList';

const MainContent = ({ repositories, totalRepositories, onRefresh, onAddRepository, searchQuery, onSearchChange }) => {
  return (
    <div className="flex-1 md:p-8 h-[100vh]">
      <div className="bg-white rounded-none md:rounded-xl shadow-sm h-full flex flex-col">
        <div className="p-4 md:p-6">
          <Header
            totalRepositories={totalRepositories}
            onRefresh={onRefresh}
            onAddRepository={onAddRepository}
          />
          <div className="w-full md:max-w-2xl mb-6">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
        </div>
        <div className="flex-1 overflow-hidden px-4 md:px-6">
          <div className="h-[calc(100vh-280px)] md:h-[calc(100vh-270px)] overflow-y-auto repository-scroll pb-6">
            <RepositoryList repositories={repositories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;