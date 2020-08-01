import React, { useState, useEffect } from 'react';
import yts from '../api';
import MovieCard from './MovieCard';

import { withData, withError } from '../utils/common';

const fetchMovieList = async (page, limit) => {
    try {
        let { data: res } = await yts.get(`api/v2/list_movies.json/`, {
            params: {
                page,
                limit,
            },
        });
        console.log(res);
        return withData(res.data.movies);
    } catch (err) {
        console.log(err);

        return withError({
            message: 'Opps! Something went wrong while fetching the data',
        });
    }
};

const Movies = () => {
    const limit = 9;
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const { data, error } = await fetchMovieList(currentPage, limit);

            if (error) {
                console.log(error);
                setIsLoading(false);

                return setError(error.message);
            }

            setMovies((movies) => [...movies, ...data]);
            setIsLoading(false);
        })();
    }, [currentPage]);

    let errorMsg = error && <span>{error}</span>;
    let circularLoading = isLoading && (
        <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
        </div>
    );

    return (
        <>
            {console.log(movies)}
            <div className='container'>
                <div className='row justify-content-center m-5'>
                    {errorMsg}
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })}

                    <div className='col-md-12 m-0'>{circularLoading}</div>

                    {!isLoading && (
                        <div
                            className='cursor-pointer movie-details-btn'
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Show more movies
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Movies;
