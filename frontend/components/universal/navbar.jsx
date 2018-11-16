import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="global-nav">
      <ul className="navbar-btns">
        <li><Link exact to="#top-songs">TOP SONGS</Link></li>
        {/* <li className="nav-divider">|</li>
        <li>ADD A SONG</li> */}
      </ul>
      <ul className="social-media">

      </ul>
    </div>
  )
}