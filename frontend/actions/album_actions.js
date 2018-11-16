import * as AlbumApiUtil from '../util/album_api_util'

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';


export const receiveAllArtists = albums => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  }
}

export const receiveArtist = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  }
}

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums().then(
    response => dispatch(receiveAllAlbums(response))
  )
}

export const fetchAlbum = album => dispatch => {
  return AlbumApiUtil.fetchAlbum(album).then(
    response => dispatch(receiveAlbum(response))
  )
}

export const createAlbum = album => dispatch => {
  return AlbumApiUtil.createAlbum(album).then(
    response => dispatch(receiveAlbum(response))
  )
}

export const updateAlbum = album => dispatch => {
  return AlbumApiUtil.createAlbum(album).then(
    response => dispatch(receiveAlbum(response))
  )
}