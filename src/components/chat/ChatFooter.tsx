import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { ROUTES } from '../../constants/routes';
import { TextField } from '../TextField';
import { Text } from '../Typography';

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
  align-items: center;
  justify-content: center;
`;

export const ChatFooterViewRight = styled.View`
  width: 45px;
  align-items: center;
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
        <Text>
          <Icon name="apps" size={26} onPress={onTouchApps} />
        </Text>
      </ChatFooterViewLeft>
      <ChatFooterViewCenter>
        <TextField placeholder="Message" multiline={true} />
      </ChatFooterViewCenter>
      <ChatFooterViewRight>
        <Text>
          <Icon name="radiobox-marked" size={26} />
        </Text>
      </ChatFooterViewRight>
    </ChatFooterView>
  );
};
