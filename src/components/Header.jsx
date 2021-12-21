import React, { useEffect, useState, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

//styles
import "../assets/styles/Header.css";

//Icons
import logoLigth from "../assets/VectorBrand.png";
import logoDark from "../assets/VectorBrandDark.png";
import menuWhite from "../assets/menu_white.png";
import menuDark from "../assets/menu.png";
import closeIcon from "../assets/close.png";
import LanguageIcon from "@mui/icons-material/Language";

//Redux
import { connect } from "react-redux";
import { logOut } from "../redux/actions/authActions";

const Header = (props) => {
	const { isAuth, logOut } = props;
	const [mobile, setMobile] = useState(true);
	const [drawer, setDrawer] = useState(false);
	const [title, setTitle] = useState("#ffffff");
	const [item, setItem] = useState("#212224");
	const [logo, setLogo] = useState(logoLigth);
	const path = useLocation().pathname;
	const history = useHistory();

	//Check if is mobile version or not
	const checkLayout = () => {
		if (window.screen.width < 1000) {
			setMobile(true);
			setDrawer(false);
		} else {
			setMobile(false);
			setDrawer(true);
		}
	};

	//update drawer
	const updateDrawer = () => {
		if (mobile === true) {
			setDrawer(!drawer);
		}
	};

	//handle Logout
	const handleLogout = () => {
		history.push("/");
		logOut();
	};

	//update colors from header
	const checkFontColor = useCallback(() => {
		const site = path.split("/")[1];
		switch (site) {
			case "projects":
				setLogo(logoLigth);
				setTitle("#ffffff");
				setItem("#ffffff");
				break;
			case "project":
				setLogo(logoLigth);
				setTitle("#ffffff");
				setItem("#212224");
				break;
			case "contact":
				setLogo(logoDark);
				setTitle("#212224");
				setItem("#ffffff");
				break;
			case "":
				setLogo(logoLigth);
				setTitle("#ffffff");
				setItem("#212224");
				break;
			default:
				setLogo(logoDark);
				setTitle("#212224");
				setItem("#212224");
		}
	}, [path]);

	useEffect(() => {
		checkFontColor();
		checkLayout();
	}, [checkFontColor]);

	return (
		<header className="navbar-custom">
			<nav className="navbar-content">
				<div className="navbar-header" style={{ color: title }}>
					<img src={logo} alt="logo" height="25" />
					<span>Franklin Pimentel</span>
				</div>

				{/* Mobile menu Button*/}
				<button onClick={updateDrawer} className="navbar-menu-icon">
					{logo === logoLigth && <img src={menuWhite} alt="menu" height="16" />}
					{logo === logoDark && <img src={menuDark} alt="menu" height="16" />}
				</button>

				<div
					className={`navbar-link-content animate__animated ${
						drawer === true ? "animate__fadeInRight" : "animate__fadeOutRight"
					}`}
				>
					<ul className="navbar-link-list">
						<div className="navbar-mobile-version" onClick={updateDrawer}>
							<li className="navbar-link-item">
								<h3>Menu</h3>
							</li>
							<img
								className="navbar-close-icon"
								src={closeIcon}
								alt="menu"
								height="16"
							/>
						</div>
						{isAuth === true ? (
							/* Private Menu */
							<React.Fragment>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link to="/" style={{ color: "#212224" }}>
										Dashboard
									</Link>
								</li>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link to="/admin/project" style={{ color: "#212224" }}>
										Create new project
									</Link>
								</li>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link to="/admin/projects" style={{ color: "#212224" }}>
										Projects
									</Link>
								</li>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link to="/admin/sign-up" style={{ color: "#212224" }}>
										Register
									</Link>
								</li>
								<li className="nav-item">
									<span
										style={{ color: "#212224", cursor: "pointer" }}
										onClick={handleLogout}
									>
										{" "}
										Logout
									</span>
								</li>
							</React.Fragment>
						) : (
							/* Public Menu */
							<React.Fragment>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link
										to="/projects"
										style={{ color: mobile === true ? "#212224" : item }}
									>
										Mis proyectos
									</Link>
								</li>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link
										to="/contact"
										style={{ color: mobile === true ? "#212224" : item }}
									>
										Contactame
									</Link>
								</li>
								<li className="navbar-link-item" onClick={updateDrawer}>
									<Link
										to="/"
										style={{ color: mobile === true ? "#212224" : item }}
									>
										Sobre mi
									</Link>
								</li>
								<li className="nav-item">
									<LanguageIcon
										style={{ color: mobile === true ? "#212224" : item }}
										className="language-icon"
										alt="lang"
										color="red"
									/>
									<span style={{ color: mobile === true ? "#212224" : item }}>
										{" "}
										Language
									</span>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
	logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
