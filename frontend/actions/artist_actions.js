import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';


export const receiveAllArtists = artists => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  }
}

export const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
  }
}

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists().then(
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