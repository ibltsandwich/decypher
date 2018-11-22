json.partial! 'api/songs/song', song: @song

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
    json.array! @annotations do |annotation|
      json.id annotation.id
      json.body annotation.body
      json.user_id annotation.user_id
      json.song_id annotation.song_id
      json.start_idx annotation.start_idx
      json.end_idx annotation.end_idx
      json.start_line annotation.start_line
      json.end_line annotation.end_line
    end
  end
end