import React from 'react';
import AnnotationForm from '../annotations/annotation_form_container';

class SongShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = { buttonShow: false, annoFormShow: false, selected: "", start: 0, end: 0};
    this.annotatedLyrics = [];
    this.handleHighlight = this.handleHighlight.bind(this);
    this.annotationFormShow = this.annotationFormShow.bind(this);
    this.closeAnnoForm = this.closeAnnoForm.bind(this);
    this.annotateLyrics = this.annotateLyrics.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(parseInt(this.props.match.params.songId))
    this.anno.addEventListener('click', this.handleHighlight)
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.songId !== this.props.match.params.songId ||
        oldProps.song.lyrics !== this.props.song.lyrics ||
        oldProps.match.params.songId !== this.props.match.params.songId ||
        oldProps.annotations.length !== this.props.annotations.length) {
      this.props.fetchSong(parseInt(this.props.match.params.songId));
    }
    if (oldProps.location.pathname !== this.props.location.pathname ||
        window.getSelection().toString() === "") {
      this.button.className = "annotation-form-hidden";
    }
  }

  componentWillUnmount() {
    this.anno.removeEventListener('click', this.handleHighlight)
  }

  closeAnnoForm() {
    if (window.getSelection().toString() === "") {
      this.setState({ annoFormShow: false, buttonShow: false })
      this.button.className = "annotation-form-hidden"
    }
  }

  handleHighlight(e) {
    let breakOut = false;
    let start, end;
    //start_date1 > :end_date2 OR end_date1 < :start_date2
    if (window.getSelection().focusOffset > window.getSelection().anchorOffset) {
      start = window.getSelection().anchorOffset;
      end = window.getSelection().focusOffset;
    } else {
      start = window.getSelection().focusOffset;
      end = window.getSelection().anchorOffset;
    }
    this.props.annotations.forEach(anno => {
      if (start > anno.end_idx || end < anno.start_idx) {
        null;
      } else {
        breakOut = true;
      }
    })
    if (breakOut) {
      return null;
    } else {
      this.setState({ buttonShow: true })
      this.button.className = "annotation-form-show"
    }
    this.setState({
      selected: window.getSelection().toString(),
      start: start, end: end
    });
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
    this.setState({ annoFormShow: true });
  }
  
  annotateLyrics() {
    const sortedAnno = this.props.annotations.sort((a, b) => a.start_idx - b.start_idx)
    const { lyrics } = this.props.song || "";
    debugger
    let currentIndex = 0;
    for (let i = 0; i < sortedAnno.length; i++) {
      this.annotatedLyrics.push(
        <span>{lyrics.slice(currentIndex, sortedAnno[i].start_idx)}
        <a className="annotated">{lyrics.slice(sortedAnno[i].start_idx, sortedAnno[i].end_idx)}</a></span>
      );
      currentIndex = sortedAnno[i].end_idx
    };
    this.annotatedLyrics.push(lyrics.slice(currentIndex))
    return this.annotatedLyrics;
  }
  
  render () {
    const songHeaderContainer = {
      backgroundImage: `url(${this.props.song.photo_url})`,
    };
    const {song, artist, album, loggedIn, currentUser, openModal} = this.props;
    const tempTitle = song.title || "";
    debugger
    // if (song.id) {
      return (
        <div onClick={this.closeAnnoForm}>
          {/* SONG HEADER */}
          <div className="song-header-container" style={songHeaderContainer}>
          
            <div className="song-header">
              {currentUser === song.user_id ? 
              <>
              <div className="owner-song-album-img-container">
                <img src={song.photo_url}></img>
              </div>
                <div className="edit-song-icon">
                    <i className="fas fa-pen-square"
                      onClick={() => dispatch(openModal('songImage'))}></i>
                </div> </>:
              <div className="song-album-img">
                <img src={song.photo_url}/>
              </div>}

              <div className="primary-song-info">
                <h1 className="song-title">{song.title}</h1>
                <h2 className="song-artist">{artist.name}</h2>
                <h3 className="song-album">{album.title}</h3>  
              </div>
            </div>
          </div>

          {/* SONG BODY */}
          <div className="song-body-container">
            <div className="song-body">
              {/* LEFT BODY */}
              <div className="left-body" ref={elem => this.anno = elem}>
                {loggedIn ?
                  <div className='lyrics-header'>Edit Lyrics</div> :
                  <h3 className='lyrics-header'>{tempTitle.toUpperCase()} LYRICS </h3>}
                <div className="song-lyrics">
                 {/* {test}
                  <p>{song.lyrics}</p> */}
                  {this.annotatedLyrics}
                </div>
              </div>
              {/* RIGHT BODY */}
              <div className="right-body">
                <h1>Annotations and song info</h1>
                <div ref={elem => this.button = elem} onClick={e => e.stopPropagation()} className="annotation-form-hidden">
                  {this.state.annoFormShow ? <AnnotationForm slice={this.state.selected}
                                                             start={this.state.start}
                                                             end={this.state.end}
                                                             song={song} /> :
                  <button onClick={this.annotationFormShow}>Start Annotation</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } 
    // else {
    //   return (
    //     <h1 ref={elem => this.anno = elem}>Loading...</h1>
    //   )
    // }
  // }
}

export default SongShow;