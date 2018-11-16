json.array! @lyrics do |lyric|
  json.set! lyric.id do
    json.partial! 'api/lyrics/lyric', lyric: lyric
  end
end