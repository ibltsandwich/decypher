import * as SongApiUtil from '../util/song_api_util'

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';


export const receiveAllSongs = albums => {
  return {
    type: RECEIVE_ALL_SONGS,
    albums
  }
}

export const receiveSong = album => {
  return {
    type: RECEIVE_SONG,
    album
  }
}

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs().then(
    response => dispatch(receiveAllSongs(response))
  )
}

export const fetchSong = album => dispatch => {
  return SongApiUtil.fetchSong(album).then(
    response => dispatch(receiveSong(response))
  )
}

export const createSong = album => dispatch => {
  return SongApiUtil.createSong(album).then(
    response => dispatch(receiveSong(response))
  )
}

export const updateSong = album => dispatch => {
  return SongApiUtil.createSong(album).then(
    response => dispatch(receiveSong(response))
  )
}