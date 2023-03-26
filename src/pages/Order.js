import React from 'react';
import styled from 'styled-components';
import Drinks from '../components/Drinks';
import Food from '../components/Food';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Container = styled.div``;

const Showcase = styled.img`
	height: 100vh;
	object-fit: cover;
	width: 100%;
`;

const Greetings = styled.h2`
	font-weight: 500;
	margin: 20px 100px;
	color: #595959;
`;

const Button = styled.button`
	margin-left: 600px;
	padding: 8px 24px;
	font-size: 18px;
	border: none;
	border-radius: 30px;
	background: #ffb700;
	color: white;
`;

const Announcement = styled.h4`
	font-weight: 500;
	display: flex;
	text-align: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const Order = () => {
	return (
		<Container>
			<Header />
			<Showcase src="/images/food4.jpeg" />
			<Greetings>Hello Njoki!</Greetings>
			<Button>View My Orders</Button>
			<Food />
			<Drinks />
			<Announcement>Recieve Taji Suites menu on your phone</Announcement>
			<Footer />
		</Container>
	);
};

export default Order;
