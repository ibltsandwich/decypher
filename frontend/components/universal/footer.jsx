import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div className="whole-footer">
      <footer className="footer-container">
        <ul className="footer-links">
          <li className="genius-logo"><a href="http://genius.com"><img src={window.geniusLogo} /></a></li>
          <li className="github-logo"><a href="https://github.com/ibltsandwich/decypher"><img src={window.githubLogo} /></a></li>
        </ul>
      </footer>
      <footer className="secondary-footer-container">
        <span>Created by Brian Lee</span>
      </footer>
    </div>
  )
}