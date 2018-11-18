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
      this.props.fetchSong(this.props.match.params.songId);
    } else if (this.props.song.artist_id && oldProps.artist === "") {
      this.props.fetchArtist(this.props.song.artist_id)
    } else if (this.props.song.album_id && oldProps.album === "") {
      this.props.fetchAlbum(this.props.song.album_id)
    }
  }
  
  render () {
    return (
      <>
        <div className="song-header">
          <h1 className="song-title">{this.props.song.title}</h1>
          <h2 className="song-artist">{this.props.artist.name}</h2>
          <h3 className="song-album">{this.props.album.title}</h3>
        </div>
        <div>
          <h2>{this.props.song.lyrics}</h2>
        </div>
      </>
    )
  }
}

export default SongShow;