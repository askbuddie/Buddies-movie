import React from 'react';
import './App.css'; //stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Nav-bar'; //Navbar
import Header from './component/Header'; //Header
import Movies from './component/Movies'; //Mani body (movies)
import Footer from './component/Footer'; //Footer

function App() {
    return (
        <div className="main">
            <Navbar />
            <Header />
            <div className="movie-list">
                <Movies />
            </div>
            <Footer />
        </div>
    );

}

export default App;