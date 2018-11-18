export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs'
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
    url: `api/artists/${song.artist_id}/songs`,
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