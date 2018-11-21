import React from 'react';
import AnnotationForm from '../annotations/annotation_form_container';

class SongBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonShow: false, annoFormShow: false, selected: "", start: 0, end: 0 };
    this.handleHighlight = this.handleHighlight.bind(this);
    this.annotationFormShow = this.annotationFormShow.bind(this);
    this.closeAnnoForm = this.closeAnnoForm.bind(this);
  }

  componentDidMount() {
    if (this.state.annoFormShow === false) {
      this.anno.addEventListener('click', this.handleHighlight)
    }
  }
  
  componentDidUpdate(oldProps) {
    if (oldProps.song.lyrics !== this.props.song.lyrics) {
      this.props.fetchSong(this.props.match.params.songId)
    }
  }
  
  componentWillUnmount() {
    this.anno.removeEventListener('click', this.handleHighlight)
  }

  handleHighlight(e) {
    this.setState({ selected: window.getSelection() })
    this.setState({ buttonShow: true })
    this.button.className = "annotation-form-show"
  }

  closeAnnoForm() {
    if (window.getSelection().toString() === "") {
      this.setState({ annoFormShow: false })
      this.button.className = "annotation-form-hidden"
    }
  }
  
  annotationFormShow() {
    let start, end;
    if (window.getSelection().focusOffset > window.getSelection().anchorOffset) {
      start = window.getSelection().anchorOffset;
      end = window.getSelection().focusOffset;
    } else {
      start = window.getSelection().focusOffset;
      end = window.getSelection().anchorOffset;
    }
    this.setState({ annoFormShow: true })
    this.setState({
      selected: window.getSelection().toString(),
      start: start, end: end
    })
  }

  render () {
    const { song, artist, album, loggedIn, currentUser, openModal } = this.props;
    return (
      <div className="song-body-container" onClick={this.closeAnnoForm}>
        <div className="song-body">
          <div className="left-body" ref={elem => this.anno = elem}>
            {loggedIn ?
              <div className='lyrics-header'>Edit Lyrics</div> :
              <h3 className='lyrics-header'>{song.title.toUpperCase()} LYRICS </h3>}
            <div className="song-lyrics">
              <p>{song.lyrics}</p>
            </div>
          </div>

          <div className="right-body">
            <h1>Annotations and song info</h1>
            <div ref={elem => this.button = elem} onClick={e => e.stopPropagation()} className="annotation-form-hidden">
                  {this.state.annoFormShow ? <AnnotationForm slice={this.state.selected}
                                                            start={this.state.start}
                                                            end={this.state.end}
                                                            song={this.props.song} /> :
                                                            <button onClick={this.annotationFormShow}>Start Annotation</button>}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongBody;