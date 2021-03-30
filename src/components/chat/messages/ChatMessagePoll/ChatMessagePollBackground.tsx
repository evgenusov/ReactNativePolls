import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { COLORS } from '../../../../constants/colors';

const ChatMessagePollView = styled(LinearGradient)`
  min-height: 100px;
  border-radius: 18px;
  padding: 20px;
`;

type ChatMessagePollBackgroundProps = {
  children: React.ReactNode;
};

export const ChatMessagePollBackground = (
  props: ChatMessagePollBackgroundProps,
) => {
  return (
    <ChatMessagePollView
      angle={134}
      useAngle={true}
      colors={COLORS.pollGradient}>
      {props.children}
    </ChatMessagePollView>
  );
};
