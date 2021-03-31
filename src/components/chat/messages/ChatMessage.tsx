import React from 'react';
import styled from 'styled-components/native';
import { IChatMessageProps } from '../../../entities/message';
import { SemiBoldText, Text } from '../../Typography';
import { ChatMessageAvatar } from './ChatMessageAvatar';

export const ChatMessageView = styled.View`
  flex-direction: row;
  min-height: 30px;
`;

export const ChatMessageAvatarView = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  overflow: hidden;
`;

export const ChatMessageContent = styled.View`
  flex-direction: column;
  padding: 0 9px;
`;

export const ChatMessageUsername = styled(SemiBoldText)`
  color: #7e7a9a;
  font-size: 12px;
`;

export const ChatMessage = ({ message }: IChatMessageProps) => {
  return (
    <ChatMessageView>
      <ChatMessageAvatar message={message} />
      <ChatMessageContent>
        <ChatMessageUsername>{message.author.username}</ChatMessageUsername>
        <Text>{message.text}</Text>
      </ChatMessageContent>
    </ChatMessageView>
  );
};
