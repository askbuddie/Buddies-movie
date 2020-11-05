import React from 'react';
import SiteLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            <div className="container-fluid">
                <Link to='/'>
                    <img src={SiteLogo} alt='buddies movies logo' width='70px' />
                    <span className='site-title'>
                        Buddies <span>Movie</span>
                    </span>
                </Link>
            </div>

            {/* toggler is not required since there are no list items */}
        </nav>
    );
}

export default Navbar;
