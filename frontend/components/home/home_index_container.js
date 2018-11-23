import HomeIndex from './home_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  let songs, artists;
  if (state.entities.songs) {
    songs = Object.values(state.entities.songs)
    artists = state.entities.artists
  }
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    songs,
    artists
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: limit => dispatch(fetchSongs(limit))
  }
}

export default connect(msp, mdp)(HomeIndex)
