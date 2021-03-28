import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPollChoice } from '../../entities/poll';

type ChoicesState = {
  data: UserPollChoice[];
};

const initialState: ChoicesState = {
  data: [],
};

const choicesSlice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    addChoice(state, action: PayloadAction<UserPollChoice>) {
      state.data.unshift(action.payload);
    },
  },
});

export const choicesReducer = choicesSlice.reducer;
export const choiceActions = choicesSlice.reducer;
