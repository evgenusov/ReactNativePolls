import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { useLayoutEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { ChatFooter } from '../components/chat/ChatFooter';
import { ChatMessageFactory } from '../components/chat/ChatMessageFactory';
import { Header } from '../components/CustomHeader';
import { Container, SizedBox } from '../components/Helpers';
import { RoundedImage } from '../components/RoundedImage';
import { UserAvatar } from '../components/UserAvatar';
import { IMessage } from '../entities/message';
import { selectMessages } from '../store/chat/selector';

export const ChatMessageContainer = styled.View`
  padding: 12px 20px;
  padding-top: 0;
`;

export const ChatScreenContainer = styled.View`
  flex: 1;
`;

export const ChatScreen = () => {
  const listRef = useRef<FlatList<IMessage> | null>();
  const messages = useSelector(selectMessages);

  const renderMessage = (item: ListRenderItemInfo<IMessage>) => {
    return (
      <ChatMessageContainer>
        <ChatMessageFactory message={item.item} />
      </ChatMessageContainer>
    );
  };

  return (
    <>
      <Header
        title="Lowkey Squad"
        subtitle="1 member • 1 online"
        right={
          <RoundedImage
            src={'https://picsum.photos/seed/picsum/64'}
            size={35}
            radius={35}
          />
        }
      />
      <ChatScreenContainer>
        <FlatList
          ref={(ref) => (listRef.current = ref)}
          data={messages}
          keyExtractor={(item) => item.uid}
          renderItem={renderMessage}
        />
        <ChatFooter />
      </ChatScreenContainer>
    </>
  );
};
