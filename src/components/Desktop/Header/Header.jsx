import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Header = ({ totalRepositories, onRefresh, onAddRepository }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 gap-4">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Repositories</h1>
        </div>
        <p className="text-gray-500 mt-1">{totalRepositories} total repositories</p>
      </div>
      <div className="flex gap-2 md:gap-3">
        <Button
          startIcon={<RefreshIcon />}
          variant="outlined"
          onClick={onRefresh}
          className="text-gray-700 border-gray-300 hover:bg-gray-50 normal-case text-sm md:text-base"
        >
          Refresh All
        </Button>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={onAddRepository}
          className="bg-blue-600 hover:bg-blue-700 normal-case text-sm md:text-base"
        >
          Add Repository
        </Button>
      </div>
    </div>
  );
};

export default Header;