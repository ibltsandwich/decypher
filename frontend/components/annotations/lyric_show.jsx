import React from 'react';
import AnnotationForm from './annotation_form_container';

class LyricShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {buttonShow: false, annoFormShow: false, selected: "", start: 0, end: 0}
    this.handleHighlight = this.handleHighlight.bind(this)
    this.annotationFormShow = this.annotationFormShow.bind(this)
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

  componentWillUnmount () {
    this.anno.removeEventListener('click', this.handleHighlight)
  }

  handleHighlight(e) {
    this.setState({selected: window.getSelection()})
    this.setState({buttonShow: true})
    this.button.className = "annotation-form-show"
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
    this.setState({annoFormShow: true})
    this.setState({selected: window.getSelection().toString(), 
                    start: start, end: end})
    // this.anno.removeEventListener('click', this.handleHiglight)
    // this.props.createAnnotation({body: " ", start_idx: this.state.selection.})
    Object.freeze(this.state)
  }
  
  render() {
    return (
      <>
        <div ref={elem => this.anno = elem}>
          <div className="song-lyrics" dangerouslySetInnerHTML={{ __html: this.props.song.lyrics }} />
        </div>
        <div ref={elem => this.button = elem} className="annotation-form-hidden">
          {this.state.annoFormShow ? <AnnotationForm slice={this.state.selected} 
                                                     start={this.state.start} 
                                                     end={this.state.end}
                                                     song={this.props.song} /> :
            <button onClick={this.annotationFormShow}>Start Annotation</button>}
        </div>
      </>
    )
  }
}

export default LyricShow;