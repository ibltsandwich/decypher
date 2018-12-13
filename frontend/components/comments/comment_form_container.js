import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createSongComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  return {
  }
}

const mdp = dispatch => {
  return {
    createSongComment: comment => dispatch(createSongComment(comment))
  }
}

export default withRouter(connect(msp, mdp)(CommentForm));