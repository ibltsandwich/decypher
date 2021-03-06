import * as UpvoteApiUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTES = 'RECEIVE_UPVOTES';
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

export const receiveUpvotes = payload => {
  return {
    type: RECEIVE_UPVOTES,
    payload
  }
}

export const removeUpvote = payload => {
  return {
    type: REMOVE_UPVOTE,
    payload
  }
}

export const createUpvote = upvote => dispatch => {
  return UpvoteApiUtil.createUpvote(upvote).then(
    response => dispatch(receiveUpvotes(response))
  )
}

export const updateUpvote = upvote => dispatch => {
  return UpvoteApiUtil.updateUpvote(upvote).then(
    response => dispatch(receiveUpvotes(response))
  )
}

export const deleteUpvote = upvote => dispatch => {
  return UpvoteApiUtil.deleteUpvote(upvote).then(
    response => dispatch(removeUpvote(response))
  )
}
