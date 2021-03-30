import React from 'react';
import styled from 'styled-components/native';
import { IChatMessageProps } from '../../../../entities/message';
import { SizedBox } from '../../../Helpers';
import { MediumText } from '../../../Typography';
import { ChatMessagePollBackground } from './ChatMessagePollBackground';
import { ChatMessagePollHeader } from './ChatMessagePollHeader';
import { ChatMessagePollOptions } from './ChatMessagePollOptions';

const ChatMessagmePollTitle = styled(MediumText)`
  font-size: 15px;
`;

export const ChatMessagePoll = ({ message }: IChatMessageProps) => {
  return (
    <ChatMessagePollBackground>
      <ChatMessagePollHeader message={message} />
      <ChatMessagmePollTitle>{message.poll!.text}</ChatMessagmePollTitle>
      <SizedBox height={15} />
      <ChatMessagePollOptions message={message} />
    </ChatMessagePollBackground>
  );
};
