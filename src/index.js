import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/app/App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import { Provider } from 'react-redux';
import store from './data/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
