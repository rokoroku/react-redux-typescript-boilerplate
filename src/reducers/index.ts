import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import todos from './todos';

export { RootState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todos
});
