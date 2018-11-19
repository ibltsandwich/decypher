json.song do 
  json.extract! song, :id, :title, :artist_id, :album_id, :user_id, :lyrics, :photo_url
end