// @flow 
import React from 'react';
import AuthProvider from './AuthProvider';
import Main from "./Main"

const Providers = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default Providers