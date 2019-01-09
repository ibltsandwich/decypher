import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions'; 
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    letter: ownProps.match.params.artistLetter,
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
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchArtists(this.props.letter).then(response =>
      this.setState({artists: response.payload.artists}))
  }

  componentDidUpdate(oldProps) {
    if(oldProps.letter !== this.props.letter) {
      this.props.fetchArtists(this.props.letter).then(response =>
        this.setState({ artists: response.payload.artists }))
    }
  }

  render() {
    const color= {
      color: 'white'
    }

    let list;

    if (this.state.artists) {
      const artists = Object.values(this.state.artists);
      list = artists.map((artist, idx) => {
        return (
          <li key={idx}>
            <Link to={`/artists/${this.props.letter}/${artist.id}`}>{artist.name}</Link>
          </li>
        )
      })
    }
    return (
      <div className="artist-list-container">
        <h3 className="artist-list-nav">Artists > {this.props.letter.toUpperCase()}</h3>

        <h1 className="artist-list-header">{this.props.letter.toUpperCase()} Artists on Decypher</h1>
        <ul className="specified-artist-list">
          {list}
        </ul>
      </div>
    )
  }
}

export default connect(msp, mdp)(ArtistList);