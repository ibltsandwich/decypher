import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../../actions/song_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.payload.songs);
    case RECEIVE_SONG:
      // return merge({}, state, { [action.payload.song.id]: action.payload.song });
      return merge({}, state, action.payload);
    default:
      return state;
  }
}