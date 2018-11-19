import React from 'react';

class SongShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchSong(parseInt(this.props.match.params.songId))
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.songId !== this.props.match.params.songId) {
      this.props.fetchSong(parseInt(this.props.match.params.songId));
    }
  }
  
  render () {
    const {song, artist, album, loggedIn, currentUser} = this.props;
    return (
      <>
        <div className="song-header-container">
          <div className="song-header">
            {currentUser === song.user_id ? 
            <div className="owner-song-album-img">
              <div className="edit-song-icon">
                  <i className="fas fa-pen-square"></i>
              </div>
            </div> :
            <div className="song-album-img">
              <img />
            </div>}

            <div className="primary-song-info">
              <h1 className="song-title">{song.title}</h1>
              <h2 className="song-artist">{artist.name}</h2>
              <h3 className="song-album">{album.title}</h3>  
            </div>
          </div>
        </div>
        <div className="song-body-container">
          <div className="song-body">
            <div className="left-body">
              {loggedIn ? 
                <div className='lyrics-header'>Edit Lyrics</div> :
                <h3 className='lyrics-header'>{song.title.toUpperCase()} LYRICS </h3>}
              <section className="song-lyrics">
                <p>
                  {song.lyrics}
                </p>
              </section>
            </div>
            <div className="right-body">
              <h1>Annotations and song info</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SongShow;