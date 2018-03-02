import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';

export { RootState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todos: todoReducer!
});
