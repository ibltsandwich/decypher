import React from 'react';

export default ({loggedIn, currentUser, annotation}) => {
  return (
    <div className="annotation-container">
        <h1 className="annotation-header">Genius Annotation</h1>
        <p className="annotation-body">{annotation.body}</p>
        {currentUser.id === annotation.user_id ? 
          <button>Edit</button> :
          null}
    </div>
  )
}