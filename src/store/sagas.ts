import { all } from 'redux-saga/effects';
import { MessageSagas } from './chat/sagas';

export default function* rootSaga() {
  yield all([MessageSagas()]);
}
