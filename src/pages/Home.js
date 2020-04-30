import React from 'react';
import './Home.css';
import arrow from '../assets/ArrowreadMore.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Home = (props) => {
    return(
        <section className='contenido'>
            <div className="izq">
                <aside className="social-media-icons">
                    <img src={instagram} alt="instagram"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={github} alt="github"/>
                </aside>
                <p className="left-info text-ligth"><span className="left-title text-black">Desarrollador <br/> web </span> 
                    <span style={{color: '#A68E52'}}>autodidacta</span><br/>
                    demostrando que <br/>
                    es posible.
                </p>
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
    );
}

export default Home;