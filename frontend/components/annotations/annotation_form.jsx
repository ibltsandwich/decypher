import React from 'react';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", song_id: props.song.id, start_idx: 0, end_idx: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let start, end;
    const { song, slice } = this.props;
    if (slice.focusOffset > slice.anchorOffset) {
      start = slice.anchorOffset;
      end = slice.focusOffset;
    } else {
      start = slice.focusOffset;
      end = slice.anchorOffset;
    }
    this.setState({start_idx: start, end_idx: end})
    this.props.createAnnotation(this.state);
    const annotatedLyrics = song.lyrics.slice(0,start) +
      `<Link to="songs/${song.id}">${slice.toString()}</Link>` +
      song.lyrics.slice(end);
    this.props.updateSong({id: song.id, lyrics: annotatedLyrics});
  }

  render () {
    return (
      <div className="annotation-form-container">
        <form onSubmit={this.handleSubmit}>
            <textarea row="40" col="40" onChange={this.update('body')}/>
            <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}

export default AnnotationForm;