export const fetchArtists = (letter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/artists',
    data: { letter }
  })
}

export const fetchArtist = id => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
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