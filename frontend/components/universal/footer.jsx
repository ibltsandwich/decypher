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
          <li className="portfolio-logo"><a href="http://www.brian-lee.me" target="_blank"><img src={window.portfolioLogo} /></a></li>
          <li className="github-logo"><a href="https://github.com/ibltsandwich/decypher" target="_blank"><img src={window.githubLogo} /></a></li>
          <li className="linkedin-logo"><a href="https://linkedin.com/in/brian-lee2" target="_blank"><img src={window.linkedinLogo} /></a></li>
          <li className="genius-logo"><a href="http://genius.com" target="_blank"><img src={window.geniusLogo} /></a></li>
        </ul>
        <span>Created by Brian Lee</span>
      </footer>
      <footer className="secondary-footer-container">
        <span className="all-artist-list-label">ALL ARTISTS: </span>
        <ul className="all-artist-list">
          {list}
          <li className='artist-letter' key='27'>
            <Link to='/artists/0' className='artist-letter-link'>#</Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}