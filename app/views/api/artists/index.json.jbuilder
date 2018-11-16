json.array! @artists do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist: artist
  end
end