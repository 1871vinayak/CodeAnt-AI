import React from 'react';
import StatsSection from './StatsSection';
import SignInSection from './SignInSection';

const SignIn = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2">
        <StatsSection />
      </div>
      <div className="w-full md:w-1/2">
        <SignInSection />
      </div>
    </div>
  );
};

export default SignIn;