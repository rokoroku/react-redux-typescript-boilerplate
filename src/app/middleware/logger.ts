import { Store, Middleware, MiddlewareAPI } from 'redux';

export const logger: Middleware = (store: MiddlewareAPI<any>) => (next) => (action) => {
  console.log(action);
  return next(action);
};
