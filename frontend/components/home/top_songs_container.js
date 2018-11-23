import TopSongs from './top_songs';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  const songs = Object.values(state.entities.songs) || [];
  debugger
  return {
    songs
  }
}

const mdp = dispatch => {
  return {
    fetchSongs: (limit) => dispatch(fetchSongs(limit))
  }
}

export default connect(msp, mdp)(TopSongs)