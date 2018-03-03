import { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
