import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import { TextField } from '../TextField';

export const ChatFooterView = styled.View`
  flex: 1;
  min-height: 100px;
  max-height: 200px;
  flex-direction: row;
  padding: 20px;
`;

export const ChatFooterViewLeft = styled.View`
  width: 45px;
  height: 35px;
  align-items: flex-start;
  justify-content: center;
`;

export const ChatFooterViewRight = styled.View`
  width: 45px;
  align-items: flex-end;
  justify-content: center;
  height: 35px;
`;

export const ChatFooterViewCenter = styled.View`
  flex: 1;
`;

export const ChatFooter = () => {
  const navigation = useNavigation();

  const onTouchApps = useCallback(() => {
    navigation.navigate(ROUTES.CREATE_POLL);
  }, [navigation]);

  return (
    <ChatFooterView>
      <ChatFooterViewLeft>
        <Icon
          name="apps"
          size={26}
          onPress={onTouchApps}
          color={COLORS.white}
        />
      </ChatFooterViewLeft>
      <ChatFooterViewCenter>
        <TextField
          placeholder="Message"
          multiline={true}
          wrapperStyle={style.textField}
        />
      </ChatFooterViewCenter>
      <ChatFooterViewRight>
        <Icon name="radiobox-marked" size={26} color={COLORS.white} />
      </ChatFooterViewRight>
    </ChatFooterView>
  );
};

const style = StyleSheet.create({
  textField: {
    minHeight: 35,
  },
});
