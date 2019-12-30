import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import createStore from './store'
import 'semantic-ui-css/semantic.min.css'

const store = createStore();
setTimeout(function () {
    store.dispatch({
        type: 'dsfsdfsd'
    });
}, 1000)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

