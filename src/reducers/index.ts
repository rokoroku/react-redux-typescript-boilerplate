import { routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import todos from './todos';

export interface RootReducerState {
  routing: any;
  todos: TodoStoreState;
};

export default combineReducers<RootReducerState>({
  routing,
  todos
});
