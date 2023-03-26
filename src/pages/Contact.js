import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
	Facebook,
	Instagram,
	LocationOn,
	Mail,
	Phone,
	Twitter,
} from "@material-ui/icons";

const Container = styled.div`
	position: absolute;
	width: 100%;
`;

const Image = styled.img`
	height: 70vh;
	width: 100%;
	object-fit: cover;
`;

const Hr = styled.hr`
	position: relative;
	top: -250px;
	left: 60px;
	width: 80px;
	height: 5px;
	background: black;
	border: none;
`;

const MainTitle = styled.h1`
	position: relative;
	top: -250px;
	left: 50px;
	font-size: 100px;
	font-weight: 500;
	color: white;
`;

const Info = styled.div`
	display: flex;
	background: #eff4f8;
	margin-top: -150px;
`;

const ContactInfo = styled.div`
	flex: 1;
`;

const Help = styled.h1`
	color: #ffd500;
	margin: 100px 0px 50px 30px;
	font-size: 50px;
	font-weight: 500;
`;

const ContactIn = styled.div`
	margin-bottom: 30px;
	margin-left: 100px;
`;

const Icons = styled.div`
	margin-left: 100px;
	cursor: pointer;
`;
const FormContainer = styled.form`
	flex: 1;
	background: white;
	margin: 50px 100px 50px 100px;
`;

const InfoContainer = styled.div`
	display: flex;
`;

const Title = styled.h1`
	margin: 50px 0px 50px 50px;
	font-weight: 500;
`;

const Input = styled.input`
	margin-left: 50px;
	height: 50px;
	width: 200px;
	border: 1px solid gray;
	background: #eff4f8;
	margin-bottom: 50px;
	font-size: 18px;
`;

const Input2 = styled.input`
	margin-left: 50px;
	height: 50px;
	width: 480px;
	border: 1px solid gray;
	background: #eff4f8;
	margin-bottom: 50px;
	font-size: 18px;
`;

const Input3 = styled.input`
	margin-left: 50px;
	height: 100px;
	width: 480px;
	border: 1px solid gray;
	background: #eff4f8;
	margin-bottom: 30px;
	font-size: 18px;
`;

const Button = styled.button`
	border: none;
	background: white;
	font-size: 20px;
	font-weight: bold;
	color: gray;
	margin-left: 350px;
	padding: 10px;
	cursor: pointer;
`;

const Contact = () => {
	return (
		<Container>
			<Header />
			<Image src="/images/image2.jpeg" />
			<Hr />
			<MainTitle>Contact</MainTitle>
			<Info>
				<ContactInfo>
					<Help>We are here to help!</Help>
					<ContactIn>
						<LocationOn
							style={{
								marginRight: "8px",
							}}
						/>
						Along Kondele Bypass, Opposite Mudasa Academy
					</ContactIn>
					<ContactIn>
						<Phone
							style={{
								marginRight: "8px",
							}}
						/>
						0796387418
					</ContactIn>
					<ContactIn>
						<Mail
							style={{
								marginRight: "8px",
							}}
						/>
						tajiisuites@gmail.com
					</ContactIn>
					<Help>Follow us on</Help>
					<Icons>
						<Facebook style={{ margin: "0px 20px" }} />
						<Instagram style={{ margin: "0px 20px" }} />
						<Twitter style={{ margin: "0px 20px" }} />
					</Icons>
				</ContactInfo>
				<FormContainer>
					<Title>Send us a message</Title>
					<InfoContainer>
						<Input placeholder="First Name" style={{ paddingLeft: "10px" }} />
						<Input placeholder="Second Name" style={{ paddingLeft: "10px" }} />
					</InfoContainer>
					<Input2 placeholder="Email Adress" style={{ paddingLeft: "10px" }} />
					<Input2 placeholder="Subject" style={{ paddingLeft: "10px" }} />
					<Input3 placeholder="Your Message" style={{ paddingLeft: "10px" }} />
					<Button>Send Message</Button>
				</FormContainer>
			</Info>
			<Footer />
		</Container>
	);
};

export default Contact;
