import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createComment
  }

  render() {
    return (
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text"
              className="comment-text"
              onChange={this.update('body')}
              placeholder="Add a comment"
              required />
          <button className="comment-submit">Submit</button>
        </form>
      </div>
    );
  }
}