import React from 'react';


class SongForm extends React.Component {
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
    const title = this.state.title
    const artist = this.state.artist
    const newSong = {title: this.state.title, artist:}
    this.props.createSong(this.state)
  }
}

export default SongForm;