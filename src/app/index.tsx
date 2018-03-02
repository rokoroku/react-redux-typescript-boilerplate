import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { App } from 'app/containers/App';

// prepare store
const store = configureStore();
const history = createBrowserHistory();

// HOC component from react-hot-loader
const HotComponent = hot(module)(() => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
));

// render react DOM
ReactDOM.render(<HotComponent />, document.getElementById('root'));
