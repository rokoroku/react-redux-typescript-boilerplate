import { combineReducers, Reducer } from 'redux';
import todos from './todos';

export interface RootState {
  todos: TodoStoreState;
}

export default combineReducers<RootState>({
  todos
});
