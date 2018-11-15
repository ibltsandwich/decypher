class Api::ArtistsController < ApplicationController 
  def create
    @artist = Artist.new(artist_params)

    if @artist.save!
      render 'api/artists/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def show
    @artist = Artist.find(params[:id])
    render 'api/artists/show'
  end

  def index
    @artists = Artist.all
    render 'api/artists/index'
  end

  def update
    @artist = Artist.find(params[:id])

    if @artist.update(artist_params)
      render 'api/artists/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end	
end