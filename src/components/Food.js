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

const OrderFood = styled.div`
	width: 900px;
	display: flex;
	margin: 0px 160px 50px 100px;
`;

const FoodDetails = styled.div`
	border: 1px solid grey;
	border-radius: 20px;
	margin: 10px 24px;
`;

const FoodItem = styled.img`
	height: 300px;
	width: 300px;
	object-fit: contain;
	margin: 10px 24px;
	border-radius: 20px;
`;

const FoodDesc = styled.h3`
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

const Food = () => {
	return (
		<Container>
			<Title>Food Items</Title>
			<OrderFood>
				<FoodDetails>
					<FoodItem src="/images/food1.jpeg" />
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<Price>Ksh 500</Price>
					<OrderButton>+ </OrderButton>
				</FoodDetails>
				<FoodDetails>
					<FoodItem
						src="/images/food7.jpeg"
						style={{ height: "300px", width: "300px", objectFit: "cover" }}
					/>
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<Price>Ksh 500</Price>
					<OrderButton> +</OrderButton>
				</FoodDetails>
				<FoodDetails>
					<FoodItem src="/images/food2.jpeg" />
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<Price>Ksh 500</Price>
					<OrderButton>+ </OrderButton>
				</FoodDetails>
			</OrderFood>
		</Container>
	);
};

export default Food;
