export const fetchLyric = lyric => {
  return $.ajax({
    method: 'GET',
    url: `api/song/${lyric.song_id}/lyrics/${lyric.id}`
  })
}

export const createLyric = lyric => {
  return $.ajax({
    method: 'POST',
    url: `api/song/${lyric.song_id}/lyrics`,
    data: { lyric }
  })
}

export const updateLyric = lyric => {
  return $.ajax({
    method: 'PATCH',
    url: `api/song/${lyric.song_id}/lyrics/${lyric.id}`,
    data: { lyric }
  })
}