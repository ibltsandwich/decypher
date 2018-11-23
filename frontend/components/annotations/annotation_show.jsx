import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    const {loggedIn, currentUser, annotation, ownProps} = this.props;
    if (annotation) {
      return (
        <div className="annotation-show-container">
            <div className="annotation-show-divider"></div>
            <h1 className="annotation-show-header">Decypher Annotation</h1>
            <p className="annotation-show-body">{annotation.body}</p>
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