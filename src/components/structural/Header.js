import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    return(
        <header>
            <nav className="navbar">
                <span>Franklin pimentel</span>
                <Link to="/project" className="link">Mis proyectos</Link>
                <Link to="/" className="link">Conoceme</Link>
                <Link to="/contact" className="link">Contactame</Link>
                <span> ES </span>
                <span>.</span>
                <span> EN </span>
            </nav>
        </header>
    );
}

export default Header;