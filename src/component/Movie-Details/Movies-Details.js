import React, { useState, useEffect } from 'react';
import yts from '../../api';
import { Link } from 'react-router-dom'

//assets
import ImdbIcon from '../../assets/imdb.svg';
import LikeIcon from '../../assets/like.svg';
import DownloadIcon from '../../assets/download.svg';
import ResIcon from '../../assets/size.svg';
import SizeIcon from '../../assets/folder.svg';
import LangIcon from '../../assets/speaker.svg';
import SeedsIcon from '../../assets/seeds.svg';
import PeersIcon from '../../assets/peers.svg';

const MoviesDeatils = ({ match }) => {
    const movie_id = match.params.id;
    const [movieDetail, setMovieDetail] = useState([]);
    const [genres, setGenres] = useState([]);
    const [specs, setSpecs] = useState([]);
    const [similarMovie, setSimilarMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const fetchMovieDetails = await yts.get(`api/v2/movie_details.json/`, {
                params: {
                    movie_id,
                },
            });

            const fetchSimilarMovies = await yts.get(`api/v2/movie_suggestions.json/`, {
                params: {
                    movie_id,
                },
            });

            setMovieDetail(fetchMovieDetails.data.data.movie);
            setGenres(fetchMovieDetails.data.data.movie.genres);
            setSpecs(fetchMovieDetails.data.data.movie.torrents);

            setSimilarMovies(fetchSimilarMovies.data.data.movies)
            setIsLoading(false);
        })();
    },[] )

    const circularLoading = isLoading && (
        <div className="loading-bg d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )

    //style
    const Style = {
        containerBg: {
            backgroundImage: `linear-gradient(to bottom,rgba(29,29,29,0.65) 0,rgba(29,29,29,.8) 100%), url(${movieDetail.background_image_original})`,
        },
    }

    return (
        <>
            {circularLoading}
            <div className="movie-details-container" style={Style.containerBg}>
                <div className="movie-main-details">
                    <div className="movie-poster-left">
                        <div className="main-movie-poster">
                            <img src={movieDetail.medium_cover_image} alt={movieDetail.slug} />
                        </div>
                    </div>
                    <div className="movie-details-middle">
                        <div className="movie-details-title">
                            <h1>{movieDetail.title}</h1>
                        </div>
                        <span className="break-line"></span>
                        <div className="movie-genres">
                            <h4>{movieDetail.year}</h4>
                            <h4>{genres.map((genre, i) => {
                                return (<i key={i}>{genre} /</i>);
                            })} </h4>
                        </div>

                        <div className="available-in">
                            <div>Available in:</div>
                            <div className="formats">
                                {
                                    specs.map((res, i) => {
                                        return <div key={i} className="available-format">{res.quality}</div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="ratings">

                            <div className="imdb-count ratings-counts">
                                <img src={ImdbIcon} className="imdb-icon" />
                                <span>{movieDetail.rating}</span>
                            </div>

                            <div className="like-count ratings-counts">
                                <img src={LikeIcon} className="rating-icon like-icon" />
                                <span>{movieDetail.like_count}</span>
                            </div>

                            <div className="like-count ratings-counts">
                                <img src={DownloadIcon} className="rating-icon download-icon" />
                                <span>{movieDetail.download_count}</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-specs">
                        <div className="tech-specs">
                            <h2>Tech specs</h2>
                            <div className="tech-specs-left-content">
                                {
                                    specs.map((spec, i) => {
                                        return (
                                            <div className="specs-box" key={i}>
                                                <div className="specs">
                                                    <div>
                                                        <img className="specs-img" src={ResIcon} alt="resoulation icon" />
                                                    </div>
                                                    <p className="specs-info">{spec.quality}</p>
                                                </div>

                                                <div className="specs">
                                                    <div>
                                                        <img className="specs-img" src={SizeIcon} alt="size icon" />
                                                    </div>
                                                    <p className="specs-info">{spec.size}</p>
                                                </div>

                                                <div className="specs">
                                                    <div>
                                                        <img className="specs-img" src={LangIcon} alt="language icon" />
                                                    </div>
                                                    <p className="specs-info">{movieDetail.language}</p>
                                                </div>
                                                <div className="specs">
                                                    <div>
                                                        <img className="specs-img" src={SeedsIcon} alt="seeds icon" />
                                                    </div>
                                                    <p className="specs-info">{spec.seeds}</p>
                                                </div>
                                                <div className="specs">
                                                    <div>
                                                        <img className="specs-img peers" src={PeersIcon} alt="peers icon" />
                                                    </div>
                                                    <p className="specs-info">{spec.peers}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                                <h2 className="dis-title">Discription </h2>
                                <p>{movieDetail.description_full}</p>
                                <div className="upload-date">
                                    <h3>Upload Date</h3>
                                    <p>{movieDetail.date_uploaded}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-trailer-video">
                    <div className="movie-trailer-grid">
                        <div>
                            <h2>Movie Trailer</h2>
                            <div className="trailer">
                                <iframe className="trailer-iframe" width="400px" height="315" src={`https://www.youtube.com/embed/${movieDetail.yt_trailer_code}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="similar-movies">
                            <div className="similar-movies-right-contents">
                                <h2>Similar Movies</h2>
                                <div className="similar-movies-right">
                                    {similarMovie.map((movie, i) => {
                                        return (
                                            <div key={i} className="similar-movie">
                                                <Link to={`/movie-details/${movie.id}`}>
                                                    <img src={movie.medium_cover_image} />
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoviesDeatils;
