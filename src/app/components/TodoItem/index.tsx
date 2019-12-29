import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.css';
import { TodoModel } from 'app/models';
import { TodoActions } from 'app/actions';
import { TodoTextInput } from '../TodoTextInput';

export namespace TodoItem {
  export interface Props {
    todo: TodoModel;
    editTodo: typeof TodoActions.editTodo;
    deleteTodo: typeof TodoActions.deleteTodo;
    completeTodo: typeof TodoActions.completeTodo;
  }

  export interface State {
    editing: boolean;
  }
}

export const TodoItem = ({ todo, editTodo, deleteTodo, completeTodo }: TodoItem.Props) => {
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo({ id, text });
    }
    setEditing(false);
  };

  const renderElement = (): JSX.Element => {
    if (editing) {
      return <TodoTextInput onSave={(text) => todo.id && handleSave(todo.id, text)} />;
    } else {
      return (
        <div className={style.view}>
          <input
            className={style.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => todo.id && completeTodo(todo.id)}
          />
          <label onDoubleClick={() => handleDoubleClick()}>{todo.text}</label>
          <button
            className={style.destroy}
            onClick={() => {
              if (todo.id) deleteTodo(todo.id);
            }}
          />
        </div>
      );
    }
  };

  const classes = classNames({
    [style.completed]: todo.completed,
    [style.editing]: editing,
    [style.normal]: !editing
  });

  return <li className={classes}>{renderElement()}</li>;
};
