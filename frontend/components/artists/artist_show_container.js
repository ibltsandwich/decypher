import { connect } from 'react-redux'
import ArtistShow from './artist_show'
import { fetchArtist } from '../../actions/artist_actions';

const msp = (state, ownProps) => {
  return {
    artistId: ownProps.match.params.artistId
  };
}

const mdp = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };
}

export default connect(msp, mdp)(ArtistShow)
