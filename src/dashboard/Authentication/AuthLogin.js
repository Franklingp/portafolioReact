import React, { useState } from 'react';
import { logingUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

//style
import "../../assets/styles/AuthLogin.css";

const AuthLogin = ({ logingUser }) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    //handle change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        logingUser(form);
    }

    return (
        <section className="container login-content">
            <h1>Iniciar Sesion</h1>
            <p>Necesitas iniciar sesion para poder continuar...</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email">Correo electronico</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={form.email}
                    />
                    <small id="emailHelp" className="form-text text-muted">Tus datos se mantendran seguros en todo momento.</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={form.password}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">
                    Iniciar Sesion
                    </button>
            </form>
        </section>
    )
}

const mapDispatchToProps = {
    logingUser
}

export default connect(null, mapDispatchToProps)(AuthLogin);