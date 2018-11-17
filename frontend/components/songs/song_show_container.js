import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong } from '../../actions/song_actions';

const msp = (state, ownProps) => {
  return {
    song: state.entities.songs[ownProps.match.params.songId]
  }
}

const mdp = dispatch => {
  return {
    fetchSong: id => dispatch(fetchSong(id))
  }
}

export default connect(msp, mdp)(SongShow);