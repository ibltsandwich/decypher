import { combineReducers } from 'redux';
import users from './users_reducer';
import artists from './track_reducers/artists_reducer';
import albums from './track_reducers/albums_reducer';
import songs from './track_reducers/songs_reducer';
import lyrics from './track_reducers/lyrics_reducer';

export default combineReducers({
    users,
    artists,
    albums,
    songs,
    lyrics
})
