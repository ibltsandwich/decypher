json.comments do
  json.set! @comment.id do
    json.extract! @comment, :id, :body, :user_id, :username, :commentable_type, :commentable_id, :created_at
  end
end