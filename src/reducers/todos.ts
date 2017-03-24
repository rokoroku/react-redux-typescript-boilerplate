import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: TodoStoreState = [{
  id: 0,
  text: 'Use Redux',
  completed: false
}];

export default handleActions<TodoStoreState, TodoItemData>({
  [Actions.ADD_TODO]: (state, action) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      ...action.payload,
    }, ...state];
  },

  [Actions.DELETE_TODO]: (state, action) => {
    return state.filter(todo => todo.id !== action.payload);
  },

  [Actions.EDIT_TODO]: (state, action) => {
    return state.map(todo => {
      return todo.id === action.payload.id
        ? { ...todo, text: action.payload.text }
        : todo;
    });
  },

  [Actions.COMPLETE_TODO]: (state, action) => {
    return state.map(todo => {
      return todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
  },

  [Actions.COMPLETE_ALL]: (state, action) => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => {
      return {
        ...todo,
        completed: !areAllMarked
      };
    });
  },

  [Actions.CLEAR_COMPLETED]: (state, action) => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
