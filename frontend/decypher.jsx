import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { createSong } from './util/song_api_util';
document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root')
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createSong = createSong;
    // TESTING
    ReactDOM.render(<Root store={store}/>, root)
})