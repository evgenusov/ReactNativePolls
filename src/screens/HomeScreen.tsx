import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { ROUTES } from '../constants/routes';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const onTouch = useCallback(() => {
    navigation.navigate(ROUTES.CREATE_POLL);
  }, [navigation]);

  return (
    <View>
      <Button onPress={onTouch}>Create poll</Button>
    </View>
  );
};
