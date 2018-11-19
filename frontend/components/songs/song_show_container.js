import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong } from '../../actions/song_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const songId = ownProps.match.params.songId;
  const song = state.entities.songs[songId] || {};
  const artist = state.entities.artists[song.artist_id] || "";
  const album = state.entities.albums[song.album_id] || "";
  return {
    song,
    artist,
    album,
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.session.currentUserId
  }
}

const mdp = dispatch => {
  return {
    fetchSong: id => dispatch(fetchSong(id)),
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(SongShow);