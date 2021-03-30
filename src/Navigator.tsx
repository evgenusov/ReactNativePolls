import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants/routes';
import { CreatePollScreen } from './screens/CreatePollScreen';
import { AppTheme } from './themes/default';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ChatScreen } from './screens/ChatScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.CHAT} component={ChatScreen} />

      <Stack.Screen
        name={ROUTES.CREATE_POLL}
        component={CreatePollScreen}
        options={{
          headerShown: false,
          cardStyle: {
            marginTop: insets.top,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
