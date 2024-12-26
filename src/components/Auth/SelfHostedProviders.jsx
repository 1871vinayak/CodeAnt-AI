import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProviderButton from './ProviderButton';
import KeyIcon from '@mui/icons-material/Key';

const providers = [
  { name: 'Self Hosted GitLab', image: '/gitlab.svg' },
  { name: 'SSO', icon: KeyIcon },
];

const SelfHostedProviders = () => {
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

export default SelfHostedProviders;