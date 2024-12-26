import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const providers = [
  { name: 'Github', icon: <GitHubIcon />, image: null },
  { name: 'Bitbucket', icon: null, image: '/bitbucket.svg' },
  { name: 'Azure Devops', icon: null, image: '/azure.svg' },
  { name: 'GitLab', icon: null, image: '/gitlab.svg' },
];

const SignInProviders = () => {
  return (
    <div className="space-y-3">
      {providers.map(({ name, icon, image }) => (
        <Button
          key={name}
          variant="outlined"
          fullWidth
          startIcon={icon || <img src={image} alt="" className="w-5 h-5" />}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 normal-case py-3"
        >
          Sign in with {name}
        </Button>
      ))}
    </div>
  );
};

export default SignInProviders;