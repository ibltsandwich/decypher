import React from 'react';
import AnnotationForm from '../annotations/annotation_form_container';
import { Route, Link } from 'react-router-dom';
import AnnotationShow from '../annotations/annotation_show_container';
import AnnotatedLyric from './annotated_lyric';
import SongCommentForm from '../comments/song_comment_form_container';
import SongCommentsShow from '../comments/song_comments_show';

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
    this.highlightArea.addEventListener('click', this.handleHighlight);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.songId !== this.props.songId ||
      oldProps.song.lyrics !== this.props.song.lyrics ||
      oldProps.annotations.length !== this.props.annotations.length) {
        this.props.fetchSong(this.props.songId);
        this.annoForm.className = "annotation-form-hidden";
    }
    if (oldProps.location.pathname !== this.props.location.pathname ||
      window.getSelection().toString() === "") {
        this.annoForm.className = "annotation-form-hidden";
        if (-this.songBody.getBoundingClientRect().top > 50) {
          this.annoShow.style.top = `${-this.songBody.getBoundingClientRect().top + 60}px`
        } else {
          this.annoShow.style.top = "0";
        }
    }
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
    if (window.getSelection().anchorNode){
      if (window.getSelection().anchorNode.nodeValue) {
        this.props.history.push(`/songs/${this.props.song.id}`);
        this.setState({ buttonShow: false, annoFormShow: false });
        this.annoForm.className = "annotation-form-hidden";
        if (window.getSelection().anchorNode.parentElement.offsetTop - 423 < 0) {
          this.annoForm.style.top = 0;
        } else {
          this.annoForm.style.top = `${window.getSelection().anchorNode.parentElement.offsetTop-423}px`
        }

        let breakout = false;
        this.props.annotations.forEach(anno => {
          const target = document.getElementById(`annotation${anno.id}`);
          if (window.getSelection().getRangeAt(0).intersectsNode(target) && target !== null) {
            breakout = true;
          }
        });

        if (breakout) {
          return null;
        } else {
          this.setState({ buttonShow: true });
          this.annoForm.className = "annotation-form-show";
        };
      };
    };
  };

  annotateLyrics() {
    if (this.props.song.lyrics) {
      this.annotatedLyrics = this.props.song.lyrics.split('\n').map((line, idx) => {
        if (line === "") {
          return (<div id={idx} key={`${idx}`} ref={(ref) => this[`line${idx}`] = ref}><br></br></div>)
        } else {
          return (<div id={idx} key={`${idx}`} ref={(ref) => this[`line${idx}`] = ref}>{line}</div>)
        };
      });
    };
    if (document.getElementById("0") && this.props.annotations.length > 0) {
      const sortedAnno = this.props.annotations.slice(0).sort((a,b) => a.start_line - b.start_line);

      sortedAnno.forEach(anno => {
        let result;
        let lineSlice = [];
        if (anno.song_id === this.props.song.id) {
          this.annotatedLyrics.forEach((line, idx) => {
            if (parseInt(line.key) === anno.start_line) {
              lineSlice = this.annotatedLyrics.slice(idx, idx+(anno.end_line - anno.start_line)+1);
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
              }
            });
          };
        };
      });
    };
  };
  
  annotationFormShow() {
    const { focusNode, anchorNode, anchorOffset, focusOffset, baseNode } = window.getSelection();

    if (focusNode) {
      let start_line, start_idx, end_line, end_idx;
      let valid = true;

      if ((focusNode.parentNode.id === anchorNode.parentNode.id &&
          focusOffset > anchorOffset) ||
          focusNode.parentNode.id > anchorNode.parentNode.id) {
        start_line = anchorNode.parentNode.id;
        start_idx = anchorOffset;
        end_line = focusNode.parentNode.id;
        end_idx = focusOffset;
      } else if ((focusOffset === anchorOffset && focusNode.parentNode.id === anchorNode.parentNode.id) ||
        focusNode.parentNode.id === "" || anchorNode.parentNode.id === "") {
        start_line = anchorNode.parentNode.id;
        start_idx = anchorOffset;
        end_line = focusNode.previousSibling.id;
        end_idx = baseNode.length;
      } else {
        end_line = anchorNode.parentNode.id;
        end_idx = anchorOffset;
        start_line = focusNode.parentNode.id;
        start_idx = focusOffset;
      }
      this.props.annotations.forEach(anno => {
        if (anno.end_line == start_line) {
          start_idx += anno.end_idx;
          end_idx += anno.end_idx;
        }
      })
      
      if (valid) {
        this.setState({ annoFormShow: true });
        this.setState({
          selected: window.getSelection().toString(),
          start_idx: start_idx, end_idx: end_idx, start_line: start_line, end_line: end_line
        });
      } else {
        this.closeAnnoForm();
        this.setState({ buttonShow: false });
      }
    } else {
      this.setState({ buttonShow: false });
    }
  }
  
  render () {
    this.annotateLyrics();
    let songHeaderContainer;
    if (this.props.song.photo_url) {
      songHeaderContainer = {
        backgroundImage: `url(${this.props.song.photo_url})`,
      };
    }
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
                {artist.name ? <Link to={`/artists/${artist.name[0]}/${artist.id}`} onClick={e => e.stopPropagation()} className="song-artist">{artist.name}</Link> : null}
                <h3 className="song-album">{album.title}</h3>
              </div>
            </div>
          </div>

          {/* SONG BODY */}
          <div className="song-body-container">
            <div className="song-body" ref={elem => this.songBody = elem}>
              {/* LEFT BODY */}
              <div className="left-body">
                {/* {loggedIn ?
                  <div className='lyrics-header'>Edit Lyrics</div> : */}
                  {/* } */}
                    <div className="song-lyrics">
                      <div className="lyrics-container">
                        <h3 className='lyrics-header'>{tempTitle.toUpperCase()} LYRICS </h3>
                          <div className="lyrics" ref={elem => this.highlightArea = elem}>
                            {this.annotatedLyrics}
                          </div>
                      </div>
                      <div className="comments-container">
                        {loggedIn ? <SongCommentForm song={this.props.song}/> : null}
                        {this.props.song.id ? <SongCommentsShow song={this.props.song}/> : null}
                      </div>
                    </div>
              </div>
              {/* RIGHT BODY */}
              <div className="right-body">
                <h1>Annotations and song info</h1>
                <div ref={elem => this.annoForm = elem} onClick={e => e.stopPropagation()} className="annotation-form-hidden">
                  {loggedIn ? this.state.annoFormShow ? <AnnotationForm slice={this.state.selected}
                                                             start_idx={this.state.start_idx}
                                                             end_idx={this.state.end_idx}
                                                             start_line={this.state.start_line}
                                                             end_line={this.state.end_line}
                                                             song={song} /> :
                  <div className="button-container">
                    <div className="button-divider"/>
                    <button onClick={this.annotationFormShow} className="annotation-start">Start Annotation</button>
                  </div> :
                  <div className="button-container">
                      <div className="button-divider" />
                    <button onClick={() => dispatch(openModal('login'))} className="annotation-start">Log In</button>
                  </div>
                }
                </div>
                <div ref={elem => this.annoShow = elem} className="anno-show" onClick={e => e.stopPropagation()}>
                  <Route exact path="/songs/:songId/:annotationId" component={AnnotationShow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
};

export default SongShow;