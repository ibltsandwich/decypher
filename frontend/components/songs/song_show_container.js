import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, updateSong } from '../../actions/song_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnnotation } from '../../actions/annotation_actions';

const msp = (state, ownProps) => {
  const songId = ownProps.match.params.songId;
  const song = state.entities.songs[songId] || {};
  const artist = state.entities.artists[song.artist_id] || "";
  const album = state.entities.albums[song.album_id] || "";
  const annotations = state.entities.annotations || [];
  return {
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
    createAnnotation: annotation => dispatch(createAnnotation(annotation))
  }
}

export default connect(msp, mdp)(SongShow);