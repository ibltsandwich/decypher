class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def create
    @song = Song.new(song_params)

    if @song.save!
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    render 'api/songs/show'
  end

  def update
    @song = Song.find(params[:id])

    if @song.update_attributes(song_params)
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
  end

  private

  def song_params
    params.require(:song).permit(:title, :artist_id, :album_id)
  end
end