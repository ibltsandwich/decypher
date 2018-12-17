import { connect } from 'react-redux';
import AnnoCommentForm from './anno_comment_form';
import { createAnnoComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  return {
  }
}

const mdp = dispatch => {
  return {
    createAnnoComment: comment => dispatch(createAnnoComment(comment))
  }
}

export default withRouter(connect(msp, mdp)(AnnoCommentForm));