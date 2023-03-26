import {
	Facebook,
	Instagram,
	LocationOn,
	Mail,
	Phone,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Info = styled.div`
	display: flex;
	height: 200px;
	background: #454545;
	color: #ececec;
	padding: 48px 150px;
`;

const Left = styled.div`
	flex: 1;
	margin-right: 24px;
`;

const Logo = styled.h1`
	color: #f5ba1a;
	margin-bottom: 16px;
	font-weight: 500;
`;

const Desc = styled.p`
	margin-bottom: 16px;
`;

const Contact = styled.div`
	color: white;
	margin-bottom: 10px;
	margin-left: 100px;
`;

const Center = styled.div`
	flex: 1;
`;

const Links = styled.h4`
	font-weight: 400;
	margin-bottom: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
`;

const Social = styled.h4`
	font-weight: 400;
	margin-bottom: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Icons = styled.div`
	margin-left: 100px;
`;

const Footer = () => {
	return (
		<Container>
			<Info>
				<Left>
					<Logo>Taji Suites</Logo>
					<Desc>
						TAJI Suites offers you affordable, elegant and comfortable
						accomodation with a unique blend of taste and ambience.Our retaurant
						delights in authentic African dishes cooked to perfection.
					</Desc>
				</Left>
				<Center>
					<Links>Quick Links</Links>
					<List>Rooms</List>
					<List>Food</List>
					<List>Drinks</List>
					<List>Conference Room</List>
				</Center>
				<Right>
					<Social>Connect With Us</Social>
					<Icons>
						<Facebook style={{ margin: "0px 20px" }} />
						<Instagram style={{ margin: "0px 20px" }} />
						<Twitter style={{ margin: "0px 20px" }} />
					</Icons>
					<Contact>
						<LocationOn
							style={{
								marginRight: "8px",
								color: " #f5ba1a",
							}}
						/>
						Along Kondele Bypass, Opposite Mudasa Academy
					</Contact>
					<Contact>
						<Phone
							style={{
								marginRight: "8px",
								color: " #f5ba1a",
							}}
						/>
						0796387418
					</Contact>
					<Contact>
						<Mail
							style={{
								marginRight: "8px",
								color: " #f5ba1a",
							}}
						/>
						tajiisuites@gmail.com
					</Contact>
				</Right>
			</Info>
		</Container>
	);
};

export default Footer;
