import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './modules/App/App';
import {configureStore} from './redux/store';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
