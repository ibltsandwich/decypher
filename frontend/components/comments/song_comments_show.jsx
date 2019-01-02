import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongComment from './song_comment_list_item';

const msp = (state, ownProps) => {
  const comments = [];
  for (let comment in state.entities.comments) {
    if(state.entities.comments[comment].commentable_type === "Song" && 
       state.entities.comments[comment].commentable_id === ownProps.song.id) {
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

class SongCommentsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let comments = this.props.comments.map((comment,idx) => {
      return (
        <SongComment comment={comment} key={idx}/>
      )
    })

    if (this.props.comments.length > 0) {
      return (
        <div className="comments-show-container">
          <ul className="comments-list">
            {comments}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default withRouter(connect(msp, mdp)(SongCommentsShow));