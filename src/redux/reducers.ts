import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { userReducer } from './thunk';

const rootReducer = combineReducers({
  todos: todoReducer,
  userThunk: userReducer,
  // Add other reducer slices here
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };