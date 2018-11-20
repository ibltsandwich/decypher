class Api::AnnotationsController < ApplicationController 
  def create
    @annotation = Annotation.new
    @annotation.user_id = current_user.id
    @annotation.song_id = params[:id]
  end

  def update
    @annotation = Annotation.find(params[:id])
  end

  def show

  end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :user_id, :song_id)
  end
end