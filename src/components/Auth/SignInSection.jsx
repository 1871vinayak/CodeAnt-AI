import React, { useState } from 'react';
import SignInModeSelector from './SignInModeSelector';
import SaasProviders from './SaasProviders';
import SelfHostedProviders from './SelfHostedProviders';

const SignInSection = () => {
  const [mode, setMode] = useState('saas');

  return (
    <div className="min-h-screen bg-[#FAFBFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-6">
          <img src="/CodeAnt_AI.svg" alt="CodeAnt AI" className="h-8 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-center mb-8">Welcome to CodeAnt AI</h1>
          
          <SignInModeSelector mode={mode} onModeChange={setMode} />
          <hr className="border-gray-200 mb-6" />
          {mode === 'saas' ? <SaasProviders /> : <SelfHostedProviders />}
        </div>

        <p className="text-center text-sm text-gray-600">
          By signing up you agree to the{' '}
          <a href="#" className="text-black hover:underline font-bold">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInSection;