import 'react-redux';

declare module 'react-redux' {

  // overload connect interface to return built-in ClassDecorator
  // https://github.com/reactjs/react-redux/pull/541#issuecomment-269197189
  export function connect<TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    options?: Options
  ): InferableComponentDecorator<TOwnProps>;
}
