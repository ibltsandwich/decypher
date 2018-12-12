import React from 'react';

class NewSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', artist_id: '', lyrics: '', album_id: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createSong(this.state).then(
        response => this.props.history.push(`songs/${response.payload.songs[Object.keys(response.payload.songs)[0]].id}`)
    )
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
          <form className="primary-info-form" onSubmit={this.handleSubmit}>
              <div className="primary-info-div">
                <span>BY*</span>
                <input type="text"
                      onChange={this.update('artist_id')}
                      placeholder="The primary artist, author, creator, etc."
                      className="add-song-input"
                      required	/>
                <span>TITLE*</span>
                <input type="text"
                      onChange={this.update('title')}
                      placeholder="Title"
                      className="add-song-input"
                      required	/>
                <span>LYRICS*</span>
                <textarea
                      className="add-lyrics"
                      rows="20" col="40"
                      onChange={this.update('lyrics')}
                      required	/>
              </div>
              <div className="submit-divider"></div>
              <button className="add-song-submit" type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
  }

}

export default NewSongForm;