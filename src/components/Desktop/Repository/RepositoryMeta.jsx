import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { formatSize } from '../../../utils/repositoryUtils';

const RepositoryMeta = ({ language, languageColor, size, updatedAt }) => (
  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-sm text-gray-600">
    <div className="flex items-center gap-1.5">
      <CircleIcon sx={{ fontSize: 12 }} className={languageColor} />
      <span>{language}</span>
    </div>
    <span>{formatSize(size)} KB</span>
    <span>Updated {updatedAt}</span>
  </div>
);

export default RepositoryMeta;