import React from 'react';
import styled from 'styled-components/native';
import { IChatMessageProps } from '../../../../entities/message';
import { SemiBoldText, SmallText } from '../../../Typography';
import { ChatMessagePollCounter } from './ChatMessatePollCounter';
import { ChatMessageAvatar } from '../ChatMessageAvatar';

const ChatMessagePollHeaderView = styled.View`
  flex-direction: row;
  height: 60px;
`;

const ChatMessagePollAuthor = styled.View`
  flex-direction: column;
  padding: 0 8px;
  flex: 1;
`;

export const ChatMessagePollHeader = ({ message }: IChatMessageProps) => {
  return (
    <ChatMessagePollHeaderView>
      <ChatMessageAvatar message={message} />
      <ChatMessagePollAuthor>
        <SmallText>Public poll</SmallText>
        <SemiBoldText>{message.author.username}</SemiBoldText>
      </ChatMessagePollAuthor>
      <ChatMessagePollCounter count={0} />
    </ChatMessagePollHeaderView>
  );
};
