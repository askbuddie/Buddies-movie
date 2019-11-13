import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Movies from './component/Movies';
import Footer from './component/Footer';
import Navbar from './component/Nav-bar';

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
