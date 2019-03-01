import { connect } from 'react-redux';
import SongShow from './song_show';
import { withRouter } from 'react-router-dom';
import { fetchSong, updateSong } from '../../actions/song_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnnotation } from '../../actions/annotation_actions';
import { fetchSongComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  const songId = ownProps.match.params.songId;
  const song = state.entities.songs[songId] || {};
  const artist = state.entities.artists[song.artist_id] || "";
  const album = state.entities.albums[song.album_id] || "";
  const annotations = Object.values(state.entities.annotations) || [];
  return {
    songId,
    song,
    artist,
    album,
    annotations,
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.session.currentUserId
  }
}

const mdp = dispatch => {
  return {
    fetchSong: id => dispatch(fetchSong(id)),
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    openModal: modal => dispatch(openModal(modal)),
    updateSong: song => dispatch(updateSong(song)),
    createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    fetchSongComments: id => dispatch(fetchSongComments(id))
  }
}

export default withRouter(connect(msp, mdp)(SongShow));