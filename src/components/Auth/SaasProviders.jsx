import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProviderButton from './ProviderButton';

const providers = [
  { name: 'Github', icon: GitHubIcon },
  { name: 'Bitbucket', image: '/bitbucket.svg' },
  { name: 'Azure Devops', image: '/azure.svg' },
  { name: 'GitLab', image: '/gitlab.svg' },
];

const SaasProviders = () => {
  const navigate = useNavigate();

  const handleProviderClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-3">
      {providers.map((provider) => (
        <div key={provider.name} onClick={handleProviderClick}>
          <ProviderButton 
            icon={provider.icon}
            image={provider.image}
            name={provider.name} 
          />
        </div>
      ))}
    </div>
  );
};

export default SaasProviders;