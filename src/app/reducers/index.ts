import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  todos: todoReducer,
  router: routerReducer
});
