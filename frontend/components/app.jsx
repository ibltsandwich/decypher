import React from 'react';
import HomeIndex from './home/home_index_container';
import TopSongs from './home/top_songs';
import Modal from './sessions/modal';
import Header from './universal/header_container';
import Navbar from './universal/navbar_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Modal />
            <Route exact path="/" component={HomeIndex} />
            <Route exact path="/#top-songs" component={TopSongs}></Route>
        </div>
    )
}

export default App;