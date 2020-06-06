import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from '../redux/actions/contactActions';
import './Contact.css';
import global from '../config';

const Contact = (props) => {
    const [name, nameState] = useState('');
    const [email, emailState] = useState('');
    const [message, messageState] = useState('');
    const [animation, setAnimation] = useState("content animation-none");

    const handleAnimation = () => {
        window.scrollTo(0, 0);
        setTimeout( () => {
            setAnimation("content animation-show");
        },1);
    }
    handleAnimation();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewMessage({name, email, message});
        alert(`Gracias ${name} por dejar tu mensaje, proxiamente estare contactando contigo por correo`);
        nameState('');
        emailState('');
        messageState('');
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                nameState(e.target.value);
                break;
            case 'email':
                emailState(e.target.value);
                break;
            case 'message':
                messageState(e.target.value);
                break;
            default:
                console.log('No es valido');
        }
    }

    const handleDisabled = () => {
        if(name === "" || message === "" || email === ""){
            return true
        }else{
            return false;
        }
    }

    return (
        <section  className={animation}>
            <div className="izq-alt">
                <a href={global.instagram} className="big-text" style={{color: '#A68E52', fontFamily: 'Thin-italic'}}>Instagram</a>
                <a href={global.facebook} className="big-text" style={{fontFamily: 'Extra-ligth'}}>Facebook</a>
                <a href={global.email} className="big-text" style={{fontFamily: 'Ligth'}}>Correo</a>
                <a href={global.twitter} className="big-text" style={{fontFamily: 'Regular'}}>Twitter</a>
                <a href={global.behance} className="big-text" style={{fontFamily: 'Thin-italic'}}>Behance</a>
                <a href={global.linkedin} className="big-text" style={{color: '#A68E52', fontFamily: 'Extra-ligth'}}>Linkedin</a>
            </div>
            <div className="der-alt">
                <hr className="vector-contact"/>
                <h2 className="contact-title text-ligth">Contacto</h2>

                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" 
                        placeholder="Nombre" value={name} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" name="email" 
                        placeholder="Correo Electronico" value={email} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <textarea type="text" className="form-control" name="message" 
                        placeholder="Mensaje" value={message} onChange={handleChange}/>
                    </div>

                    <input type="submit" className="btn-contact" value="Enviar" 
                    disabled={handleDisabled()}/>

                </form>
                <p className="text-form text-ligth">
                    Este formulario obtiene tus datos <br/>para poder <span className="ligth">contactar</span> contigo posteriormente. <br/>No te preocupes tus datos estan <span className="ligth">seguros.</span>
                </p>
            </div>
        </section>
    );
} 

const mapDispatchToProps = {
    addNewMessage
}

export default connect(null, mapDispatchToProps)(Contact);