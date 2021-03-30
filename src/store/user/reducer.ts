import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../entities/user';
import { v4 as uuid } from 'uuid';

type UserState = {
  currentUser: IUser;
};

export const initialState: UserState = {
  currentUser: {
    uid: uuid(),
    username: 'Current User',
    avatar: 'https://picsum.photos/seed/picsum/64',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
