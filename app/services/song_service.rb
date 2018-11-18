class SongService
  def initialize(params)
    @artist = Artist.find(params[:artist_id])
    @album = Album.find(params[:album_id])
    @song = Song.find(params[:id])
  end

  def self.create(params)
    artist = params[:artist_id]
    album = params[:album_id]
    title = params[:title]
    lyrics = params[:lyrics]
    Song.new(title: title, lyrics: lyrics, artist_id: artist, album_id: album)
  end
end