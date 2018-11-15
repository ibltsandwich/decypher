class SongService
  def initialize(artist_id, album_id, song_id)
    @artist = Artist.find(artist_id)
    @album = Album.find(@artist.albums[album_id].id)
    @song_id = Song.find(@album.songs[song_id].id)
  end
end