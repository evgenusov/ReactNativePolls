import React, { useEffect, useRef } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { ChatFooter } from '../components/chat/ChatFooter';
import { ChatMessageFactory } from '../components/chat/ChatMessageFactory';
import { Header } from '../components/CustomHeader';
import { SizedBox } from '../components/Helpers';
import { RoundedImage } from '../components/RoundedImage';
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

  useEffect(() => {}, [messages]);

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
          ListHeaderComponent={<SizedBox height={35} />}
          data={messages}
          inverted={true}
          keyExtractor={(item) => item.uid}
          renderItem={renderMessage}
        />
        <ChatFooter />
      </ChatScreenContainer>
    </>
  );
};
