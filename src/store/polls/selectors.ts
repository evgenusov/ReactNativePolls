import { RootState } from '../reducer';

export const selectPoll = (state: RootState, poll_uid: string) => {
  return state.polls.data.find((poll) => poll.uid === poll_uid);
};
