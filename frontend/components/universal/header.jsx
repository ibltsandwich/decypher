import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  let greeting;
  if (currentUser) {
    greeting = (
      <div>
        <span>{currentUser.username}</span>
        <span onClick={logout}>Log Out</span>
      </div>
    )
  } else {
    greeting = (
      <div>
        <span onClick={() => dispatch(openModal('signup'))}>SIGN UP</span>
        <span onClick={() => dispatch(openModal('login'))}>SIGN IN</span>
      </div>
    )
  }
  return(
    <div className="global-header">
      <input type="text" className="search-bar" placeholder="Search bar placeholder" />
      {/* <div className="search-icon"><img src='app/assets/images/search-icon.png' /></div> */}

      <h2>
        <Link to="/" className="logo">
          Decypher
        </Link>
      </h2>
      <div className="user-btns">
        {greeting}
      </div>
    </div>
  )
}