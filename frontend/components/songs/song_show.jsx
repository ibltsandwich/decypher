import React from 'react';

class SongShow extends React.Component {
  constructor (props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.fetchSong(parseInt(this.props.match.params.songId))
  }

  render () {
    debugger
    return (
      <>
        <div className="song-header">
          <h1 className="song-title">{this.props.song.title}</h1>
        </div>
        <div>
          <h2>FUCK</h2>
        </div>
      </>
    )
  }
}

export default SongShow;