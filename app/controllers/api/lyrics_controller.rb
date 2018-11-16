class Api::LyricsController < ApplicationController
  def create
    @lyric = Lyric.new(lyric_params)
    @lyric.song_id = params[:song_id]
    @lyric.user_id = current_user.id

    if @lyric.save!
      render 'api/lyrics/show'
    else
      render json: @lyrics.errors.full_messages, status: 422
    end
  end

  def show
    @lyrics = Lyric.find(params[:id])
    render 'api/lyrics/show'
  end

  def update
    @lyric = Lyric.find(params[:id])

    if @lyric.update_attribute(lyric_params)
      render 'api/lyrics/show'
    else
      render @lyric.errors.full_messages, status: 422
    end
  end

  private

  def lyric_params
    params.require(:lyric).permit(:body)
  end
end