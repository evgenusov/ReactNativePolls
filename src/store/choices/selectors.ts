import { RootState } from '../reducer';

export const selectPollChoices = (state: RootState, poll_uid: string) => {
  return state.choices.data.filter((choice) => choice.poll_uid === poll_uid);
};

