import React, { useState } from "react";
import R from './img/R.webp';
import { Link, useLocation } from 'react-router-dom';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="titleProb">
                <img src={R} alt="Task Tracking Logo" />
                <div className="titlePro">
                    Task<span className="text">Track</span>
                </div>
            </div>
            <div className="ul">
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className={isActive('/') ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={isActive('/task') ? 'active' : ''}>
                        <Link to="/task">Task</Link>
                    </li>
                    <li className={isActive('/calendar') ? 'active' : ''}>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                </ul>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
