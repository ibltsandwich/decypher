import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", commentable_id: "", commentable_type: "Song"}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value, commentable_id: this.props.song.id});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, { commentable_id: this.props.song.id })
    this.props.createSongComment(comment);
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
              className="comment-form-text"
              onChange={this.update('body')}
              placeholder="Add a comment"
              value={this.state.body}
              required />
          <button className="comment-submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;