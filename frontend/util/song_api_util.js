export const fetchSongs = (limit, artist_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: { limit, artist_id }
  })
}

export const fetchSong = id => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
}

export const createSong = song => {
  return $.ajax({
    method: 'POST',
    url: `api/songs`,
    data: { song }
  })
}

export const updateSong = song => {
  return $.ajax({
    method: 'PATCH',
    url: `api/songs/${song.id}`,
    data: { song }
  })
}