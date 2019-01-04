import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteSongComment } from '../../actions/comment_actions';
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
    deleteSongComment: comment => dispatch(deleteSongComment(comment))
  }
}


class SongComment extends React.Component {
  constructor(props) {
    super(props)
    this.showMenu = this.showMenu.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  showMenu(e) {
    e.stopPropagation();
    this.dropDown.hidden = !this.dropDown.hidden;
  }

  deleteComment(e) {
    this.dropDown.hidden = true;
    this.props.deleteSongComment(this.props.comment);
  }

  render() {
    const { comment, currentUser, deleteSongComment } = this.props;
    let timeAgo = "";
    let date = Date.now() - Date.parse(comment.created_at);
    let seconds = date / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let months = days / 30;
    if (seconds < 60) {
      if (Math.floor(seconds) < 0) {
        timeAgo = `0 seconds ago`
      } else if (Math.floor(seconds) === 1) {
        timeAgo = `${Math.floor(seconds)} second ago`
      } else {
        timeAgo = `${Math.floor(seconds)} seconds ago`
      }
    } else if (minutes < 60) {
      if (Math.floor(minutes) === 1) {
        timeAgo = `${Math.floor(minutes)} minute ago`
      } else {
        timeAgo = `${Math.floor(minutes)} minutes ago`
      }
    } else if (hours < 24) {
      if (Math.floor(hours) === 1) {
        timeAgo = `${Math.floor(hours)} hour ago`
      } else {
        timeAgo = `${Math.floor(hours)} hours ago`
      }
    } else if (days < 30) {
      if (Math.floor(days) === 1) {
        timeAgo = `${Math.floor(days)} day ago`
      } else {
        timeAgo = `${Math.floor(days)} days ago`
      }
    } else {
      if (Math.floor(months) === 1) {
        timeAgo = `${Math.floor(months)} month ago`
      } else {
        timeAgo = `${Math.floor(months)} months ago`
      }
    }

    if (timeAgo < 0) {
      timeAgo = 0;
    }

    console.log(timeAgo);

    return (
      <li className="comment">
        <div className="comment-info">
          <div className="comment-username">{comment.username}</div>
          <div className="comment-time-ago">{timeAgo}</div>
        </div>
        <div className="comment-body">{comment.body}</div>
        <div className="comment-foot">
          <div className="song-comment-upvote">
            <Upvotes type='Comment' target={comment} currentUser={currentUser}/>
          </div>
          { currentUser === comment.user_id ?
            <div ref={elem => this.dropContainer = elem}>
              <button onClick={this.showMenu} className="comment-dropdown"><i className="fas fa-angle-down"></i></button>
              <span className="comment-delete" hidden ref={elem => this.dropDown = elem} onClick={this.deleteComment}>Delete</span>
            </div> : null
          }
        </div>
      </li>)
  }
}

export default connect(msp,mdp)(SongComment)