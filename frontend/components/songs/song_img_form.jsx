import React from 'react';

class SongImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: this.props.song.id,
                  title: this.props.song.title,
                  artist_id: this.props.song.artist_id,
                  album_id: this.props.song.album_id,
                  lyrics: this.props.song.lyrics,
                  photo_url: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update (field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }
  
  handleSubmit (e) {
    e.preventDefault();
    if (this.state.photo_url === "") {
      this.props.updateSong(this.props.song).then(this.props.closeModal)
    } else {
      this.props.updateSong(this.state).then(this.props.closeModal)
    }
  }

  render () {
    return (
      <div className="song-image-form-container">
        <form onSubmit={this.handleSubmit} className="session-form" id="from-header">
          <h1 className="song-image-form-header">SONG IMAGE URL</h1>
          <label className="song-art-url">SONG ART URL</label>
          <input type="text" className="song-img-form-input" onChange={this.update('photo_url')}></input>
          <button type="submit" className="song-img-submit">Save</button>
        </form>
      </div>
    )
  }
}

export default SongImageForm