import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';
import { RECEIVE_SONG } from '../../actions/song_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.payload.artists;
    case RECEIVE_SONG:
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.payload.artist.id]: action.payload.artist });
    default:
      return state;
  }
}