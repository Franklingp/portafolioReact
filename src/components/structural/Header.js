import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <nav >
                <span>Franklin pimentel</span>
                <Link to="/project">Mis proyectos</Link>
                <Link to="/">Conoceme</Link>
                <Link to="/contact">Contactame</Link>
            </nav>
        </header>
    );
}

export default Header;