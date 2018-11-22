import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';
import { withRouter } from 'react-router-dom';
import { createAnnotation } from '../../actions/annotation_actions';

const msp = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.session.currentUserId,
    slice: ownProps.slice
  }
}

const mdp = dispatch => {
  return {
    createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    updateSong: song => dispatch(updateSong(song))
  }
}

export default withRouter(connect(msp, mdp)(AnnotationForm))