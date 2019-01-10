export const fetchSongs = (limit) => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: { limit }
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