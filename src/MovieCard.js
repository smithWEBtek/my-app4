import React from 'react';
// import ReactDOM from 'react-dom';
 
class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img 
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
        <p>Playing in: {this.props.cities.join(', ')}</p>
      </div>
    );   
  };
}

MovieCard.defaultProps = {
  // poster: 'http://i.imgur.com/bJw8ndW.png'
  // poster: 'http://users/BradSmith/dev/react/my-app4/src/brad.png'
  poster: 'http://res.cloudinary.com/smithwebtek/image/upload/c_scale,h_223,w_223/v1492529256/misc/coding2.png'
}


 
export default MovieCard;