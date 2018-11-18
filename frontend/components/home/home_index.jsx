import React from 'react';
import { Link } from 'react-router-dom';
import TopSongs from './top_songs';

export default ({ currentUser, logout, openModal }) => {
  return (
    <div>
      <div className="filler" >
      <h2>Filler for other content</h2>
      </div>
      <TopSongs />
      
    </div>
  )
}