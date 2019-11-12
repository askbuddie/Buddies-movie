import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Nav-Bar';
import Header from './component/Header';
import Movies from './component/Movies';
import Footer from './component/Footer';

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