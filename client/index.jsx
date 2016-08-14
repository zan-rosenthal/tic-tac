import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/root_reducer';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>
)

render(
  <App />,
  document.getElementById('app')
);
