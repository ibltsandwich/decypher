class Api::AnnotationsController < ApplicationController 
  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user_id = current_user.id
    # @annotation.song_id = params[:id]

    if @annotation.save
      render 'api/annotations/show'
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def update
    @annotation = Annotation.includes(:song).find(params[:id])
    @song = @annotation.song

    if @annotation.update_attributes(annotation_params)
      render 'api/annotations/show'
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.includes(:song).find(params[:id])
    render 'api/annotations/show'
  end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :song_id, :start_idx, :end_idx, :start_line, :end_line)
  end
end