import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            <Link className='text-decoration-none' to="/home">
                <h2 className='ms-3 text-danger '>Roast-Review</h2>
            </Link>
            <nav className='link-container'>
                <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blog">BLOGS</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;