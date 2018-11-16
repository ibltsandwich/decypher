import React from 'react';


class NewSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', artist: '', album: ''}
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createSong(this.state)
  }

  render() {
    return (
      <div className="whole-add-song-form">
        <div className='add-song-form-container'>
          <h1 className="add-song-header">Add Song</h1>
          <h2 className="primary-info-header">
            <span className="primary-info">Primary info</span>
            <span className="required-header">* required</span>
          </h2>
          <div className="header-divider"></div>
          <form className="primary-info-form" onSubmit={this.handleSubmit}>
            <span>BY*</span>
            <input type="text" 
                   onChange={this.update('artist')} 
                   placeholder="The primary artist, author, creator, etc." 
                   className="add-song-input"/>
            <span>TITLE*</span>
            <input type="text" 
                  onChange={this.update('title')} 
                  placeholder="Title" 
                  className="add-song-input"/>
            <span>LYRICS*</span>
            <textarea rows="10" col="100"></textarea>
            <input className="add-song-submit" type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    )
  }

}

export default NewSongForm;