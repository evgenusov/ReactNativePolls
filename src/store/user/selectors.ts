import { IUser } from '../../entities/user';
import { RootState } from '../reducer';

export const selectCurrentUser = (state: RootState): IUser =>
  state.user.currentUser;
