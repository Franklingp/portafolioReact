import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//Icons
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

//styles
import "../assets/styles/NotFound.css";

const NotFound = (props) => {
	return (
		<div className="NotFound animate__animated animate__fadeIn">
			<TravelExploreIcon
				titleAccess="Not found"
				className="NotFound-icon animate__animated animate__fadeInDown"
				sx={{ fontSize: 128 }}
			/>
			<h1 className="NotFound-title">Ups, parece que hubo un error</h1>
			<p className="NotFound-text">
				No se ha podido encontrar la ruta, por favor vuelve al home para seguir
				explorando
			</p>
			<Link to="/">
				<Button>Volver al Home</Button>
			</Link>
		</div>
	);
};

export default NotFound;
