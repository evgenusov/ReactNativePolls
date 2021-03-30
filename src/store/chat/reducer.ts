import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IMessage, MessageTypeEnum } from '../../entities/message';
import { IPollCreateForm } from '../../entities/poll';

interface IMessagesState {
  messages: IMessage[];
}

const initialState: IMessagesState = {
  messages: [
    {
      uid: uuid(),
      author: {
        uid: '1',
        username: 'Kelly Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text:
        'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
    },
    {
      uid: uuid(),
      author: {
        uid: '2',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Sounds good to me!!!',
    },
    {
      uid: uuid(),
      author: {
        uid: '4',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: '@kellyhodges are you in???',
    },
    {
      uid: uuid(),
      author: {
        uid: '3',
        username: 'Kelley Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
    },
    {
      uid: uuid(),
      author: {
        uid: '1',
        username: 'Kelly Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text:
        'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
    },
    {
      uid: uuid(),
      author: {
        uid: uuid(),
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Sounds good to me!!!',
    },
    {
      uid: uuid(),
      author: {
        uid: uuid(),
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: '@kellyhodges are you in???',
    },
    {
      uid: uuid(),
      author: {
        uid: '3',
        username: 'Kelley Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
    },
    {
      uid: uuid(),
      author: {
        uid: '1',
        username: 'Kelly Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text:
        'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
    },
    {
      uid: uuid(),
      author: {
        uid: '2',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Sounds good to me!!!',
    },
    {
      uid: uuid(),
      author: {
        uid: '4',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: '@kellyhodges are you in???',
    },
    {
      uid: uuid(),
      author: {
        uid: '3',
        username: 'Kelley Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
    },
    {
      uid: uuid(),
      author: {
        uid: '1',
        username: 'Kelly Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text:
        'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥how about everyone else? Any ideas?',
    },
    {
      uid: uuid(),
      author: {
        uid: '2',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Sounds good to me!!!',
    },
    {
      uid: uuid(),
      author: {
        uid: '4',
        username: 'Edwin Bass',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: '@kellyhodges are you in???',
    },
    {
      uid: uuid(),
      author: {
        uid: '3',
        username: 'Kelley Hodges',
        avatar: 'https://picsum.photos/seed/picsum/64',
      },
      type: MessageTypeEnum.TEXT,
      text: 'Nice! 12 ppl in total. Let’s gather at the metro station!🚆🚆🚆',
    },
  ],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendPoll(state, _: PayloadAction<IPollCreateForm>) {
      return state;
    },
    push(state, action: PayloadAction<IMessage>) {
      state.messages.push(action.payload);
      return state;
    },
  },
});

export const messagesReducer = messagesSlice.reducer;
export const messagesActions = messagesSlice.actions;
