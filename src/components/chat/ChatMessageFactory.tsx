import React from 'react';
import { IChatMessageProps, MessageTypeEnum } from '../../entities/message';
import { ChatMessage } from './messages/ChatMessage/ChatMessage';
import { ChatMessagePoll } from './messages/ChatMessagePoll/ChatMessagePoll';

export const ChatMessageFactory = ({ message }: IChatMessageProps) => {
  switch (message.type) {
    case MessageTypeEnum.TEXT:
      return <ChatMessage message={message} />;
    case MessageTypeEnum.POLL:
      return <ChatMessagePoll message={message} />;
    default:
      return null;
  }
};
