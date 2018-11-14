import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  let greeting;
  if (currentUser) {
    greeting = (
      <div>
        <h3>Hello {currentUser.username}</h3>
        <button onClick={logout}>Log Out</button>
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
    <div className="header">
      <Link to="/" className="logo">
        <h2>Decypher</h2>
      </Link>
      <div className="user-btns">
        {greeting}
      </div>
    </div>
  )
}