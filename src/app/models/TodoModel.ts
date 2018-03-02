/** TodoMVC model definitions **/

export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
}

export namespace TodoModel {
  export enum Filter {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
  }
}
