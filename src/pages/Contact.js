import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from '../redux/actions/contactActions';

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
                <h2>Contacto</h2>
            </div>
            <div className="der-alt">
                <h1>Contacto</h1>

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

                    <input type="submit" className="btn btn-primary" value="Enviar" 
                    disabled={handleDisabled()}/>

                </form>
            </div>
        </section>
    );
} 

const mapDispatchToProps = {
    addNewMessage
}

export default connect(null, mapDispatchToProps)(Contact);