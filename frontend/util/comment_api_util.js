export const fetchAnnoComments = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/annotations/${id}/comments`
  })
}

export const fetchSongComments = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${id}/comments`
  })
}

export const createAnnoComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `api/annotations/${comment.commentable_id}/comments`,
    data: { comment }
  })
}

export const createSongComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `api/songs/${comment.commentable_id}/comments`,
    data: { comment }
  })
}

export const deleteSongComment = comment => {
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${comment.commentable_id}/comments/${comment.id}`
  })
}