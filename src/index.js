import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { PlayerListProvider } from './context/ListContext'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <PlayerListProvider>
        <App />
        </PlayerListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();