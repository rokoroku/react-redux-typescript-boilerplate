import React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoActions } from 'app/actions/todos';

export namespace Header {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
  }
}

export const Header = ({ addTodo }: Header.Props): JSX.Element => {
  const handleSave = (text: string) => {
    if (text.length) addTodo({ text });
  };

  return (
    <header>
      <h1>Todos</h1>
      <TodoTextInput newTodo onSave={handleSave} placeholder="What needs to be done?" />
    </header>
  );
};
