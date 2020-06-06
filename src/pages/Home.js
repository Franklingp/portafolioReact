import React, { useState } from 'react';
import './Home.css';
import arrow from '../assets/ArrowreadMore.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import global from '../config.js';
import About from './About';

const Home = (props) => {
    const [animation, setAnimation] = useState("contenido animation-none");

    const handleAnimation = () => {
        setTimeout( () => {
            setAnimation("contenido animation-show");
        },1);
    }

    handleAnimation();

    return(
        <React.Fragment>
        <section className={animation}>
            <div className="izq">
                <aside className="social-media-icons">
                    <a href={global.instagram}>
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a href={global.facebook}>
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href={global.linkedin}>
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href={global.github}>
                        <img src={github} alt="github"/>
                    </a>
                </aside>
                <hr className="vector-about show-mobile"/>
                <p className="left-info text-ligth"><span className="left-title text-black">Desarrollador <br/> web </span> 
                    <span style={{color: '#A68E52'}}>autodidacta</span><br/>
                    demostrando que <br/>
                    es posible.
                </p>
                <hr className="vector-about show-mobile"/>
            </div> 

            
            <div className="der">
                <hr className="vector-vertical"/>
                <aside className="language text-ligth">
                    If you want to navigate in <br/> 
                    English, change the <br/> 
                    language
                </aside>
                <div className='header'>
                    <h1 className='header-bold'>Welcome</h1>
                    <p className='header-ligth'>console.log(“
                        <span style={{color: '#A68E52', }}> Welcome </span>
                    ”);</p>
                </div>
                <span className='read-more text-ligth'>
                    Saber 
                    <span style={{color: '#A68E52', marginRight: '8px'}}>
                        {' mas'}
                    </span>
                    <img src={arrow} alt="arrow" />
                </span>
            </div>
        </section>
        <About/>
        </React.Fragment>           
    );
}

export default Home;