import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUpvote, updateUpvote, deleteUpvote } from '../../actions/upvote_actions';
import { fetchSong } from '../../actions/song_actions';

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
    fetchSong: id => dispatch(fetchSong(id)),
  }
}


class SongComment extends React.Component {
  constructor(props) {
    super(props)
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.state = { voted: false, vote: null }
  }

  componentDidMount() {
    if (this.props.comment.upvotes) {
      Object.values(this.props.comment.upvotes).forEach(upvote => {
        if (upvote.user_id === this.props.currentUser) {
          this.setState({ voted: true, vote: upvote })
        }
      })
    }
  }

  // componentDidUpdate(oldProps) {
  //   if (this.state.vote.upvoteable_id === this.props.comment.id) {
  //     if (oldProps.comment.upvotes[this.state.vote.id].length !== this.props.comment.upvotes[this.state.vote.id].length) {
  //       this.forceUpdate();
  //     }
  //   }
  // }

  componentDidUpdate() {

  }

  upvote(e) {
    debugger
    if (this.state.voted && this.state.vote.vote_type === "downvote") {
      this.props.updateUpvote({ id: this.state.vote.id, vote_type: "upvote"}).then(
        response => this.setState({ vote: response.payload.upvotes })
      )
      this.thumbsDown.style.color = "black";
      this.thumbsUp.style.color = "lightgreen";
    } else if (this.state.voted && this.state.vote.vote_type === "upvote") {
      this.props.deleteUpvote(this.state.vote).then(
        response => this.setState({ voted: false, vote: null })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "black";
    } else {
      this.props.createUpvote({ vote_type: "upvote", upvoteable_type: "Comment", upvoteable_id: this.props.comment.id }).then(
        response => this.setState({ voted: true, vote: response.payload.upvotes })
      )
      this.thumbsDown.style.color = "black";
      this.thumbsUp.style.color = "lightgreen";
    }
  }

  downvote(e) {
    if (this.state.voted && this.state.vote.vote_type === "upvote") {
      this.props.updateUpvote({ id: this.state.vote.id, vote_type: "downvote" }).then(
        response => this.setState({ vote: response.payload.upvotes })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "red";
    } else if (this.state.voted && this.state.vote.vote_type === "downvote") {
      this.props.deleteUpvote(this.state.vote).then(
        () => this.setState({ voted: false, vote: null })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "black";
    } else {
      this.props.createUpvote({ vote_type: "downvote", upvoteable_type: "Comment", upvoteable_id: this.props.comment.id }).then(
        response => this.setState({ voted: true, vote: response.payload.upvotes })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "red";
    }
  }

  render() {
    let counter = 0;
    const { comment, timeAgo } = this.props;
    if (comment.upvotes) {
      Object.values(comment.upvotes).forEach(vote => {
        if (vote.vote_type === "upvote") {
          counter += 1;
        } else if (vote.vote_type === "downvote") {
          counter -= 1;
        }
      })
    }

    if (this.state.voted) {
      if (this.state.voted && this.state.vote.vote_type === "upvote") {
        this.thumbsUp.style.color = 'lightgreen';
        this.thumbsDown.style.color = 'black';
      } else if (this.state.voted && this.state.vote.vote_type === "downvote") {
        this.thumbsDown.style.color = 'red';
        this.thumbsUp.style.color = 'black';
      } else if (this.state.voted === false) {
        this.thumbsUp.style.color = 'black';
        this.thumbsDown.style.color = 'black';
      }
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
          {counter === 0 ? '   ' : counter > 0 ? `  +${counter}  ` : `  ${counter}  `}
          <i className="far fa-thumbs-up thumbs-down" onClick={this.downvote} ref={elem => this.thumbsDown = elem}/>
        </div>
      </li>)
  }
}

export default connect(msp,mdp)(SongComment)