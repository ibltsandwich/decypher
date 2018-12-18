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
    this.commentSubmit.style.display = "inline-block";``
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
            ref={elem => this.commentForm = elem}
            onClick={this.handleClick}
            className="anno-comment-form-text"
            onChange={this.update('body')}
            placeholder="Suggest an improvement"
            value={this.state.body}
            required />
          <button className="annotation-comment-submit" ref={elem => this.commentSubmit = elem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AnnoCommentForm;