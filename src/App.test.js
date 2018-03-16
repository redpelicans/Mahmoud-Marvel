import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducers'
const initialState = {
  superHeros:[],
  pageId:"heros",
  superHero :[],
 };
const store = createStore(reducer, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
