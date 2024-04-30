import React, { useState } from "react";
import { logingUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { TextField, Grid, Typography, Button } from "@mui/material";

//style
import "../../assets/styles/AuthLogin.css";

const AuthLogin = ({ logingUser }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	//handle change
	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	//handle submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const result = await logingUser(form);
		if (result === false) {
			// alert("Correo o contraseña incorrectos");
			setError(true);
			setLoading(false);
		}
	};

	return (
		<section className="container login-content">
			<div className="login-form-card">
				<form onSubmit={handleSubmit}>
					<Grid
						container
						justifyContent="space-around"
						alignItems="center"
						spacing={3}
					>
						<Grid item xs={12}>
							<Typography variant="h2" align="center">
								Iniciar Sesion
							</Typography>
							<Typography variant="p" align="center">
								Necesitas iniciar sesion para poder continuar...
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="email"
								type="email"
								error={error}
								onFocus={() => setError(false)}
								onChange={handleChange}
								value={form.email}
								disabled={loading}
								label="Email"
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="password"
								name="password"
								type="password"
								onFocus={() => setError(false)}
								onChange={handleChange}
								value={form.password}
								error={error}
								required
								fullWidth
								disabled={loading}
							/>
						</Grid>
						{
							error ? 
								<Grid item xs={12}>
									<Typography variant="caption" align="center" color={"red"}>
										Correo o contraseña incorrectos
									</Typography>
								</Grid>
							:
								null
						}
						<Grid item xs={12}>
							<Button
								variant="contained"
								type="submit"
								className="btn btn-primary"
								disabled={loading || error}
							>
								Iniciar Sesion
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	logingUser,
};

export default connect(null, mapDispatchToProps)(AuthLogin);
