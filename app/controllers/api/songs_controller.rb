class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def create
    @song = Song.new(song_params)
    @song.artist_id = @song.find_artist(params[:artist_id], current_user.id)
    @artist = Artist.find(@song.artist_id)
    @song.user_id = current_user.id
    @album = nil

    if @song.save!
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.includes(:album, :artist).find(params[:id])
    @artist = @song.artist
    @album = @song.album
    render 'api/songs/show'
  end

  def update
    @song = Song.includes(:album, :artist).find(params[:id])
    @artist = @song.artist
    @album = @song.album
    
    if @song.update_attributes(song_params)
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :lyrics, :artist_id, :album_id)
  end
end