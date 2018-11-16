export const fetchAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/albums'
  })
}

export const fetchAlbum = album => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${album.artist_id}/albums/${album.id}`
  })
}

export const createAlbum = album => {
  return $.ajax({
    method: 'POST',
    url: `api/artists/${album.artist_id}/albums/`,
    data: { album }
  })
}

export const updateAlbum = album => {
  return $.ajax({
    method: 'PATCH',
    url: `api/artists/${album.artist_id}/albums/${album.id}`,
    data: { album }
  })
}