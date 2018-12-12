import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { withRouter } from 'react-router-dom'
import { fetchAnnoComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  console.log(state)
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId],
    annotation: state.entities.annotations[parseInt(ownProps.match.params.annotationId)],
    ownProps
  }
}

const mdp = dispatch => {
  return {
    fetchAnnoComments: id => dispatch(fetchAnnoComments(id))
  }
}

export default withRouter(connect(msp, mdp)(AnnotationShow));