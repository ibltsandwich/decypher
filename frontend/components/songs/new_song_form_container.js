import { connect } from 'react-redux';
import NewSongForm from './new_song_form';
import { createSong } from '../../actions/song_actions';
import { fetchArtist, createArtist } from '../../actions/artist_actions';
import { fetchAlbum, createAlbum } from '../../actions/album_actions'

const msp = (state) => {
  return {
  }
}

const mdp = dispatch => {
  return {
    createSong: song => dispatch(createSong(song)),
    fetchArtist: artist => dispatch(fetchArtist(artist)),
    createArtist: artist => dispatch(createArtist(artist)),
    fetchAlbum: album => dispatch(fetchAlbum(album)),
    createAlbum: album => dispatch(createAlbum(album))
  }
}

export default connect(msp, mdp)(NewSongForm);
