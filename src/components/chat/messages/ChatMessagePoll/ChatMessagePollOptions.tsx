import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { IChatMessageProps } from '../../../../entities/message';
import { Text } from '../../../Typography';

const ChatMessagePollButton = styled(TouchableOpacity)`
  background: #1c6ef226;
  height: 40px;
  border-radius: 15px;
  margin-bottom: 8px;
  padding: 0 20px;
  justify-content: center;
`;

export const ChatMessagePollOptions = ({ message }: IChatMessageProps) => {
  return (
    <>
      {message.poll!.options.map((item, index) => (
        <ChatMessagePollButton key={index}>
          <Text>{item.title}</Text>
        </ChatMessagePollButton>
      ))}
    </>
  );
};
