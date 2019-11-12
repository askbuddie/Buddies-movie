import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        let { data: res } = await axios.get('https://yts.lt/api/v2/list_movies.json')
        setMovies(res.data.movies)
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setError('Opps! Something went wrong while fetching the data')
      }
    })()
  }, []);

  
  let errorMsg = error && <span>{error}</span>;
  let circularLoading = isLoading && (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  return (
    <>
      {console.log(movies)}
      <div className="container">
        <div className="row justify-content-center m-5">
          {errorMsg}
          {circularLoading}
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;