import { RECEIVE_COMMENTS } from '../../actions/comment_actions';
import { RECEIVE_SONG } from '../../actions/song_actions'; 
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';
import { RECEIVE_UPVOTES, REMOVE_UPVOTE } from '../../actions/upvote_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_SONG:
    case RECEIVE_ANNOTATION:
    case RECEIVE_UPVOTES:
      return merge({}, state, action.payload.comments);
    case REMOVE_UPVOTE:
      if (action.payload.upvotes.upvoteable_type === 'Comment') {
        let nextState = merge({}, state);
        const { upvoteable_id, id } = action.payload.upvotes;
        delete nextState[upvoteable_id].upvotes[id];
        return nextState;
      }
      break;
    default:
      return state;
  }
}