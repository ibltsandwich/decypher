json.partial! 'api/songs/song', song: @song

if @song.artist_id
  json.artist do 
    json.extract! @artist, :id, :name
  end
end
if @song.album_id
  json.extract! @album, :id, :title
end