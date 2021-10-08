import React from 'react';
import '../assets/styles/Home.css';
import global from '../config.js';
import About from './About';

//Icons
import arrow from '../assets/ArrowreadMore.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

//hoks
import useAnimation from "../hooks/useAnimation";

const Home = () => {
    const [animation] = useAnimation("contenido");

    return (
        <React.Fragment>
            <section className={animation}>

                <div className="izq">
                    <div></div>
                    <aside className="social-media-icons">
                        <a href={global.instagram}>
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href={global.facebook}>
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href={global.linkedin}>
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a href={global.github}>
                            <img src={github} alt="github" />
                        </a>
                    </aside>
                    <hr className="vector-about show-mobile" />
                    <p className="left-info text-ligth"><span className="left-title text-black">Desarrollador <br /> web </span>
                        <span style={{ color: '#A68E52' }}>Front-end</span>
                        <br />
                        en busca de nuevos <br />
                        retos.
                    </p>
                    <hr className="vector-about show-mobile" />
                </div>


                <div className="der">
                    <hr className="vector-vertical" />
                    <aside className="language text-ligth">
                        If you want to navigate in <br />
                    English, change the <br />
                    language
                </aside>
                    <div className='header'>
                        <h1 className='header-bold'>Welcome</h1>
                        <p className='header-ligth'>Just do it, in
                            <span style={{ color: '#A68E52', }}> React JS </span>
                        </p>
                    </div>
                    <span className='read-more text-ligth'>
                        Saber
                    <span style={{ color: '#A68E52', marginRight: '8px' }}>
                            {' mas'}
                        </span>
                        <img src={arrow} alt="arrow" />
                    </span>
                </div>
            </section>
            <About />
        </React.Fragment>
    );
}

export default Home;