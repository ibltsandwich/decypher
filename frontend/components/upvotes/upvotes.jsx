import React from 'react';
import { connect } from 'react-redux';
import { createUpvote, updateUpvote, deleteUpvote } from '../../actions/upvote_actions';


const msp = (state, ownProps) => {
  return {

  }
}

const mdp = (dispatch) => {
  return {
    createUpvote: upvote => dispatch(createUpvote(upvote)),
    updateUpvote: upvote => dispatch(updateUpvote(upvote)),
    deleteUpvote: upvote => dispatch(deleteUpvote(upvote)),
  }
}

class Upvotes extends React.Component {
  constructor (props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.state = { voted: false, vote: null }
  }

  componentDidMount () {
    if (this.props.target) {
      if (this.props.target.upvotes) {
        Object.values(this.props.target.upvotes).forEach(upvote => {
          if (upvote.user_id === this.props.currentUser) {
            this.setState({ voted: true, vote: upvote });
          }
        })
      }
    }
  }

  upvote(e) {
    if (this.state.voted && this.state.vote.vote_type === "downvote") {
      this.props.updateUpvote({ id: this.state.vote.id, vote_type: "upvote" }).then(
        response => this.setState({ vote: response.payload.upvotes })
      )
      this.thumbsDown.style.color = "black";
      this.thumbsUp.style.color = "lightgreen";
    } else if (this.state.voted && this.state.vote.vote_type === "upvote") {
      this.props.deleteUpvote(this.state.vote).then(
        () => this.setState({ voted: false, vote: null })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "black";
    } else {
      this.props.createUpvote({ vote_type: "upvote", upvoteable_type: this.props.type, upvoteable_id: this.props.target.id }).then(
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
      this.props.createUpvote({ vote_type: "downvote", upvoteable_type: this.props.type, upvoteable_id: this.props.target.id }).then(
        response => this.setState({ voted: true, vote: response.payload.upvotes })
      )
      this.thumbsUp.style.color = "black";
      this.thumbsDown.style.color = "red";
    }
  }

  render () {
    let counter = 0;
    if (this.props.target) {
      const { target } = this.props;
      if (target.upvotes) {
        Object.values(target.upvotes).forEach(vote => {
          if (vote.vote_type === "upvote") {
            counter += 1;
          } else if (vote.vote_type === "downvote") {
            counter -= 1;
          }
        })
      }
    }

    if (this.state.voted) {
      if (this.state.voted && this.state.vote.vote_type === "upvote") {
        this.thumbsUp.style.color = 'lightgreen';
        this.thumbsDown.style.color = 'black';
      } else if (this.state.voted && this.state.vote.vote_type === "downvote") {
        this.thumbsDown.style.color = 'red';
        this.thumbsUp.style.color = 'black';
      }
    } else if (this.thumbsUp && this.thumbsDown) {
      this.thumbsUp.style.color = 'black';
      this.thumbsDown.style.color = 'black';
    }

    return (
      <>
        <i className="far fa-thumbs-up thumbs-up" onClick={this.upvote} ref={elem => this.thumbsUp = elem} />
        { counter === 0 ? '   ' : counter > 0 ? `  +${counter}  ` : `  ${counter}  ` }
        <i className="far fa-thumbs-up thumbs-down" onClick={this.downvote} ref={elem => this.thumbsDown = elem} />
      </>
    )
  }

}

export default connect(msp, mdp)(Upvotes);