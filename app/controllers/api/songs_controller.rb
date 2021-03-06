class Api::SongsController < ApplicationController
  def index
    if (params[:limit] && params[:artist_id])
      # @songs = Song.all.limit(params[:limit])
      @songs = Song.where(artist_id: params[:artist_id]).limit(params[:limit])
    elsif (params[:limit])
      @songs = Song.order("id").limit(params[:limit])
    else
      @songs = Song.all
    end
    @artists = []
    @songs.each do |song|
      @artists << Artist.select("name, id").where(id: song.artist_id)
    end

    render 'api/songs/index'
  end

  def create
    @song = Song.new(song_params)
    @song.artist_id = @song.find_artist(params[:song][:artist_id], current_user.id)
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
    @song = Song.includes(:album, :artist, :annotations, :comments).find(params[:id])
    @artist = @song.artist
    @album = @song.album
    @annotations = @song.annotations
    @comments = @song.comments
    
    render 'api/songs/show'
  end

  def update
    @song = Song.includes(:album, :artist, :annotations).find(params[:id])
    @artist = @song.artist
    @album = @song.album
    @annotations = @song.annotations
    
    if @song.update_attributes(song_params)
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:id, :title, :lyrics, :artist_id, :album_id, :photo_url)
  end
end