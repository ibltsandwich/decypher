import { connect } from 'react-redux';
import SongBody from './song_body';
import { fetchSong } from '../../actions/song_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import { createAnnotation } from '../../actions/annotation_actions';

const msp = (state, ownProps) => {
}

const mdp = dispatch => {
  return {
    fetchSong: id => dispatch(fetchSong(id)),
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    updateSong: song => dispatch(updateSong(song)),
    createAnnotation: annotation => dispatch(createAnnotation(annotation))
  }
}

export default withRouter(connect(null, mdp)(SongBody));