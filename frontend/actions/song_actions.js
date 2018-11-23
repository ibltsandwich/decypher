import * as SongApiUtil from '../util/song_api_util'

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';


export const receiveAllSongs = payload => {
  return {
    type: RECEIVE_ALL_SONGS,
    payload
  }
}

export const receiveSong = payload => {
  return {
    type: RECEIVE_SONG,
    payload
  }
}

export const fetchSongs = (limit) => dispatch => {
  return SongApiUtil.fetchSongs(limit).then(
    response => dispatch(receiveAllSongs(response))
  )
}

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id).then(
    response => dispatch(receiveSong(response))
  )
}

export const createSong = song => dispatch => {
  return SongApiUtil.createSong(song).then(
    response => dispatch(receiveSong(response))
  )
}

export const updateSong = song => dispatch => {
  return SongApiUtil.updateSong(song).then(
    response => dispatch(receiveSong(response))
  )
}