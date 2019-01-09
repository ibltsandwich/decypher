import React from 'react';
import HomeIndex from './home/home_index_container';
import TopSongs from './home/top_songs';
import Modal from './sessions/modal';
import Header from './universal/header_container';
import Navbar from './universal/navbar';
import Footer from './universal/footer';
import NewSongForm from './songs/new_song_form_container';
import SongShow from './songs/song_show_container';
import ArtistList from './artists/artist_list';
import ArtistShow from './artists/artist_show_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Modal />
            <Route exact path="/" component={HomeIndex} />
            <Route exact path="/#top-songs" component={TopSongs} />
            <AuthRoute exact path="/new" component={NewSongForm} />
            <Route path="/songs/:songId" component={SongShow} />
            <Route exact path='/artists/:artistLetter' component={ArtistList} />
            <Route exact path='/artists/:artistLetter/:artistId' component={ArtistShow} />
            <Footer />
        </div>
    )
}

export default App;