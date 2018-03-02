import * as React from 'react';
import { TodoActions } from '../../actions/todos';
import * as style from './style.css';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, MainSection } from '../../components';
import { TodoModel } from '../../models';
import { omit } from '../../utils';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: RootState.TodoState;
    actions: typeof TodoActions;
  }
}

@connect(
  (state: RootState) => ({ todos: state.todos }),
  (dispatch: Dispatch<RootState>) => ({ actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch) })
)
export class App extends React.Component<App.Props> {
  render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    );
  }
}
