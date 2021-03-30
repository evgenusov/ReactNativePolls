/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { RootNavigator } from './src/Navigator';
import { Provider as StoreProvider } from 'react-redux';
import { AppTheme } from './src/themes/default';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components';
import { store } from './src/store';

enableScreens();

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={AppTheme}>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
