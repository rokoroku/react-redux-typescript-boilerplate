import 'react-redux';

declare module 'react-redux' {
  // Add removed inferrable type to support connect as decorator
  // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16652
  export interface InferableComponentDecorator<TOwnProps> {
    <T extends Component<TOwnProps>>(component: T): T;
  }

  // overload connect interface to return built-in ClassDecorator
  // https://github.com/reactjs/react-redux/pull/541#issuecomment-269197189
  export interface Connect {
    <TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any, State = any>(
      mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
      mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
      mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
      options?: Options
    ): InferableComponentDecorator<TOwnProps>;
  }
}
