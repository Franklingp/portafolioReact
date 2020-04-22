import React from 'react';
import './Home.css';
import arrow from '../assets/ArrowreadMore.png';

const Home = (props) => {
    return(
        <section className='contenido'>
            <div className="izq">
                <p className="left-info"><span className="left-title">Desarrollador <br/> web </span> 
                    <span style={{color: '#A68E52'}}>autodidacta</span><br/>
                    demostrando que <br/>
                    es posible.
                </p>
            </div> 

            
            <div className="der">
                <hr className="vector-vertical"/>
                <aside className="language">
                    If you want to navigate in <br/> 
                    English, change the <br/> 
                    language
                </aside>
                <div className='header'>
                    <h1 className='header-bold'>Welcome</h1>
                    <p className='header-ligth'>console.log(“
                        <span style={{fontStyle:"italic", color: '#A68E52'}}> Welcome </span>
                    ”);</p>
                </div>
                <span className='read-more'>
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