import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUpvote, updateUpvote, deleteUpvote } from '../../actions/upvote_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUserId
  }
}

const mdp = dispatch => {
  return {
    createUpvote: upvote => dispatch(createUpvote(upvote)),
    updateUpvote: upvote => dispatch(updateUpvote(upvote)),
    deleteUpvote: upvote => dispatch(deleteUpvote(upvote)),
  }
}


class SongComment extends React.Component {
  constructor(props) {
    super(props)
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.state = { voted: false, vote_id: null }
  }

  componentDidMount() {
    this.props.comment.upvotes.forEach(upvote => {
      if (upvote.user_id === this.props.currentUser) {
        this.setState({ voted: true, vote: upvote })
      }
    })
  }

  upvote(e) {
    if (this.state.voted) {
      this.props.updateUpvote({ id: this.state.vote.id, vote_type: "upvote"})
    } else {
      this.props.createUpvote({ vote_type: "upvote", upvoteable_type: "Comment", upvoteable_id: this.props.comment.id })
    }
  }

  downvote(e) {
    if (this.state.voted) {
      this.props.updateUpvote({ id: this.state.vote.id, vote_type: "downvote" })
    } else {
      this.props.createUpvote({ vote_type: "downvote", upvoteable_type: "Comment", upvoteable_id: this.props.comment.id })
    }
  }

  render() {
    let counter = 0;
    const { comment, timeAgo } = this.props;
    comment.upvotes.forEach(vote => {
      if (vote.vote_type === "upvote") {
        counter += 1;
      } else if (vote.vote_type === "downvote") {
        counter -= 1;
      }
    })

    if (this.state.voted) {
      this
    }

    return (
      <li className="comment">
        <div className="comment-info">
          <div className="comment-username">{comment.username}</div>
          <div className="comment-time-ago">{timeAgo}</div>
        </div>
        <div className="comment-body">{comment.body}</div>
        <div className="song-comment-upvote">
          <i className="far fa-thumbs-up thumbs-up" onClick={this.upvote} ref={elem => this.thumbsUp = elem} />
          {counter === 0 ? '   ' : `  +${counter}  `}
          <i className="far fa-thumbs-up thumbs-down" onClick={this.downvote} ref={elem => this.thumbsDown = elem}/>
        </div>
      </li>)
  }
}

export default connect(msp,mdp)(SongComment)