import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from '../redux/actions/contactActions';
import './Contact.css';

const Contact = (props) => {
    const [name, nameState] = useState('');
    const [email, emailState] = useState('');
    const [message, messageState] = useState('');

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
        <section  className='content'>
            <div className="izq-alt">
                <a href="#" className="big-text" style={{color: '#A68E52'}}>Instagram</a>
                <a href="#" className="big-text" style={{color: '#E3E3E4'}}>Facebook</a>
                <a href="#" className="big-text" style={{color: '#C4C4C4'}}>Correo</a>
                <a href="#" className="big-text" style={{color: '#212224'}}>Twitter</a>
                <a href="#" className="big-text" style={{color: '#111112'}}>Linkedin</a>
                <a href="#" className="big-text" style={{color: '#A68E52'}}>Behance</a>
            </div>
            <div className="der-alt">
                <hr className="vector-contact"/>
                <h2 className="contact-title">Contacto</h2>

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
                <p className="text-form">
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