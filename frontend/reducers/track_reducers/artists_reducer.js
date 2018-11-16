import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
}