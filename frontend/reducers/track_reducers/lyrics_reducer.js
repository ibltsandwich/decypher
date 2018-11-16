import { RECEIVE_LYRIC } from '../../actions/lyric_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LYRIC:
      return merge({}, state, { [action.lyric.id]: action.lyric });
    default:
      return state;
  }
}