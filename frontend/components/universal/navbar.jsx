import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({loggedIn}) => {
  return (
    <div className="global-nav">
      <ul className="navbar-btns">
        <li><Link to="#top-songs">TOP SONGS</Link></li>
        {loggedIn ? 
          (
          <>
            <li className="nav-divider">|</li>
            <li><Link to="/new">ADD A SONG</Link></li>
          </>
          ) : null 
        }
      </ul>
      <ul className="social-media">

      </ul>
    </div>
  )
}

const msp = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  }
}
export default connect(msp)(Navbar)