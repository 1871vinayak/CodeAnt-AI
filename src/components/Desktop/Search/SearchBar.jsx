import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search Repositories"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-1/2 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;