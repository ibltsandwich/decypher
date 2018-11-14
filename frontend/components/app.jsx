import React from 'react';
import HomeIndex from './home/home_index_container';
import Modal from './sessions/modal';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Header from './universal/header_container'

const App = () => {
    return (
        <div>
            <Header />
            <Modal />
            <Route exact path="/" component={HomeIndex} />
        </div>
    )
}

export default App;