import React from 'react';
import imdb from '../assets/imdb.svg';

const MovieCard = ({ movie }) => (
  <div className="col-sm movies">
    <img className="movie-poster" src={movie.medium_cover_image} alt={movie.title} />
    <div className="movie-details">
      <h3 className="g">{movie.genres[0]}</h3>
      <h3 className="g">{movie.genres[1]}</h3>
      <h3 className="g">{movie.genres[2]}</h3>
      <h3 className="g">{movie.genres[3]}</h3>
      <div className="movie-details-btn">Movie Details</div>
    </div>
    <h3 className="movie-title">{movie.title + "(" + movie.year + ")"}</h3>
    <p className="movie-rating"><img className="imdb-logo" src={imdb} alt="movie ratings" /> {movie.rating}</p><br /><br />
  </div>
)

export default MovieCard;