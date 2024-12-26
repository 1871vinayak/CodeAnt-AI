import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Header = ({ totalRepositories, onRefresh, onAddRepository }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-2xl font-bold mb-1">Repositories</h1>
        <p className="text-gray-600">{totalRepositories} total repositories</p>
      </div>
      <div className="flex gap-2">
        <Button
          startIcon={<RefreshIcon />}
          variant="outlined"
          onClick={onRefresh}
          className="text-gray-700"
        >
          Refresh All
        </Button>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={onAddRepository}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add Repository
        </Button>
      </div>
    </div>
  );
};

export default Header;