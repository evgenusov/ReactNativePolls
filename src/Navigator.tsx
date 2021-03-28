import React from 'react';
import { NavigationContainer, Theme, useTheme } from '@react-navigation/native';
import { ROUTES } from './constants/routes';
import { CreatePollScreen } from './screens/CreatePollScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AppTheme } from './themes/default';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const getDefaultHeaderConfig = (theme: Theme) => {
  return {
    headerStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      backgroundColor: 'transparent',
      color: theme.colors.text,
      fontWeight: 'bold',
      fontSize: 16,
    },
  };
};

const RootStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          ...getDefaultHeaderConfig(theme),
          title: 'Home',
        }}
      />
      <Stack.Screen
        name={ROUTES.CREATE_POLL}
        component={CreatePollScreen}
        options={{
          ...getDefaultHeaderConfig(theme),
          title: 'New Poll',
          headerBackTitleStyle: {
            padding: 0,
            margin: 0,
            width: 32,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
