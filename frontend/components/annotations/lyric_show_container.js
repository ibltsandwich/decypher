import { connect } from 'react-redux';
import LyricShow from './lyric_show';
import { updateSong, fetchSong } from '../../actions/song_actions';
import { withRouter } from 'react-router-dom'
import { createAnnotation } from '../../actions/annotation_actions';

const mdp = dispatch => {
  return {
    updateSong: song => dispatch(updateSong(song)),
    fetchSong: id => dispatch(fetchSong(id)),
    createAnnotation: annotation => dispatch(createAnnotation(annotation))
  }
}

export default withRouter(connect(null, mdp)(LyricShow));