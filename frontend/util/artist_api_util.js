export const fetchArtists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
}

export const fetchArtist = artist => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${artist.id}`
  })
}

export const createArtist = artist => {
  return $.ajax({
    method: 'POST',
    url: `api/artists`,
    data: { artist }
  })
}

export const updateArtist = artist => {
  return $.ajax({
    method: 'PATCH',
    url: `api/artists/${artist.id}`,
    data: { artist }
  })
}