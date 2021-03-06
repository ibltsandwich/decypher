import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  let headerUser;
  if (currentUser) {
    headerUser = (
      <div>
        <span>{currentUser.username}</span>
        <span onClick={logout}>Log Out</span>
      </div>
    )
  } else {
    headerUser = (
      <div>
        <span onClick={() => dispatch(openModal('signup'))}>SIGN UP</span>
        <span onClick={() => dispatch(openModal('login'))}>SIGN IN</span>
      </div>
    )
  }
  return(
    <div className="global-header">
      {/* <div type="text" className="search-bar" placeholder="Search bar placeholder" >
        Search coming soon
      </div> */}
      {/* <div className="search-icon"><img src={window.searchIcon} /></div> */}

      <h2>
        <Link to="/" className="logo">
          D E C Y P H E R
        </Link>
      </h2>
      <div className="user-btns">
        {headerUser}
      </div>
    </div>
  )
}