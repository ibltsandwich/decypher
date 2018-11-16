import * as LyricApiUtil from '../util/lyrics_api_util'

export const RECEIVE_LYRIC = 'RECEIVE_LYRIC';

export const receiveLyric = lyric => {
  return {
    type: RECEIVE_LYRIC,
    lyric
  }
}


export const fetchLyric = lyric => dispatch => {
  return LyricApiUtil.fetchLyric(lyric).then(
    response => dispatch(receiveLyric(response))
  )
}

export const createLyric = lyric => dispatch => {
  return LyricApiUtil.createLyric(lyric).then(
    response => dispatch(receiveLyric(response))
  )
}

export const updateLyric = lyric => dispatch => {
  return LyricApiUtil.createLyric(lyric).then(
    response => dispatch(receiveLyric(response))
  )
}