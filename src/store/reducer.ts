import { combineReducers } from 'redux';
import { messagesReducer } from './chat/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
