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
      <div>
        <div className="filler" >
          <h2><img src={window.geniusNews}></img></h2>
        </div>
        <TopSongs songs={this.props.songs} artists={this.props.artists}/>
      </div>
    )
  }
}

export default Home;