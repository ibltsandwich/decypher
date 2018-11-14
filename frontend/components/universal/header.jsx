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