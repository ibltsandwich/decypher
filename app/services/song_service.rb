class LyricsService
  def initialize(params)
    @artist = Artist.find(params[:artist_id])
    @album = Album.find(params[:album_id])
    @song = Song.find(params[:song_id])
    @lyrics = Lyrics.find(params)
  end
end