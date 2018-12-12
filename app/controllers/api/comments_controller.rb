class Api::CommentsController < ApplicationController

  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save!
      render 'api/comments/index'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  
  def index
    @comments = Comment.where(commentable_id: params[:id])
    debugger
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :body, :commentable_type, :commentable_id)
  end
end