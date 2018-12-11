import React from 'react';
import { Link } from 'react-router-dom';

class AnnotatedLyric extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clicked: false}
    this.handleClick = this.handleClick.bind(this);
    this.hoverYellow = this.hoverYellow.bind(this);
    this.nonHover = this.nonHover.bind(this);
    this.fillLyrics = this.fillLyrics.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.pathname !== this.props.pathname) {
      this.setState({clicked: false});
      const link = document.getElementById(`annotation${this.props.anno.id}`);
      link.style.backgroundColor = "#e9e9e9";
    }
  }

  handleClick (e) {
    e.stopPropagation();
    this.setState({clicked: true})
    e.target.style.backgroundColor = "yellow";
    const a = Array.from(document.getElementsByClassName("annotation"));
    a.forEach(link => {
      if (link !== e.target) {
        link.style.backgroundColor = "#e9e9e9";
      }
    })
  }

  hoverYellow (e) {
    if (this.state.clicked === false) {
      e.target.style.backgroundColor = "yellow";
    }
  }

  nonHover (e) {
    if (this.state.clicked === false) {
      e.target.style.backgroundColor = "#e9e9e9"
    }
  }

  fillLyrics () {
    const {lineSlice, anno} = this.props;
    let result = "";
    for (let i = 0; i < lineSlice.length; i++) {
      const lyric = lineSlice[i].props.children;
      if (lyric) {
        if (i === 0) {
          result += lyric.slice(anno.start_idx);
        } else if (i === lineSlice.length - 1) {
          result += lyric.slice(0, anno.end_idx);
        } else {
          result += lyric;
        }
        result += '\n';
      } else {
        null;
      }
    }
    return result;
  }

  render() {
    let result;
    const {anno, lineSlice} = this.props;
    if (lineSlice.length === 1) {
      const lyric = lineSlice[0].props.children
      result = (
              <div key={lineSlice[0].key} id={lineSlice[0].key}>
                {lyric.slice(0, anno.start_idx)}
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                  onClick={this.handleClick}
                  className="annotation"
                  onMouseEnter={this.hoverYellow}
                  onMouseLeave={this.nonHover}
                  id={`annotation${anno.id}`}>
                  {lyric.slice(anno.start_idx, anno.end_idx)}
                </Link>
                {lyric.slice(anno.end_idx)}
              </div>
      )
    } else {
    result = (
              <div key={lineSlice[0].key} id={lineSlice[0].key}>
                {lineSlice[0].props.children.slice(0, anno.start_idx)}
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                  onClick={this.handleClick}
                  className="annotation"
                  onMouseEnter={this.hoverYellow}
                  onMouseLeave={this.nonHover}
                  id={`annotation${anno.id}`}>
                  {this.fillLyrics()}
                </Link>
                {lineSlice[lineSlice.length-1].props.children.slice(anno.end_idx)}
              </div>
      )
    }

    return (
      result
    )
  }
}

export default AnnotatedLyric;