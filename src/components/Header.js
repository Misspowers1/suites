import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Navbar = styled.div`
	display: flex;
	height: 60px;
	background: #ffd500;
`;

const Logo = styled.div`
	display: flex;
	padding: 0px;
	margin-bottom: 8px;
	margin-left: 24px;
`;

const Image = styled.img`
	height: 200px;
	width: 200px;
	object-fit: contain;
	margin-top: -65px;
`;

const Center = styled.div`
	flex: 2;
	display: flex;
	text-align: center;
`;

const List = styled.ul`
	list-style: none;
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: white;
	margin: 15px 40px;

	&:hover {
		transform: scale(1.1);
		transition-duration: ease-in 0.2s;
	}

	&:active {
		text-decoration: underline solid white 5%;
	}
`;

const Right = styled.div``;

const Button = styled.button`
	padding: 8px 30px;
	font-size: 18px;
	color: white;
	border: 1px solid white;
	background: transparent;
	margin-top: 8px;
	margin-right: 12px;
	cursor: pointer;
`;

const Header = () => {
	return (
		<Container>
			<Navbar>
				<Logo>
					<Image src="/images/Taji Suites.png" />
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
			</Navbar>
		</Container>
	);
};

export default Header;
