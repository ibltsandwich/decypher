import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const list = alphabet.map((letter, idx) => {
    return (
      <li className='artist-letter' key={idx}>
        <Link to={`/artists/${letter}`} className='artist-letter-link'>{`${letter.toUpperCase()}`}</Link>
      </li>
    )
  })

  return (
    <div className="whole-footer">
      <footer className="footer-container">
        <ul className="footer-links">
          <li className="genius-logo"><a href="http://genius.com"><img src={window.geniusLogo} /></a></li>
          <li className="github-logo"><a href="https://github.com/ibltsandwich/decypher"><img src={window.githubLogo} /></a></li>
        </ul>
        <span>Created by Brian Lee</span>
      </footer>
      <footer className="secondary-footer-container">
        <span className="all-artist-list-label">ALL ARTISTS: </span>
        <ul className="all-artist-list">
          {list}
        </ul>
      </footer>
    </div>
  )
}