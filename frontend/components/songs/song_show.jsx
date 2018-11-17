import React from 'react';

class SongShow extends React.Component {
  constructor (props) {
    super(props);
    this.song = this.props.fetchSong(parseInt(this.props.match.params.songId))
    debugger
  }

  render () {
    debugger
    return (
      <>
        <div className="song-header">
          <h1>{this.song.name}</h1>
        </div>
        <div>
          <h2>FUCK</h2>
        </div>
      </>
    )
  }
}

export default SongShow;