import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
  const { songs, artists } = props;

  let lis;
  
  if (songs) {
    debugger
    lis = songs.map((song,idx) => {
      return (<li key={idx} id={`song-${idx}`}>
                <div className="list-number">{idx+1}</div>
                <img src={`${song.photo_url}`}></img>
                <Link to={`songs/${song.id}`}>
                  <div className="top-song-info">
                    <div className="top-song-title">{song.title}</div>
                    <div className="top-song-artist">{artists[song.artist_id].name}</div>
                  </div>
                </Link>
              </li>);
    });
  }

  return(
    <div className="top-song-container" >
      <h3 className="top-song-header" id="/#top-songs">TOP SONGS</h3>
      <div className="top-song-chart">
        <ul className="top-song-list">
          {lis}
        </ul>
      </div>
    </div>
  )
}
