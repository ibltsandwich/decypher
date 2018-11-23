import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';
import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from '../../actions/song_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.payload.artists);
    case RECEIVE_SONG:
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.payload.artist.id]: action.payload.artist });
    default:
      return state;
  }
}