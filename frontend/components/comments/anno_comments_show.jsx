import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Upvotes from '../upvotes/upvotes';

const msp = (state, ownProps) => {
  const comments = [];
  for (let comment in state.entities.comments) {
    if (state.entities.comments[comment].commentable_type === "Annotation" &&
      state.entities.comments[comment].commentable_id === ownProps.anno.id) {
      comments.push(state.entities.comments[comment])
    }
  }

  return {
    comments
  }
}

const mdp = dispatch => {
  return {
  }
}

class AnnoCommentsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props;
    let comments = this.props.comments.map((comment, idx) => {
      let timeAgo = "";
      let date = Date.now() - Date.parse(comment.created_at);
      let seconds = date / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60
      if (seconds < 60) {
        if (Math.floor(seconds) === 1) {
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
      } else {
        if (Math.floor(hours) === 1) {
          timeAgo = `${Math.floor(hours)} day ago`
        } else {
          timeAgo = `${Math.floor(hours)} days ago`
        }
      }

      return (
        <li key={idx} className="comment">
          <div className="comment-info">
            <div className="comment-username">{comment.username}</div>
            <div className="comment-time-ago">{timeAgo}</div>
          </div>
          <div className="comment-body">{comment.body}</div>
          <div className="anno-comment-upvote">
            <Upvotes type='Comment' target={comment} currentUser={currentUser.id} />
          </div>
        </li>)
    })

    return (
      <ul className="comments-list">
        {comments}
      </ul>
    )
  }
}

export default withRouter(connect(msp, mdp)(AnnoCommentsShow));