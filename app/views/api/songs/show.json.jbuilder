json.songs do 
  json.set! song.id do
    json.partial! 'api/songs/song', song: @song
  end
end

if @artist
  json.artist do
    json.extract! @artist, :id, :name
  end
end

if @album
  json.album do
    json.extract! @album, :id, :title
  end
end

if @annotations
  json.annotations do
    @annotations.each do |annotation|
      json.set! annotation.id do 
        json.extract! annotation, :id, :body, :user_id, :song_id, :start_idx, :end_idx, :start_line, :end_line
      end
    end
  end
end 