import React from 'react';
import style from './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { omit } from 'app/utils';
import { Header, TodoList, Footer } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);

const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: RootState.TodoState;
    actions: TodoActions;
    filter: TodoModel.Filter;
  }
}

export const App = ({ actions, history, location }: App.Props) => {
  const dispatch = useDispatch();

  const { todos, filter } = useSelector((state: RootState) => {
    const hash = location && location.hash.replace('#', '');
    return {
      todos: state.todos,
      filter: FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL
    };
  });

  actions = bindActionCreators(omit(TodoActions, 'Type'), dispatch);

  const handleClearCompleted = (): void => {
    const hasCompletedTodo = todos.some((todo) => todo.completed || false);
    if (hasCompletedTodo) {
      actions.clearCompleted();
    }
  };

  const handleFilterChange = (filter: TodoModel.Filter): void => {
    history.push(`#${filter}`);
  };

  const activeCount = todos.length - todos.filter((todo) => todo.completed).length;
  const filteredTodos = filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos;
  const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  return (
    <div className={style.normal}>
      <Header addTodo={actions.addTodo} />
      <TodoList todos={filteredTodos} actions={actions} />
      <Footer
        filter={filter}
        activeCount={activeCount}
        completedCount={completedCount}
        onClickClearCompleted={handleClearCompleted}
        onClickFilter={handleFilterChange}
      />
    </div>
  );
};
