import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../../actions/album_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.payload.albums;
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.payload.album.id]: action.payload.album });
    default:
      return state;
  }
}