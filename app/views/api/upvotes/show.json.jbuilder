# json.extract! @upvote, :id, :user_id, :username, :vote_type, :upvoteable_type

json.upvotes do
  json.extract! @upvote, :id, :user_id, :username, :vote_type, :upvoteable_id, :upvoteable_type
end

if @comment
  json.comments do
    @song.comments.each do |comment|
      json.set! comment.id do
        json.extract! @comment, :id, :body, :user_id, :username, :commentable_type, :commentable_id, :created_at
        if comment.upvotes 
          json.upvotes do
            comment.upvotes.each do |upvote|
              json.set! upvote.id do
                json.extract! upvote, :id, :user_id, :username, :vote_type, :upvoteable_id
              end
            end
          end
        end
      end
    end
  end
end


if @annotation
  json.annotations do
    json.set! @annotation.id do 
      json.extract! @annotation, :id, :body, :user_id, :song_id, :start_idx, :end_idx, :start_line, :end_line
      if @annotation.upvotes
        json.upvotes do
          @annotation.upvotes.each do |upvote|
            json.set! upvote.id do
              json.extract! upvote, :id, :user_id, :username, :vote_type, :upvoteable_id
            end
          end
        end
      end
    end
  end

  json.comments do
    @annotation.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :username, :commentable_type, :commentable_id, :created_at
        if comment.upvotes
          json.upvotes do 
            comment.upvotes.each do |upvote|
              json.set! upvote.id do
                json.extract! upvote, :id, :user_id, :username, :vote_type, :upvoteable_id
              end
            end
          end
        end
      end
    end
  end

end 