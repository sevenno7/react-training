import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import { fromJS } from 'immutable';

import rootSaga from './sagas';
import rootReducer from './reducers';

import { Navbar } from './components/_Shared';
import Home from './components/Home';
import { ListProductContainer } from './components/Product';
import { CreateProductContainer } from './components/Product';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(rootReducer, fromJS({}), composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <section>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={ListProductContainer} />
      <Route exact path="/create" component={CreateProductContainer} />
    </section>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);