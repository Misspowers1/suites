import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #fff7f7;
	opacity: 0.5;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	z-index: 2;
`;

const Wrapper = styled.div`
	display: flex;
	width: 300vw;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 90vh;
	position: relative;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const Button = styled.button`
	position: absolute;
	top: 250px;
	left: 600px;
	background: #ffd500;
	color: white;
	border: none;
	padding: 8px 30px;
	font-size: 18px;
	border-radius: 30px;
	cursor: pointer;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined style={{ fontSize: "30px" }} />
			</Arrow>
			<Header />
			<Wrapper slideIndex={slideIndex}>
				<Slide>
					<Image src="/images/image9.jpeg" />
					<Link to="/bookroom" style={{ textDecoration: "none" }}>
						<Button>BOOK NOW</Button>
					</Link>
				</Slide>
				<Slide>
					<Image src="/images/food7.jpeg" />
					<Link to="/order" style={{ textDecoration: "none" }}>
						<Button>ORDER NOW</Button>
					</Link>
				</Slide>
				<Slide>
					<Image src="/images/conference.jpeg" />
					<Link to="/contact" style={{ textDecoration: "none" }}>
						<Button>CONTACT US</Button>
					</Link>
				</Slide>
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined style={{ fontSize: "30px" }} />
			</Arrow>
		</Container>
	);
};

export default Slider;
