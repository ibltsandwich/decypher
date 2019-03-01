import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchSongs } from '../../actions/song_actions';

const msp = (state, ownProps) => {
  return {
    artistId: ownProps.match.params.artistId
  };
}

const mdp = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchSongs: (limit, artistId) => dispatch(fetchSongs(limit, artistId)) 
  };
}

export default connect(msp, mdp)(ArtistShow)
