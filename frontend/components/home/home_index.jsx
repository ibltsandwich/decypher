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

  render() {
    return (
      <div className="home-body">
        <div className="news">
          <div className="main-story">
          </div>
          {/* <img src={window.geniusNews}></img> */}
        </div>
        <TopSongs songs={this.props.songs} artists={this.props.artists}/>
      </div>
    )
  }
}

export default Home;