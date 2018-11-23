import TopSongs from './top_songs';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  return {}
}

const mdp = dispatch => {
  return {}
}

export default connect(msp, mdp)(TopSongs)