import React from 'react';
import { Link } from 'react-router-dom';
import TopSongs from './top_songs_container';


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
          <h2>Filler for other content</h2>
        </div>
        <TopSongs songs={this.props.songs}/>
      </div>
    )
  }
}

export default Home;