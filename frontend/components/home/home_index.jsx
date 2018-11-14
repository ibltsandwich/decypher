import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
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
        <h3>Welcome to Decypher</h3>
        <Link to='/login'>Log In</Link>
        <br></br>
        or
        <br></br>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }
  return (
    <div>
      {greeting}
    </div>
  )
}