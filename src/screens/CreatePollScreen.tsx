import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

export const CreatePollScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        header
    });
  }, []);
  return (
    <View>
      <Text>CreatePollScreen</Text>
    </View>
  );
};
