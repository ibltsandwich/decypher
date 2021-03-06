class Api::ArtistsController < ApplicationController 
  def create
    @artist = Artist.new(artist_params)
    @artist.user_id = current_user.id
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
    if params[:letter] == '#'
      @artists = Artist.where(name: "0%".."9%")
    else
      @artists = Artist.where('name ilike ?', "#{params[:letter]}%")
    end
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