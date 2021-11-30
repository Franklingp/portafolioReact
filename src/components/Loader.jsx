import React from "react";
import "../assets/styles/Loader.css";

function Loader() {
	return (
		<section
			className={
				"contenido animate__animated animate__fadeIn loader-container "
			}
		>
			<div className="loader">Loading...</div>
		</section>
	);
}

export default Loader;
