import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../../constants/colors';
import { REGEX_PATTERNS } from '../../../constants/regex';
import { IChatMessageProps } from '../../../entities/message';
import { SemiBoldText, ParsedText } from '../../Typography';
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
  color: ${COLORS.gray};
  font-size: 12px;
`;

export const ChatMessageText = styled(ParsedText)`
  font-size: 15px;
`;

export const ChatMessage = ({ message }: IChatMessageProps) => {
  return (
    <ChatMessageView>
      <ChatMessageAvatar message={message} />
      <ChatMessageContent>
        <ChatMessageUsername>{message.author.username}</ChatMessageUsername>
        <ChatMessageText
          parse={[
            {
              pattern: REGEX_PATTERNS.username_mention,
              style: styles.username,
            },
          ]}
          childrenProps={{ allowFontScaling: false }}>
          {message.text}
        </ChatMessageText>
      </ChatMessageContent>
    </ChatMessageView>
  );
};

const styles = StyleSheet.create({
  username: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
  },
});
