import React, { useState } from 'react';
import { logingUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

//style
import "../../assets/styles/AuthLogin.css";

const AuthLogin = ({ logingUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    //handle change
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const result = await logingUser(form);
        if (result === false) {
            alert("Correo o contraseña incorrectos");
            setError(true);
        }
        setLoading(false);
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
                        className={`form-control ${error ? "is-invalid" : null}`}
                        onFocus={() => setError(false)}
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={form.email}
                        disabled={loading}
                    />
                    <small id="emailHelp" className="form-text text-muted">Tus datos se mantendran seguros en todo momento.</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        name="password"
                        type="password"
                        onFocus={() => setError(false)}
                        className={`form-control ${error ? "is-invalid" : null}`}
                        onChange={handleChange}
                        value={form.password}
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
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