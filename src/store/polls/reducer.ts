import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Poll } from '../../entities/poll';

type PollStoreType = {
  data: Poll[];
};

const initialState: PollStoreType = {
  data: [],
};

const pollsSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    createPoll(state, _: PayloadAction<Poll>) {
      return state;
    },
    add(state, action: PayloadAction<Poll>) {
      state.data.push(action.payload);
    },
  },
});

export const pollsReducer = pollsSlice.reducer;
export const pollActions = pollsSlice.actions;
