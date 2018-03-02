import { TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
