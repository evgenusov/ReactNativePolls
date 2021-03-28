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
import { Provider as PaperProvider } from 'react-native-paper';
import { AppTheme } from './src/themes/default';
import { enableScreens } from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;
