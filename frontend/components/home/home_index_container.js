import HomeIndex from './home_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    songs: Object.values(state.entities.songs)
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
