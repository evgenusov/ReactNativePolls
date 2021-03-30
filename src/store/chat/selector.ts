import { RootState } from '../reducer';

export const selectMessages = (state: RootState) => [
  ...state.messages.messages,
];
