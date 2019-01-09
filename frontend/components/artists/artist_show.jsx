import React from 'react';


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const color ={
      color: 'white'
    }
    return (
      <h1 style={color}>This is the artist show page</h1>
    )
  }
}

export default ArtistShow;