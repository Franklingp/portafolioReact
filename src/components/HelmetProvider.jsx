import React from "react";
import Helmet from "react-helmet";

//Metadata to avoid zoom in mobile devices

export default function HelmetProvider({ children }) {
	return (
		<div>
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Helmet>
			<div>{children}</div>
		</div>
	);
}
