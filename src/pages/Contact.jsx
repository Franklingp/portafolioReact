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
			`Gracias ${name} por dejar tu mensaje, proxiamente estare contactando contigo.`
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
				<a
					href={global.instagram}
					className="big-text"
					style={{ color: "#A68E52", fontFamily: "Thin-italic" }}
					target="_blank" 
					rel="noopener noreferrer"
				>
					Instagram
				</a>
				<a
					href={global.facebook}
					className="big-text"
					style={{ fontFamily: "Extra-ligth" }}
					target="_blank" 
					rel="noopener noreferrer"
				>
					Facebook
				</a>
				<a
					onClick={handleDialog}
					className="big-text"
					style={{ fontFamily: "Ligth" }}
					target="_blank" 
					rel="noopener noreferrer"
				>

					Correo
				</a>
				<a
					href={global.twitter}
					className="big-text"
					style={{ fontFamily: "Regular" }}
					target="_blank" 
					rel="noopener noreferrer"
				>
					Twitter
				</a>
				<a
					href={global.behance}
					className="big-text"
					style={{ fontFamily: "Thin-italic" }}
					target="_blank" 
					rel="noopener noreferrer"
				>
					Behance
				</a>
				<a
					href={global.linkedin}
					className="big-text"
					style={{ color: "#A68E52", fontFamily: "Extra-ligth" }}
					target="_blank" 
					rel="noopener noreferrer"
				>
					Linkedin
				</a>
			</div>
			<div className="contact-seccion-der">
				<hr className="vector-contact" />
				<h2 className="contact-title text-ligth animate__animated animate__fadeInDown">
					Contacto
				</h2>

				<form onSubmit={handleSubmit}>
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
							name="message"
							placeholder="Mensaje"
							value={form.message}
							onChange={handleChange}
						/>
					</div>

					<input type="submit" className="btn-contact" value="Enviar" />
				</form>
				<p className="text-form text-ligth">
					Este formulario es con el fin <br />
					de poder <span className="ligth">contactar</span> contigo
					posteriormente.
				</p>
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	addNewMessage,
};

export default connect(null, mapDispatchToProps)(Contact);
