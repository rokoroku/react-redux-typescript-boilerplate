import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { omit } from 'app/utils';
import { Header, MainSection } from 'app/components';

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
