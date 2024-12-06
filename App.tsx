/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Persistor, Store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/routes/Router';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
