import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root')
);