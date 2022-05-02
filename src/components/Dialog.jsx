import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";

//Icon
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function SimpleDialog({ open, handleDialog, email }) {
	const handleListItemClick = (value) => {
		navigator.clipboard.writeText(value);
		handleDialog();
	};

	return (
		<Dialog onClose={handleDialog} open={open} fullWidth={true} maxWidth="sm">
			<DialogTitle>Correo de contacto</DialogTitle>
			<List sx={{ pt: 0 }}>
				<ListItem
					key={email}
					secondaryAction={
						<a href={`mailto:${email}?Subject=Hello%20again`}>
							<IconButton edge="end" aria-label="send">
								<SendIcon />
							</IconButton>
						</a>
					}
				>
					<ListItemAvatar>
						<Avatar
							sx={{ bgcolor: blue[100], color: blue[600] }}
							onClick={() => handleListItemClick(email)}
						>
							<EmailIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={email} />
				</ListItem>
			</List>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};
