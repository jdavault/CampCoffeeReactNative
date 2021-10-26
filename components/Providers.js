// @flow 
import React from 'react';
import AuthProvider from './AuthProvider';
import Main from "./Main"
import { Provider } from "react-redux"
import { ConfigureStore } from "../redux/configureStore"

const store = ConfigureStore();

const Providers = () => {
  return (
    //Redux and Auth Providers
    <Provider store={store}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Provider>
  );
};

export default Providers