class Api::UpvotesController < ApplicationController 

  def create
    @upvote = Upvote.new(upvote_params)
    @upvote.user_id = current_user.id
    @upvote.username = current_user.username
    
    if @upvote.save!
      render 'api/upvotes/show'
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def update
    @upvote = Upvote.find(params[:id])
    
    if @upvote.update_attributes(upvote_params)
      render 'api/upvotes/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @upvote = Upvote.find_by(id: current_user.id)
    @upvote.destroy
  end

  private

  def upvote_params
    params.require(:upvote).permit(:vote_type, :upvoteable_type, :upvoteable_id)
  end
end