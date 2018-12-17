import React from 'react';
import AnnoCommentForm from '../comments/anno_comment_form_container';
import AnnoCommentsShow from '../comments/anno_comments_show';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    const {loggedIn, currentUser, annotation, ownProps} = this.props;
    const annoLink = document.getElementById(`annotation${this.props.annotation.id}`)
    if (annotation) {
      return (
        <div className="annotation-show-container">
            <div className="annotation-show-divider"/>
            <div className="triangle-container">
              <div className="triangle-top"/>
              <div className="triangle-tip"/>
              <div className="triangle-bottom"/>
            </div>
            <div className="annotation-show-info">
              <h1 className="annotation-show-header">Decypher Annotation</h1>
              <p className="annotation-show-body">{annotation.body}</p>
              <div className="anno-comments-container">
                {loggedIn ? <AnnoCommentForm anno={this.props.annotation} /> : null}
                <div className="annotation-comments-show-container">
                  <AnnoCommentsShow anno={this.props.annotation} />
                </div>
              </div>
            </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}
export default AnnotationShow;