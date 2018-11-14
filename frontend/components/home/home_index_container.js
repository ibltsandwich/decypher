import HomeIndex from './home_index'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.currentUserId]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(HomeIndex)
