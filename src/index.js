import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";

const loggerMiddle = store => next => action => {
    const result = next(action)
    //console.log('Middleware', store.getState())
    return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddle))

const app = (
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
