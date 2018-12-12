import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchComments(this.props.annotation.id);
  }

  render () {
    const {loggedIn, currentUser, annotation, ownProps} = this.props;
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