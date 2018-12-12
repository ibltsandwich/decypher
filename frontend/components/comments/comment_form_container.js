import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createSongComment } from '../../actions/comment_actions';

const msp = (state) => {
 return {}
}

const mdp = dispatch => {
  return {
    createSongComment: comment => dispatch(createSongComment(comment))
  }
}

export default connect(msp, mdp)(CommentForm);