json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end

if @artists
  json.artists do
    @artists.each do |artist|
      json.set! artist[0].id do
        json.extract! artist[0], :name, :id
      end
    end
  end
end