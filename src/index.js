import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './app/reducers'
import Root from './app';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Root store={store} />,
  document.getElementById('root')
);