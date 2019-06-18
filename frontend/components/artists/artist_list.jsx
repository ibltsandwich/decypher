import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions'; 
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  let letter;
  if (ownProps.match.params.artistLetter === '0') {
    letter = '#';
  } else {
    letter = ownProps.match.params.artistLetter;
  }
  return {
    letter,
    artists: state.entities.artists
  }
}

const mdp = dispatch => {
  return {
    fetchArtists: (letter) => dispatch(fetchArtists(letter))
  }
}

class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchArtists(this.props.letter).then(response =>
      this.setState({ artists: response.payload.artists, loading: false }))
  }

  componentDidUpdate(oldProps) {
    if(oldProps.letter !== this.props.letter) {
      this.setState({ loading: true });
      this.props.fetchArtists(this.props.letter).then(response =>
        this.setState({ artists: response.payload.artists, loading: false }))
    };
  };

  render() {
    let list;

    if (this.state.artists) {
      const artists = Object.values(this.state.artists);

      list = artists.map((artist, idx) => {
        return (
          <li key={idx}>
            <Link to={`/artists/${artist.name[0]}/${artist.id}`}>{artist.name}</Link>
          </li>
        );
      });
    };

    return (
      <div className="artist-list-container">
        <h3 className="artist-list-nav">Artists > {this.props.letter.toUpperCase()}</h3>

        <h1 className="artist-list-header">{this.props.letter.toUpperCase()} Artists on Decypher</h1>
        <ul className="specified-artist-list">
          {!list && !this.state.loading ? <li key="1">There are no {this.props.letter.toUpperCase()} artists</li> : list}
        </ul>
      </div>
    );
  };
};

export default connect(msp, mdp)(ArtistList);