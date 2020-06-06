import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css'
import logoLigth from '../../assets/VectorBrand.png';
import logoDark from '../../assets/VectorBrandDark.png';
import menuWhite from '../../assets/VectorMenuWhite.png';
import menuDark from '../../assets/VectorMenuDark.png';
import languageWhite from '../../assets/LanguageWhite.png';
import languageDark from '../../assets/LanguageDark.png';

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

        if(window.screen.width < 1000){
            setItem("#ffffff");
        }
    },[path]);

    return(
        <header className="navbar-custom">
            <nav className="navbar navbar-expand-md h-100">
                <span className="navbar-brand title" style={{color: title}}>
                    <img src={logo} alt="logo" className="d-inline-block align-center logo" height="25"/>
                    Franklin Pimentel
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {logo === logoLigth && <img src={menuWhite} alt="menu" height="8"/>}
                    {logo === logoDark && <img src={menuDark} alt="menu" height="8"/>}
                </button>
                <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            window.screen.width < 1000 && <React.Fragment>
                                <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent"><Link to="/project" className="nav-link" style={{color: item}}>Mis proyectos</Link></li>
                                <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent"><Link to="/contact" className="nav-link" style={{color: item}}>Contactame</Link></li>
                                <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent"><Link to="/" className="nav-link" style={{color: item}}>Sobre mi</Link></li>
                            </React.Fragment>
                        }
                        {
                            window.screen.width > 1000 && <React.Fragment>
                                <li className="nav-item"><Link to="/project" className="nav-link" style={{color: item}}>Mis proyectos</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link" style={{color: item}}>Contactame</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link" style={{color: item}}>Sobre mi</Link></li>
                            </React.Fragment>
                        }
                        
                        <li className="nav-item">
                            <span className="nav-item nav-link" style={{color: item}}>
                                <img className="language-icon" alt="lang" 
                                src={item === '#ffffff' ? languageWhite :languageDark} 
                                height="16"/>ES . EN
                            </span>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default withRouter(Header);