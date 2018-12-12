import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = payload => {
  return {
    type: RECEIVE_COMMENTS,
    payload
  }
}

export const fetchAnnoComments = id => dispatch => {
  return CommentApiUtil.fetchAnnoComments(id).then(
    response => dispatch(receiveComments(response))
  )
}

export const fetchSongComments = id => dispatch => {
  return CommentApiUtil.fetchSongComments(id).then(
    response => dispatch(receiveComments(response))
  )
}

export const createAnnoComment = comment => dispatch => {
  return CommentApiUtil.createAnnoComment(comment).then(
    response => dispatch(receiveComments(response))
  )
}

export const createSongComment = comment => dispatch => {
  return CommentApiUtil.createSongComment(comment).then(
    response => dispatch(receiveComments(response))
  )
}