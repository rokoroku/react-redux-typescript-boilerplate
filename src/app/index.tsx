import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { App } from 'app/containers/App';

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

// HOC component from react-hot-loader
const HotComponent = hot(module)(() => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
));

// render react DOM
ReactDOM.render(<HotComponent />, document.getElementById('root'));
