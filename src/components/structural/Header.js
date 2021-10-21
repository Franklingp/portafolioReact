import React, { useEffect, useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css'

//Icons
import logoLigth from '../../assets/VectorBrand.png';
import logoDark from '../../assets/VectorBrandDark.png';
import menuWhite from '../../assets/menu_white.png';
import menuDark from '../../assets/menu.png';
import languageWhite from '../../assets/LanguageWhite.png';
import languageDark from '../../assets/LanguageDark.png';
import closeIcon from '../../assets/close.png';

const Header = (props) => {
    const [mobile, setMobile] = useState(true);
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("#ffffff");
    const [item, setItem] = useState("#212224");
    const [logo, setLogo] = useState(logoLigth);
    const path = props.location.pathname;

    //Check if is mobile version or not
    const checkLayout = () => {
        if (window.screen.width < 1000) {
            setMobile(true);
            setDrawer(false)
        } else {
            setMobile(false);
            setDrawer(true)
        }
    }

    //update drawer
    const updateDrawer = () => {
        if (mobile === true) {
            setDrawer(!drawer)
        }
    }

    //update colors from header
    const checkFontColor = useCallback(() => {
        switch (path) {
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
            case "/login":
                setLogo(logoDark);
                setTitle("#212224");
                setItem("#212224");
                break;
            default:
                setLogo(logoLigth);
                setTitle("#ffffff");
                setItem("#212224");
        }
    }, [path])

    useEffect(() => {
        checkFontColor()
        checkLayout()
    }, [checkFontColor]);

    return (
        <header className="navbar-custom">
            <nav className="navbar-content">
                <div className="navbar-header" style={{ color: title }}>
                    <img src={logo} alt="logo" height="25" />
                    <span>Franklin Pimentel</span>
                </div>

                {/* Mobile menu Button*/}
                <button onClick={updateDrawer} className="navbar-menu-icon">
                    {logo === logoLigth && <img src={menuWhite} alt="menu" height="16" />}
                    {logo === logoDark && <img src={menuDark} alt="menu" height="16" />}
                </button>


                {/*Menu*/}
                <div className={`navbar-link-content animate__animated ${drawer === true ? "animate__fadeInRight" : "animate__fadeOutRight"}`}>
                    <ul className="navbar-link-list">
                        <div className="navbar-mobile-version" onClick={updateDrawer}>
                            <li className="navbar-link-item" >
                                <h3>Menu</h3>
                            </li>
                            <img className="navbar-close-icon" src={closeIcon} alt="menu" height="16" />
                        </div>
                        <li className="navbar-link-item" onClick={updateDrawer}><Link to="/project" style={{ color: mobile === true ? "#212224" : item }}>Mis proyectos</Link></li>
                        <li className="navbar-link-item" onClick={updateDrawer}><Link to="/contact" style={{ color: mobile === true ? "#212224" : item }}>Contactame</Link></li>
                        <li className="navbar-link-item" onClick={updateDrawer}><Link to="/" style={{ color: mobile === true ? "#212224" : item }}>Sobre mi</Link></li>
                        <li className="nav-item">
                            <img
                                className="language-icon" alt="lang"
                                src={item === '#ffffff' ? languageWhite : languageDark}
                                height="18" />
                            <span style={{ color: mobile === true ? "#212224" : item }}> Language</span>
                        </li>
                    </ul>
                </div>


            </nav>
        </header>
    );
}

export default withRouter(Header);