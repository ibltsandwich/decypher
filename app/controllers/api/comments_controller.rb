class Api::CommentsController < ApplicationController

  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.username = current_user.username

    if @comment.save!
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/comments/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :body, :commentable_type, :commentable_id)
  end
end