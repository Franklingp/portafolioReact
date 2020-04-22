import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/VectorBrand.png';

const Header = (props) => {
    return(
        <header className="navbar-custom">
            <div className="bg-success"></div>
            <nav className="navbar navbar-expand-md h-100">
                <span className="navbar-brand title">
                    <img src={logo} alt="logo" className="d-inline-block align-center logo"/>
                    Franklin Pimentel
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="/project" className="nav-link">Mis proyectos</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contactame</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link">Sobre mi</Link></li>
                        <li className="nav-item"><span className="nav-link">ES</span></li>
                        <li><span>.</span></li>
                        <li className="nav-item"><span className="nav-link">EN</span></li>
                    </ul>
                </div>
            </nav>
        </header>
    );

//     <a class="navbar-brand" href="#">
//     <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
//     Bootstrap
//   </a>
}

export default withRouter(Header);