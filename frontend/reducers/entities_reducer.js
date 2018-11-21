import { combineReducers } from 'redux';
import users from './users_reducer';
import artists from './track_reducers/artists_reducer';
import albums from './track_reducers/albums_reducer';
import songs from './track_reducers/songs_reducer';
import annotations from './track_reducers/annotations_reducer';

export default combineReducers({
    users,
    artists,
    albums,
    songs,
    annotations
})
