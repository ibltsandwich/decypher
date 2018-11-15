import React from 'react';
import { Link } from 'react-router-dom';
import TopSongs from './top_songs';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div>
      <TopSongs />
      <div className="filler">
      </div>
    </div>
  )
}