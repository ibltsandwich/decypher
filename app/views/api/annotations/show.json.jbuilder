json.annotation do
  json.extract! @annotation, :body, :user_id, :song_id, :start_idx, :end_idx
end