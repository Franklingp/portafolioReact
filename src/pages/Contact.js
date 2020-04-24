import React from 'react';

const Contact = (props) => {
    return (
        <section  className='content'>
            <div className="izq-alt">
                <h2>Contacto</h2>
            </div>
            <div className="der-alt">
                <h1>Contacto</h1>
                <form>
                    
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" 
                        placeholder="Nombre"/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" name="email" 
                        placeholder="Correo Electronico"/>
                    </div>

                    <div className="form-group">
                        <textarea type="text" className="form-control" name="message" 
                        placeholder="Mensaje"/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Enviar"/>

                </form>
            </div>
        </section>
    );
} 

export default Contact;