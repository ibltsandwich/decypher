json.annotations do
  json.set! @annotation.id do
    json.extract! @annotation, :id, :body, :user_id, :song_id, :start_idx, :end_idx, :start_line, :end_line
  end
end

if @comments
  json.comments do
    @comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :commentable_type, :commentable_id
      end
    end
  end
end