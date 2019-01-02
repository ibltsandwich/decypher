import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { createUpvote, updateUpvote, deleteUpvote } from '../../actions/upvote_actions';
// import { fetchSong } from '../../actions/song_actions';
import Upvotes from '../upvotes/upvotes';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUserId
  }
}

const mdp = dispatch => {
  return {
  }
}


class SongComment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { comment, timeAgo, currentUser } = this.props;
    if (timeAgo < 0) {
      timeAgo = 0;
    }
    return (
      <li className="comment">
        <div className="comment-info">
          <div className="comment-username">{comment.username}</div>
          <div className="comment-time-ago">{timeAgo}</div>
        </div>
        <div className="comment-body">{comment.body}</div>
        <div className="song-comment-upvote">
          <Upvotes type='Comment' target={comment} currentUser={currentUser}/>
        </div>
      </li>)
  }
}

export default connect(msp,mdp)(SongComment)