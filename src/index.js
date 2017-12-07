import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers/rootReducer';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
