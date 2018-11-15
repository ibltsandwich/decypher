class Api::AlbumsController < ApplicationController
  def create
    @album = Album.find(album_params)

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

  def show 
    @album = Album.find(params[:id])
    render 'api/albums/show'
  end

  private

  def album_params
    params.require(:album).permit(:name, :artist_id)
  end
end