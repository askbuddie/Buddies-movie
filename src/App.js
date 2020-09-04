import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header/Header';
import Movies from './component/Movies';
import Footer from './component/Footer/Footer';
import Navbar from './component/Header/Nav-bar';
import MovieDetails from './component/Movie-Details/Movies-Details';

function App() {
    return (
        <div className='main'>
            <Router>
                <Navbar />
                <Route path='/' exact component={Header} />
                <div className='movie-list'>
                    <Route path='/' exact component={Movies} />
                </div>
                <Route path='/movie-details/:id' component={MovieDetails} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
