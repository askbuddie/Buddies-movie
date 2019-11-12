import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import imdb from './assets/imdb.svg';


class Movies extends React.Component {
    state = {
        movies: []
    };

    getmovies = () => {
        axios.get('https://yts.lt/api/v2/list_movies.json').then(movies => this.setState({ movies: movies.data.data.movies })).catch(err => console.log(err));
    }
    componentDidMount() {
        this.getmovies();
    }
    render() {
        console.log(this.state.movies)
        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.state.movies.map((movies) => {
                            return (
                                <div className="col-sm movies">
                                    <img className="movie-poster" src={movies.medium_cover_image} alt={movies.title} />
                                    <div className="movie-details">
                                        <h3 className="g">{movies.genres[0]}</h3>
                                        <h3 className="g">{movies.genres[1]}</h3>
                                        <h3 className="g">{movies.genres[2]}</h3>
                                        <h3 className="g">{movies.genres[3]}</h3>
                                        <div className="movie-details-btn">Movie Details</div>
                                    </div>
                                    <h3 className="movie-title">{movies.title + "(" + movies.year + ")"}</h3>
                                    <p className="movie-rating"><img className="imdb-logo" src={imdb} alt="movie ratings" /> {movies.rating}</p><br /><br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;