import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
	${mobile({ display: "none" })}
`;

const Nav = styled.div`
	display: flex;
	height: 120px;
`;

const Logo = styled.div`
	display: flex;
	padding: 20px;
`;

const Image = styled.img`
	height: 150px;
	width: 150px;
	object-fit: contain;
	margin-top: 0px;
`;

const Center = styled.div`
	flex: 2;
	display: flex;
	text-align: center;
`;

const List = styled.ul`
	list-style: none;
	margin: 48px 40px;
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: white;
	decoration: none;

	&:hover {
		color: #ffd500;
		transform: scale(1.1);
		transition-duration: ease-in 0.2s;
	}

	&:active {
		text-decoration: underline solid #ffd500 5%;
	}
`;

const Right = styled.div``;

const Button = styled.button`
	margin: 32px 12px;
	padding: 8px 30px;
	font-size: 18px;
	color: white;
	border: none;
	background: #ffd500;

	&:hover {
		background: transparent;
		border: 1px solid white;
	}
`;

const Navbar = () => {
	return (
		<Container>
			<Nav>
				<Logo>
					<Image src="/images/logo.jpeg" />
				</Logo>
				<Center>
					<Link to="/home" style={{ textDecoration: "none" }}>
						<List>Home</List>
					</Link>
					<Link to="/about" style={{ textDecoration: "none" }}>
						<List>About</List>
					</Link>
					<Link to="/bookroom" style={{ textDecoration: "none" }}>
						<List>Rooms</List>
					</Link>
					<Link to="/gallery" style={{ textDecoration: "none" }}>
						<List>Gallery</List>
					</Link>
					<Link to="/contact" style={{ textDecoration: "none" }}>
						<List>Contact us</List>
					</Link>
				</Center>
				<Right>
					<Link to="/contact" style={{ textDecoration: "none" }}>
						<Button>Reservation</Button>
					</Link>
				</Right>
			</Nav>
			<Outlet />
		</Container>
	);
};

export default Navbar;
