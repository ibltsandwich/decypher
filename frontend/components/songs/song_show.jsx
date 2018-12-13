import React from 'react';
import AnnotationForm from '../annotations/annotation_form_container';
import { Route } from 'react-router-dom';
import AnnotationShow from '../annotations/annotation_show_container';
import AnnotatedLyric from './annotated_lyric';
import CommentForm from '../comments/comment_form_container';
import CommentsShow from '../comments/comments_show';

class SongShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0, 
                   buttonShow: false, 
                   annoFormShow: false, 
                   selected: "",
                   start_idx: 0, 
                   end_idx: 0,
                   start_line: 0,
                   start_end: 0
                 };
    this.annotatedLyrics = this.props.song.lyrics;
    this.handleHighlight = this.handleHighlight.bind(this);
    this.annotationFormShow = this.annotationFormShow.bind(this);
    this.closeAnnoForm = this.closeAnnoForm.bind(this);
    this.annotateLyrics = this.annotateLyrics.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSong(this.props.songId);
    this.highlightArea.addEventListener('click', this.handleHighlight)
    this.annotateLyrics();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.songId !== this.props.songId ||
      oldProps.song.lyrics !== this.props.song.lyrics ||
      oldProps.annotations.length !== this.props.annotations.length) {
        this.props.fetchSong(this.props.songId);
        this.annoForm.className = "annotation-form-hidden";
        this.forceUpdate();
      }
    if (oldProps.location.pathname !== this.props.location.pathname ||
      window.getSelection().toString() === "") {
        this.annoForm.className = "annotation-form-hidden";
    }
    this.annotateLyrics();
  }

  componentWillUnmount() {
    this.highlightArea.removeEventListener('click', this.handleHighlight)
  }

  closeAnnoForm() {
    if (window.getSelection().toString() === "") {
      this.setState({ annoFormShow: false, buttonShow: false });
      this.annoForm.className = "annotation-form-hidden";
      this.props.history.push(`/songs/${this.props.songId}`);
    }
  }

  handleHighlight(e) {
    this.props.history.push(`/songs/${this.props.song.id}`);
    this.setState({ buttonShow: false, annoFormShow: false })
    this.annoForm.className = "annotation-form-hidden"
    let breakout = false;
    if (window.getSelection().focusNode.parentNode.id === "" || window.getSelection().anchorNode.parentNode.id === "") {
      breakout = true;
    }
    if (breakout) {
      return null;
    } else {
      this.setState({ buttonShow: true })
      this.annoForm.className = "annotation-form-show"
    }
  }

  annotateLyrics() {
    if (this.props.song.lyrics) {
      this.annotatedLyrics = this.props.song.lyrics.split('\n').map((line, idx) => {
        if (line === "") {
          return (<div id={idx} key={`${idx}`} ref={(ref) => this[`line${idx}`] = ref}><br></br></div>)
        }
        return (<div id={idx} key={`${idx}`} ref={(ref) => this[`line${idx}`] = ref}>{line}</div>)
      })
    }
    if (document.getElementById("0") && this.props.annotations.length > 0) {
      const sortedAnno = this.props.annotations.slice(0).sort((a,b) => a.start_line - b.start_line)
      sortedAnno.forEach(anno => {
        let result;
        let lineSlice = [];
        this.annotatedLyrics.forEach((line, idx) => {
          if (parseInt(line.key) === anno.start_line) {
            lineSlice = this.annotatedLyrics.slice(idx, idx+(anno.end_line - anno.start_line)+1);
            return false;
          }
        })
        if (lineSlice.length > 0) {
          result = <AnnotatedLyric anno={anno}
                                    lineSlice={lineSlice}
                                    pathname={this.props.location.pathname}
                                    key={`anno${anno.id}`}/>
          this.annotatedLyrics.forEach((line, idx) => {
            if (parseInt(line.key) === anno.start_line) {
              this.annotatedLyrics.splice(idx, (anno.end_line - anno.start_line)+1, result);
              return false;
            }
          })
        }
      })
    }
  }
  
  annotationFormShow() {
    if (window.getSelection().focusNode) {
      let start_line, start_idx, end_line, end_idx;
      if ((window.getSelection().focusNode.parentNode.id === window.getSelection().anchorNode.parentNode.id &&
          window.getSelection().focusOffset > window.getSelection().anchorOffset) ||
          window.getSelection().focusNode.parentNode.id > window.getSelection().anchorNode.parentNode.id) {
        start_line = window.getSelection().anchorNode.parentNode.id;
        start_idx = window.getSelection().anchorOffset;
        end_line = window.getSelection().focusNode.parentNode.id;
        end_idx = window.getSelection().focusOffset;
      } else {
        end_line = window.getSelection().anchorNode.parentNode.id;
        end_idx = window.getSelection().anchorOffset;
        start_line = window.getSelection().focusNode.parentNode.id;
        start_idx = window.getSelection().focusOffset;
      }
      this.props.annotations.forEach(anno => {
        if (anno.end_line == start_line) {
          start_idx += anno.end_idx;
          end_idx += anno.end_idx;
        }
      })
      this.setState({ annoFormShow: true });
      this.setState({
        selected: window.getSelection().toString(),
        start_idx: start_idx, end_idx: end_idx, start_line: start_line, end_line: end_line
      });
    } else {
      this.setState({buttonShow: false})
    }
  }
  
  render () {
    const songHeaderContainer = {
      backgroundImage: `url(${this.props.song.photo_url})`,
    };
    const {song, artist, album, loggedIn, currentUser, openModal} = this.props;
    const tempTitle = song.title || "";

      return (
        <div onClick={this.closeAnnoForm}>
          {/* SONG HEADER */}
          <div className="song-header-container" style={songHeaderContainer}>
          
            <div className="song-header">
              {currentUser === song.user_id ? 
              <>
              <div className="owner-song-album-img-container">
                {song.photo_url ? <img src={song.photo_url}/> : <img src={window.emptyAlbum}/>}
              </div>
                <div className="edit-song-icon">
                    <i className="fas fa-pen-square"
                      onClick={() => dispatch(openModal('songImage'))}></i>
                </div> </>:
              <div className="song-album-img">
                {song.photo_url ? <img src={song.photo_url} /> : <img src={window.emptyAlbum} />}
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
              <div className="left-body" ref={elem => this.highlightArea = elem}>
                {/* {loggedIn ?
                  <div className='lyrics-header'>Edit Lyrics</div> : */}
                  <h3 className='lyrics-header'>{tempTitle.toUpperCase()} LYRICS </h3>
                  {/* } */}
                    <div className="song-lyrics">
                      {this.annotatedLyrics}
                      <div className="comments-container">
                        {loggedIn ? <CommentForm song={this.props.song}/> : null}
                        <div className="comments-show-container">
                          <CommentsShow song={this.props.song}/>
                        </div>
                      </div>
                    </div>
              </div>
              {/* RIGHT BODY */}
              <div className="right-body">
                <h1>Annotations and song info</h1>
                <div ref={elem => this.annoForm = elem} onClick={e => e.stopPropagation()} className="annotation-form-hidden">
                  {this.state.annoFormShow ? <AnnotationForm slice={this.state.selected}
                                                             start_idx={this.state.start_idx}
                                                             end_idx={this.state.end_idx}
                                                             start_line={this.state.start_line}
                                                             end_line={this.state.end_line}
                                                             song={song} /> :
                  <div className="button-container">
                    <div className="button-divider"/>
                    <button onClick={this.annotationFormShow} className="annotation-start">Start Annotation</button>
                  </div>}
                </div>
                <div ref={elem => this.annoShow = elem} className="anno-show">
                  <Route exact path="/songs/:songId/:annotationId" component={AnnotationShow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } 
}

export default SongShow;