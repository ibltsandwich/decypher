json.set! @annotation.id do
  # json.extract! @annotation, :id, :body, :user_id, :song_id, :start_idx, :end_idx, :start_line, :end_line
    json.id @annotation.id
    json.body @annotation.body
    json.user_id @annotation.user_id
    json.song_id @annotation.song_id
    json.start_idx @annotation.start_idx
    json.end_idx @annotation.end_idx
    json.start_line @annotation.start_line
    json.end_line @annotation.end_line
end