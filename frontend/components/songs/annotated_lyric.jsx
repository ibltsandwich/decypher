import React from 'react';
import { Link } from 'react-router-dom';

const AnnotatedLyric = props => {
  const fillLyrics = () => {
    const {lineSlice, anno} = props;
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

  let result;
  const {anno, lineSlice} = props;
  if (lineSlice.length === 1) {
    const lyric = lineSlice[0].props.children
    result = (
            <div key={lineSlice[0].key} id={lineSlice[0].key}>
              {lyric.slice(0, anno.start_idx)}
              <Link to={`/songs/${anno.song_id}/${anno.id}`}
                onClick={e => e.stopPropagation()}
                className="annotation"
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
                onClick={e => e.stopPropagation()}
                className="annotation"
                id={`annotation${anno.id}`}>
                {fillLyrics()}
              </Link>
              {lineSlice[lineSlice.length-1].props.children.slice(anno.end_idx)}
            </div>
    )
  }

  return (
    result
  );
}

export default AnnotatedLyric;