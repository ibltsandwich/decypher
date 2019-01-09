import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';


export const receiveAllArtists = payload => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    payload
  }
}

export const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  }
}

export const fetchArtists = (letter) => dispatch => {
  return ArtistApiUtil.fetchArtists(letter).then(
    response => dispatch(receiveAllArtists(response))
  )
}

export const fetchArtist = id => dispatch => {
  return ArtistApiUtil.fetchArtist(id).then(
    response => dispatch(receiveArtist(response))
  )
}

export const createArtist = artist => dispatch => {
  return ArtistApiUtil.createArtist(artist).then(
    response => dispatch(receiveArtist(response))
  )
}

export const updateArtist = artist => dispatch => {
  return ArtistApiUtil.createArtist(artist).then(
    response => dispatch(receiveArtist(response))
  )
}