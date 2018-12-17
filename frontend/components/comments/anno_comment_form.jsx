import React from 'react';

class AnnoCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", commentable_id: "", commentable_type: "Annotation" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleClick(e) {
    e.stopPropagation();
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, {commentable_id: this.props.anno.id})
    this.props.createAnnoComment(comment);
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="annotation-comment-form-container" onClick={this.handleClick}>
        <form className="annotation-comment-form" onSubmit={this.handleSubmit}>
          <textarea
            
            className="comment-form-text"
            onChange={this.update('body')}
            placeholder="Suggest an improvement"
            value={this.state.body}
            required />
          <button className="comment-submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AnnoCommentForm;