class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def create
    @song = Song.new(song_params)
    @song.artist_id = @song.find_artist(params[:artist_id], current_user.id)
    @song.user_id = current_user.id

    if @song.save!
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    if @song
      @artist = Artist.find(@song.artist_id)
      if @song.album_id
        @album = Album.find(@song.album_id)
      end
    end
    render 'api/songs/show'
  end

  def update
    @song = Song.find(params[:id])

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