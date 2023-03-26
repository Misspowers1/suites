import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin: 50px 0px;
`;

const Title = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	margin: 20px 0px;
`;

const OrderDrink = styled.div`
	width: 900px;
	display: flex;
	margin: 0px 160px 50px 100px;
`;

const DrinkDetails = styled.div`
	border: 1px solid grey;
	border-radius: 20px;
	margin: 10px 24px;
`;

const DrinkItem = styled.img`
	height: 300px;
	width: 300px;
	object-fit: cover;
	margin: 10px 24px;
	border-radius: 20px;
`;

const DrinkDesc = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	color: black;
	margin-bottom: 16px;
`;

const Price = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	color: #f5ba1a;
	margin-bottom: 8px;
`;

const OrderButton = styled.button`
	margin-left: 300px;
	border: none;
	color: white;
	background: #ffd500;
	padding: 2px 6px;
	font-size: 24px;
	margin-bottom: 12px;
`;

const Drinks = () => {
	return (
		<Container>
			<Title>Drinks</Title>
			<OrderDrink>
				<DrinkDetails>
					<DrinkItem src="/images/drink1.jpeg" />
					<DrinkDesc>A bottle of wine</DrinkDesc>
					<Price>Ksh 1500</Price>
					<OrderButton>+ </OrderButton>
				</DrinkDetails>
				<DrinkDetails>
					<DrinkItem src="/images/drink5.jpeg" />
					<DrinkDesc>A bottle of Champagne</DrinkDesc>
					<Price>Ksh 1500</Price>
					<OrderButton> +</OrderButton>
				</DrinkDetails>
				<DrinkDetails>
					<DrinkItem src="/images/drink6.jpeg" />
					<DrinkDesc>A glass of white wine</DrinkDesc>
					<Price>Ksh 1500</Price>
					<OrderButton>+ </OrderButton>
				</DrinkDetails>
			</OrderDrink>
		</Container>
	);
};

export default Drinks;
