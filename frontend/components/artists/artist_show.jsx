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
    const color ={
      color: 'white'
    }
    if (this.state.artist) {
    return <div>
        <div className="artist-header-container">
          <div className="artist-img-container">
            <div className="artist-img" src={this.state.artist.artist_img}>
              <img className="artist-pic" src={this.state.artist.artist_img}/>
            </div>
          </div>
          <div className="artist-header-filler">
          </div>
        </div>
        <div className="artist-body-container">
          <section className="artist-bio-info">
            <h1 className="artist-name">
              {this.state.artist.name}
            </h1>
            <div className="artist-bio">
              <h3>
                About "{this.state.artist.name}"
              </h3>
              <p>{this.state.artist.bio}</p>
            </div>
          </section>
          <section className="artist-song-info">
            <h1>POPULAR {this.state.artist.name.toUpperCase()} SONGS</h1>
          </section>
        </div>
      </div>;
    } else {
      return null
    }
  }
}

export default ArtistShow;