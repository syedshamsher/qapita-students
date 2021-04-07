import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import {Provider} from 'react-redux'
import { store } from './redux/store';
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
=======
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App/>
        </Router>
>>>>>>> fd6d818a72e2b55c8b6d08ca0c42d669354bbba2
    </Provider>,
document.getElementById('root')
);