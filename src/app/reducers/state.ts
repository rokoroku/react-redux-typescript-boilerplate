import { TodoModel } from '../models';

export interface RootState {
  todos: RootState.TodoState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
