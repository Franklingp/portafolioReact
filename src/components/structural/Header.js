import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css'
import logoLigth from '../../assets/VectorBrand.png';
import logoDark from '../../assets/VectorBrandDark.png';

const Header = (props) => {
    const [title, setTitle] = useState("#ffffff");
    const [item, setItem] = useState("#212224");
    const [logo, setLogo] = useState(logoLigth);

    const path = props.location.pathname;

    useEffect(() => {
        switch(path){
            case "/project":
                setLogo(logoLigth);
                setTitle("#ffffff");
                setItem("#ffffff");
                break;
            case "/contact":
                setLogo(logoDark);
                setTitle("#212224");
                setItem("#ffffff");
                break;
            default:
                setLogo(logoLigth);
                setTitle("#ffffff");
                setItem("#212224");
        }
    },[path]);

    return(
        <header className="navbar-custom">
            <div className="bg-success"></div>
            <nav className="navbar navbar-expand-md h-100">
                <span className="navbar-brand title" style={{color: title}}>
                    <img src={logo} alt="logo" className="d-inline-block align-center logo"/>
                    Franklin Pimentel
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="/project" className="nav-link" style={{color: item}}>Mis proyectos</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" style={{color: item}}>Contactame</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link" style={{color: item}}>Sobre mi</Link></li>
                        <li className="nav-item"><span className="nav-link" style={{color: item}}>ES</span></li>
                        <li><span>.</span></li>
                        <li className="nav-item"><span className="nav-link" style={{color: item}}>EN</span></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default withRouter(Header);