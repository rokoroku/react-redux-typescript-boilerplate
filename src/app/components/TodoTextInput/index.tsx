import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.css';

export namespace TodoTextInput {
  export interface Props {
    placeholder?: string;
    newTodo?: boolean;
    onSave: (text: string) => void;
  }

  export interface State {
    text: string;
  }
}

export const TodoTextInput = ({
  placeholder,
  newTodo,
  onSave
}: TodoTextInput.Props): JSX.Element => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value.trim();
    if (event.which === 13) {
      onSave(text);
      setInputText('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value.trim();
    if (!newTodo) {
      onSave(text);
    }
  };

  const classes = classNames(
    {
      [style.edit]: !newTodo,
      [style.new]: newTodo
    },
    style.normal
  );

  return (
    <input
      className={classes}
      type="text"
      autoFocus
      placeholder={placeholder}
      value={inputText}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleSubmit}
    />
  );
};
