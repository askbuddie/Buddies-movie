import React from 'react';
import SiteLogo from '../../assets/logo.png';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
    return (
        <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                <Link to='/'>
                    <img
                        src={SiteLogo}
                        alt='buddies movies logo'
                        width='70px'
                    />
                    <span className='site-title'>
                        Buddies <span>Movie</span>
                    </span>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'></ul>
                    {/* <form className='form-inline'>
                        <input
                            className='form-control mr-sm-2'
                            type='search'
                            placeholder='Search'
                            aria-label='Search'
                        />
                        <button
                            className='btn btn-outline-success my-2 my-sm-0'
                            type='submit'
                        >
                            Search
                        </button>
                    </form> */}
                </div>
            </nav>
        </Router>
    );
}

export default Navbar;
