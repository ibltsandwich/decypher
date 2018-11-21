import React from 'react';
import LyricShow from '../annotations/lyric_show_container';

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
    const songHeaderContainer = {
      backgroundImage: `url(${this.props.song.photo_url})`,
    };
    const {song, artist, album, loggedIn, currentUser, openModal} = this.props;
    if (song.id) {
      return (
        <>
          <div className="song-header-container" style={songHeaderContainer}>
          
            <div className="song-header">
              {currentUser === song.user_id ? 
              <>
              <div className="owner-song-album-img-container">
                <img src={song.photo_url}></img>
              </div>
                <div className="edit-song-icon">
                    <i className="fas fa-pen-square"
                      onClick={() => dispatch(openModal('songImage'))}></i>
                </div> </>:
              <div className="song-album-img">
                <img src={song.photo_url}/>
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
                {/* <section className="song-lyrics"> */}
                  <LyricShow song={song}/>
                {/* </section> */}
              </div>
              <div className="right-body">
                <h1>Annotations and song info</h1>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default SongShow;