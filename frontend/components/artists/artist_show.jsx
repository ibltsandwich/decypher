import React from 'react';
import { Link } from 'react-router-dom';


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bioShortened: true};
    this.openBio = this.openBio.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId).then(
      response => this.setState({artist: response.payload.artist})
    );
    this.props.fetchSongs(10, this.props.artistId).then(
      response => this.setState({songs: response.payload.songs})
    )
  };

  openBio(e) {
    e.preventDefault();
    this.setState({bioShortened: false})
  }
  
  render() {
    const color ={
      color: 'white'
    }
    if (this.state.artist) {
      let shortenedBio;
      let bio;
      bio = this.state.artist.bio.split("\n").map((paragraph, idx) => {
        if (paragraph.length > 0) {
          return <p key={idx}>{paragraph}</p>
        } else {
          return null;
        }
      })

      if (this.state.artist.bio.length > 325) {
        let shortened = this.state.artist.bio.slice(0,325).split("\n")
        shortenedBio = shortened.map((paragraph, idx) => {
          if (idx === shortened.length - 1) {
            return <p key={idx}>
                    {paragraph}...
                    <span key="10000" className="open-bio" onClick={this.openBio}> read more >></span>
                   </p>
          } else {
            return <p key={idx}>{paragraph}</p>
          }
        })
      };

      let songs;

      if (this.state.songs) {
        songs = Object.values(this.state.songs).map((song, idx) => {
           return <li key={idx}>
                    <Link to={`/songs/${song.id}`} className="artist-song-list-item">
                    <img className="artist-song-list-item-image" src={song.photo_url}></img>
                    <div className="artist-song-list-item-info">
                      <span className="artist-song-list-item-title">{song.title}</span>
                      <span className="artist-song-list-item-artist">{this.state.artist.name}</span>
                    </div>
                    </Link>
                  </li>
        });
      };

      return <div className="artist-show-container">
        <div className="artist-header-img" style={{ backgroundImage: `url(${this.state.artist.header_img})` }}>
          <div className="artist-header-container">
            <div className="artist-img-container">
              <div className="artist-img">
                <img className="artist-pic" src={this.state.artist.artist_img}/>
              </div>
            </div>
            <div className="artist-header-filler">
            </div>
          </div>
        </div>
        <div className="artist-body-container">
          <section className="artist-bio-info">
            <h1 className="artist-name">
              {this.state.artist.name}
            </h1>
            <div className="artist-bio" id="shortened" ref={elem => this.artistBio = elem}>
              <h3>
                About "{this.state.artist.name}"
              </h3>
              {this.state.bioShortened ? 
                shortenedBio
                : 
                bio}
            </div>
          </section>
          <section className="artist-song-info">
            <h1 className="artist-song-list-header">POPULAR {this.state.artist.name.toUpperCase()} SONGS</h1>
            <ul className="artist-song-list">
              {songs}
            </ul>
          </section>
        </div>
      </div>;
    } else {
      return null
    }
  }
}

export default ArtistShow;