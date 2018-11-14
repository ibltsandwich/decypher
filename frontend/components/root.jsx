import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import Header from './universal/header';
import { HashRouter } from 'react-router-dom';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
};

export default Root;