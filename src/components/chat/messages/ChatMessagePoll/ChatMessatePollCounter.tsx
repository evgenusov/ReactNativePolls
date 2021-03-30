import React from 'react';
import styled from 'styled-components/native';
import { SemiBoldText, SmallText } from '../../../Typography';

const ChatMessagePollCounterView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #ac1393;
  margin-top: -10px;
  justify-content: center;
  align-items: center;
`;

type ChatMessagePollCounter = {
  count: number;
};
export const ChatMessagePollCounter = ({ count }: ChatMessagePollCounter) => {
  return (
    <ChatMessagePollCounterView>
      <SemiBoldText>{count}</SemiBoldText>
      <SmallText>votes</SmallText>
    </ChatMessagePollCounterView>
  );
};
