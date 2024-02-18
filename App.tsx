/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainNavigation from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}



export default App;
