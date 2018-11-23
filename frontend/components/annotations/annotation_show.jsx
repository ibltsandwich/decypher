import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  render () {
    const {loggedIn, currentUser, annotation, ownProps} = this.props;
    if (annotation) {
      return (
        <div className="annotation-show-container">
            <h1 className="annotation-show-header">Genius Annotation</h1>
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