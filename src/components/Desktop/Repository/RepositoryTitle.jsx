import React from 'react';

const RepositoryTitle = ({ name }) => (
  <h3 className="text-base md:text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
    {name}
  </h3>
);

export default RepositoryTitle;