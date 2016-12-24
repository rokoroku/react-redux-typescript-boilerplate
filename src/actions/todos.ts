import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const addTodo = createAction<TodoItemData>(Actions.ADD_TODO);
export const editTodo = createAction<TodoItemData>(Actions.EDIT_TODO);
export const deleteTodo = createAction<TodoItemId>(Actions.DELETE_TODO);
export const completeTodo = createAction<TodoItemId>(Actions.COMPLETE_TODO);
export const completeAll = createAction<void>(Actions.COMPLETE_ALL);
export const clearCompleted = createAction<void>(Actions.CLEAR_COMPLETED);