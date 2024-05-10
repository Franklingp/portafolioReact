import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewMessage } from "../redux/actions/contactActions";
import global from "../config";

//styles
import "../assets/styles/Contact.css";

//components
import Dialog from "../components/Dialog";

//utils
import { setID } from "../utils/idShuffle";

//Material ui log
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = ({addNewMessage}) => {
	const [openDialog, setOpenDialog] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	//Hndle form submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await addNewMessage({ 
			...form,
			id: setID(form.name),
			date: Date.now()
		});
		alert(
			`Gracias ${form.name} por dejar tu mensaje, proxiamente estare contactando contigo.`
		);
		setForm({
			name: "",
			email: "",
			message: "",
		});
	};

	//handle form values
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	//handle email dialog
	const handleDialog = () => {
		setOpenDialog(!openDialog);
	};

	return (
		<section className="Contact-content animate__animated animate__fadeIn">
			<Dialog
				open={openDialog}
				handleDialog={handleDialog}
				email={global.email}
			/>
			<div className="contact-seccion-izq animate__animated animate__pulse">
					<div className="contact-header">
						<h1 className="header-bold font-black animate__animated animate__fadeInDown">
							Contáctame
						</h1>
						<p className="header-ligth">
							Gracias por tu interés en mi trabajo. Si deseas saber más 
							utiliza el formulario de contacto o sígueme en mis redes 
							Sociales. Estaré encantado de responder tus consultas y trabajar juntos en nuevos
							proyectos.
						</p>
					</div>
			</div>
			<div className="contact-seccion-der">
				<hr className="vector-contact" />
				<h2 className="contact-title text-ligth animate__animated animate__fadeInDown">
					Contacto
				</h2>

				<form className={"contact-form"} onSubmit={handleSubmit}>
					<div className="mb-3">
						<input
							type="text"
							className="custom-input"
							name="name"
							placeholder="Nombre"
							value={form.name}
							required
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3">
						<input
							type="email"
							className="custom-input"
							name="email"
							placeholder="Correo Electronico"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mb-3">
						<textarea
							type="text"
							className="custom-input"
							required
							name="message"
							placeholder="Mensaje"
							value={form.message}
							onChange={handleChange}
						/>
					</div>

					<input type="submit" className="btn-contact" value="Enviar" />
				</form>
					<aside className="contact-social-media">
						<a href={global.instagram} target="_blank" rel="noopener noreferrer">
							<InstagramIcon
							alt="Instagram"
							/>
						</a>
						<a href={global.facebook} target="_blank" rel="noopener noreferrer">
							<FacebookIcon
							alt="Facebook"
							/>
						</a>
						<a href={global.linkedin} target="_blank" rel="noopener noreferrer">
							<LinkedInIcon
							alt="LinkedIN"
							/>
						</a>
						<a href={global.github} target="_blank" rel="noopener noreferrer">
							<GitHubIcon
							alt="Github"
							/>
						</a>
						<a onClick={handleDialog}>
							<EmailIcon
							alt="Email"
							/>
						</a>
					</aside> 
				<hr className="vector-contact" />
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	addNewMessage,
};

export default connect(null, mapDispatchToProps)(Contact);
