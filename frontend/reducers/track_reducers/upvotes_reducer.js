import { RECEIVE_UPVOTES } from '../../actions/upvote_actions';
import { RECEIVE_SONG } from '../../actions/song_actions';
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UPVOTES:
    case RECEIVE_SONG:
    case RECEIVE_ANNOTATION:
      return merge({}, state, action.payload);
    default:
      return state;
  }
}
