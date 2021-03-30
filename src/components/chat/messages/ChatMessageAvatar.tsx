import React from 'react';
import { IChatMessageProps } from '../../../entities/message';
import { UserAvatar } from '../../UserAvatar';

export const ChatMessageAvatar = ({ message }: IChatMessageProps) => {
  return <UserAvatar user={message.author} size={40} radius={15} />;
};
