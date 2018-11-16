class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.artist_id = params[:artist_id]
    @album.user_id = current_user.id

    if @album.save!
      render 'api/albums/show'
    else
      render json: @albums.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.all
    render 'api/albums/index'
  end

  def update
    @album = Album.find(params[:id])

    if @album.update_attributes(album_params)
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show 
    @album = Album.find(params[:id])
    render 'api/albums/show'
  end

  private

  def album_params
    params.require(:album).permit(:title)
  end
end