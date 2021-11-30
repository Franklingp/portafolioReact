import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";
import { authHttp } from "../../service/fetch";

//style
import "../../assets/styles/AuthLogin.css";

const AuthSignup = ({ history }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [form, setForm] = useState({
		name: "",
		surname: "",
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
		try {
			const response = await authHttp("POST", "sign-up", form);
			if (response.status === 400) {
				alert("The email is not valid");
				setError(true);
				setLoading(false);
			} else {
				alert("The user has been register success");
				setError(false);
				setLoading(false);
				history.push("/dashboard");
			}
		} catch (error) {
			console.log(error.response);
			alert("Has been a error when trying to register a user.");
			setLoading(false);
			setError(true);
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
								Sign up
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="name"
								type="text"
								error={error}
								onFocus={() => setError(false)}
								onChange={handleChange}
								value={form.name}
								disabled={loading}
								label="Name"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="surname"
								type="text"
								error={error}
								onFocus={() => setError(false)}
								onChange={handleChange}
								value={form.surname}
								disabled={loading}
								label="Last name"
								required
								fullWidth
							/>
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
								fullWidth
								required
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
								fullWidth
								disabled={loading}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								type="submit"
								className="btn btn-primary"
								disabled={loading || error}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		</section>
	);
};

export default AuthSignup;
