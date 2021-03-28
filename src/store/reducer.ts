import { combineReducers } from 'redux';
import { choicesReducer } from './choices/reducer';
import { pollsReducer } from './polls/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  polls: pollsReducer,
  choices: choicesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
