import React from 'react';
import { Link } from 'react-router-dom';
import TopSongs from './top_songs';


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSongs(10);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.songs.length !== this.props.songs.length) {
      this.props.fetchSongs(10);
    }
  }

  render() {
    return (
      <div>
        <TopSongs songs={this.props.songs} artists={this.props.artists}/>
        <div className="filler" >
          <h2>Filler for other content</h2>
        </div>
      </div>
    )
  }
}

export default Home;