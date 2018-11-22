import React from 'react';
import { Link } from 'react-router-dom';

const AnnotatedLyric = ({ lyric, anno, current_line }) => {
  let result;

  const handleClick = (e) => {
    // e.preventDefault();
  }

  if (anno.start_line === anno.end_line) {
    result = (
              <div>
                {lyric.slice(0, anno.start_idx)}
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                   onClick={handleClick}
                   className="annotation">
                  {lyric.slice(anno.start_idx, anno.end_idx)}
                </Link>
                {lyric.slice(anno.end_idx)}
              </div>
             )
  } else if (current_line === anno.start_line) {
    result = (
              <div>
                {lyric.slice(0, anno.start_idx)}
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                   onClick={handleClick}
                   className="annotation">
                  {lyric.slice(anno.start_idx)}
                </Link>
              </div>
             )
  } else if (current_line === anno.end_line) {
    result = (
              <div>
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                   onClick={handleClick}
                   className="annotation">
                  {lyric.slice(0, anno.end_idx)}
                </Link>
                {lyric.slice(anno.end_idx)}
              </div>
             )
  } else {
    result = (
              <div>
                <Link to={`/songs/${anno.song_id}/${anno.id}`}
                   onClick={handleClick}
                   className="annotation">
                  {lyric.slice(0)}
                </Link>
              </div>
             )
  }

  return (
    result
  )
}

export default AnnotatedLyric;