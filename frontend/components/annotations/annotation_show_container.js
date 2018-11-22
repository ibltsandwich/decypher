import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.session.currentUserId,
    annotation: state.entities.annotations[parseInt(ownProps.match.params.annotationId)],
    ownProps
  }
}

const mdp = dispatch => {
  return {

  }
}

export default withRouter(connect(msp, mdp)(AnnotationShow));