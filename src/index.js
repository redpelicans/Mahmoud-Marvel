import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import { getHeros } from './actions/index';


const initialState = {
    superHeros: [],
    pageId: "heros",
    superHero: {},
};


const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));
store.dispatch(getHeros());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
