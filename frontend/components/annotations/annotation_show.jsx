import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  render () {
    const {loggedIn, currentUser, annotation, ownProps} = this.props;
    debugger
    if (annotation) {
      return (
        <div className="annotation-container">
            <h1 className="annotation-header">Genius Annotation</h1>
            <p className="annotation-body">{annotation.body}</p>
        </div>
      )
    } else {
      return (
        <h1>HI</h1>
      )
    }
  }
}
export default AnnotationShow;