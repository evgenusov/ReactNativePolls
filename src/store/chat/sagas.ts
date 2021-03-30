import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';
import { MessageTypeEnum } from '../../entities/message';
import { IPollCreateForm, IPoll } from '../../entities/poll';
import { IUser } from '../../entities/user';
import { selectCurrentUser } from '../user/selectors';
import { messagesActions } from './reducer';
import { v4 as uuid } from 'uuid';

export function* SendPollMessageSaga(action: PayloadAction<IPollCreateForm>) {
  const currentUser: IUser = yield select(selectCurrentUser);

  const poll: IPoll = {
    ...action.payload,
    uid: uuid(),
    options: action.payload.options.map((title) => ({
      title,
      uid: uuid(),
    })),
  };

  yield put(
    messagesActions.push({
      author: currentUser,
      type: MessageTypeEnum.POLL,
      poll,
      uid: uuid(),
    }),
  );
}

export function* MessageSagas() {
  yield takeLatest(messagesActions.sendPoll, SendPollMessageSaga);
}
