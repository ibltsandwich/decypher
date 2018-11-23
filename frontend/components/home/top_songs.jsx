import React from 'react';
import { Link } from 'react-router-dom';


class TopSongs extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSongs(10);
  }

  render() {
    let songs;
    if (this.props.songs) {
      songs = this.props.songs.map((song, idx) => {
        <li key={idx}><Link to={`/songs/${song.id}`}>{song.title}</Link></li>
      })
    }

    return(
      <div className = "top-song-container" >
        <h3 className="top-song-header" id="/#top-songs">TOP SONGS</h3>
        <div className="top-song-chart">
          <ul className="top-song-list">
            {songs}
          </ul>
        </div>
      </div>
    )
  }
}

export default TopSongs;