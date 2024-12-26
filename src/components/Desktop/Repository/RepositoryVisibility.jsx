import React from 'react';
import { Chip } from '@mui/material';

const RepositoryVisibility = ({ isPublic, visibility }) => (
  <Chip
    label={visibility}
    size="small"
    variant="outlined"
    className={`${
      isPublic 
        ? 'border-blue-200 text-blue-600 bg-blue-50'
        : 'border-gray-200 text-gray-600 bg-gray-50'
    }`}
  />
);

export default RepositoryVisibility;