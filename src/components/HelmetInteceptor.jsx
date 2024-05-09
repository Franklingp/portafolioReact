import React from "react";
// import Helmet from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Metadata to avoid zoom in mobile devices

export default function HelmetInteceptor({ children }) {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
				</Helmet>
				<div>{children}</div>
			</div>
		</HelmetProvider>
	);
}
