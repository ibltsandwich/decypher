export const createUpvote = upvote => {
  return $.ajax({
    method: 'POST',
    url: 'api/upvotes',
    data: { upvote }
  })
};

export const updateUpvote = upvote => {
  return $.ajax({
    method: 'PATCH',
    url: `api/upvotes/${upvote.id}`,
    data: { upvote }
  })
}

export const deleteUpvote = upvote => {
  return $.ajax({
    method: 'DELETE',
    url: `api/upvotes/${upvote.id}`
  })
}