import { connect } from 'react-redux';
import SongImageForm from './song_img_form';
import { updateSong } from '../../actions/song_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  let songId = "";
  ownProps.location.pathname.split("").map(el => parseInt(el) || parseInt(el) === 0 ? songId += el : null)
  songId = parseInt(songId)
  return {
    song: state.entities.songs[songId]
  }
}

const mdp = dispatch => {
  return {
    updateSong: song => dispatch(updateSong(song)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(msp, mdp)(SongImageForm));