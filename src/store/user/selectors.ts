import { RootState } from '../reducer';

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
