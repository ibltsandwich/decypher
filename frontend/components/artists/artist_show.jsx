import React from 'react';


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId).then(
      response => this.setState({artist: response.payload.artist})
    )
  }
  
  render() {
    console.log(this.state.artist)
    const color ={
      color: 'white'
    }
    return (
      <div className="song-header-container">
          <div className="song-album-img">

          </div>
        <h1 >This is the artist show page</h1>
        {this.state.artist ? 
        <h1>{this.state.artist.name}</h1> :
        null }
        <h1>COMING SOON</h1>
      </div>
    )
  }
}

export default ArtistShow;