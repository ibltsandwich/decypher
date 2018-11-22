import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  debugger
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.session.currentUserId,
    annotation: state.entities.annotations[ownProps.match.params.annotationId],
    ownProps
  }
}

const mdp = dispatch => {
  return {

  }
}

export default withRouter(connect(msp, mdp)(AnnotationShow));