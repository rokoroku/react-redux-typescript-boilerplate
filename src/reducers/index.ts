import { routerReducer as routing, RouteActions } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import todos from './todos';

export interface RootState {
  routing: RouteActions;
  todos: TodoStoreState;
}

export default combineReducers<RootState>({
  routing,
  todos
});
