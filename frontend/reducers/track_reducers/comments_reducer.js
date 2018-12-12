import { RECEIVE_COMMENTS } from '../../actions/comment_actions';
import { RECEIVE_SONG } from '../../actions/song_actions'; 
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_SONG:
    case RECEIVE_ANNOTATION:
      return merge({}, state, action.payload.comments);
    default:
      return state;
  }
}