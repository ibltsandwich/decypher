import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {}
}

const mdp = dispatch => {
  return {}
}

export default connect(msp, mdp)(Navbar);