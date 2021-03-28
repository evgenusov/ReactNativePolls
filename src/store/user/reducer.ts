import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@sentry/react-native';

type UserState = {
  currentUser: User | null;
};
export const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fakeLogin(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
