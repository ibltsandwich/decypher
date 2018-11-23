import TopSongs from './top_songs';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  let songs, artists;
  if (state.entities.songs) {
    songs = Object.values(state.entities.songs)
    artists = state.entities.artists
  }

  return {
    songs,
    artists
  }
}

const mdp = dispatch => {
  return {
    fetchSongs: (limit) => dispatch(fetchSongs(limit))
  }
}

export default connect(msp, mdp)(TopSongs)