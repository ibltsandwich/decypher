import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';
import { RECEIVE_SONG } from '../../actions/song_actions';
import { RECEIVE_UPVOTES, REMOVE_UPVOTE } from '../../actions/upvote_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return merge({}, action.payload.annotations)
    case RECEIVE_ANNOTATION:
    case RECEIVE_UPVOTES:
      return merge({}, state, action.payload.annotations)
    case REMOVE_UPVOTE:
      if (action.payload.upvotes.upvoteable_type === 'Annotation') {
        let nextState = merge({}, state);
        const { upvoteable_id, id } = action.payload.upvotes;
        delete nextState[upvoteable_id].upvotes[id];
        return nextState;
      } else {
        return state;
      }
    default:
      return state;
  }
}
