class Api::UpvotesController < ApplicationController 

  def create
    @upvote = Upvote.new(upvote_params)
    @upvote.user_id = current_user.id
    @upvote.username = current_user.username

    if @upvote.upvoteable_type == "Comment"
      @comment = Comment.find(@upvote.upvoteable_id)
      @song = Song.find(@comment.commentable_id)
    elsif @upvote.upvoteable_type == "Annotation"
      @annotation = Annotation.find(@upvote.upvoteable_id)
      @song = Song.find(@annotation.song_id)
    end
    
    if @upvote.save!
      render 'api/upvotes/show'
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def update
    @upvote = Upvote.find(params[:id])

    if @upvote.upvoteable_type == "Comment"
      @comment = Comment.find(@upvote.upvoteable_id)
      @song = Song.find(@comment.commentable_id)
    elsif @upvote.upvoteable_type == "Annotation"
      @annotation = Annotation.find(@upvote.upvoteable_id)
      @song = Song.find(@annotation.song_id)
    end
    
    if @upvote.update_attributes(upvote_params)
      render 'api/upvotes/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show 
    @upvote = Upvote.find(params[:id])
    if @upvote.upvoteable_type == "Comment"
      @comment = Comment.find(@upvote.upvoteable_id)
      @song = Song.find(@comment.commentable_id)
    elsif @upvote.upvoteable_type == "Annotation"
      @annotation = Annotation.find(@upvote.upvoteable_id)
      @song = Song.find(@annotation.song_id)
    end

    render 'api/upvotes/show'
  end

  def destroy
    @upvote = Upvote.find(params[:id])
    if @upvote.upvoteable_type == "Comment"
      @comment = Comment.find(@upvote.upvoteable_id)
      @song = Song.find(@comment.commentable_id)
    elsif @upvote.upvoteable_type == "Annotation"
      @annotation = Annotation.find(@upvote.upvoteable_id)
      @song = Song.find(@annotation.song_id)
    end
    @upvote.destroy
    render 'api/upvotes/show'
  end

  private

  def upvote_params
    params.require(:upvote).permit(:vote_type, :upvoteable_type, :upvoteable_id)
  end
end