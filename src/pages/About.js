import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Container = styled.div``;

const Information = styled.div`
	margin: 50px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Hr = styled.hr`
	height: 2px;
	width: 400px;
	margin: 0px 32px;
	background: #595959;
`;

const Title = styled.h1`
	color: #595959;
	font-weight: 500;
	font-size: 48px;
`;

const MoreInfo = styled.p`
	margin: 0px 200px 100px 200px;
	display: flex;
	text-align: center;
`;

const ServiceInfo = styled.div`
	display: flex;
	margin: 32px 100px;
`;

const Service = styled.div`
	width: 300px;
	height: 450px;
	margin: 0px 50px;
	box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

	&:hover {
		transform: scale(1.1);
		transition-duration: 0.2s;
	}
`;

const ServiceImage = styled.img`
	height: 300px;
	width: 300px;
	object-fit: contain;
	margin-top: -60px;
`;

const ServiceTitle = styled.h3`
	margin-bottom: 20px;
	margin-left: 100px;
`;

const ServiceDesc = styled.p`
	margin-left: 20px;
`;

const About = () => {
	return (
		<Container>
			<Slider />
			<Information>
				<Hr />
				<Title>About Us</Title>
				<Hr />
			</Information>
			<MoreInfo>
				TAJI Suites offers you affordable, elegant and comfortable accomodation
				with a unique blend of taste and ambience.Enjoy all the luxury and
				comfort you have come to expect from TAJI Suites Rooms. Designed as an
				ideal space for work and relaxation alike, but equally useful for those
				evenings you'd rather relax in your comfortable room.
			</MoreInfo>
			<ServiceInfo>
				<Service>
					<ServiceImage src="/images/conference.jpeg" />
					<ServiceTitle>Conferencing</ServiceTitle>
					<ServiceDesc>
						Designed as an ideal space for work and relaxation alike, but
						equally useful for those evenings you'd rather relax in your
						comfortable room.
					</ServiceDesc>
				</Service>
				<Service>
					<ServiceImage src="/images/image6.jpeg" />
					<ServiceTitle>Rooms</ServiceTitle>
					<ServiceDesc>
						TAJI Suites offers you affordable, elegant and comfortable
						accomodation with a unique blend of taste and ambience.Enjoy all the
						luxury and comfort you have come to expect from TAJI Suites Rooms.
					</ServiceDesc>
				</Service>
				<Service>
					<ServiceImage src="/images/food5.jpeg" />
					<ServiceTitle>Food</ServiceTitle>
					<ServiceDesc>
						TAJI Suites delights in authentic African Cuisines cooked to
						perfection at an affordable price.Come and enjoy our meals
						accompanied by any drink of your choice
					</ServiceDesc>
				</Service>
			</ServiceInfo>
			<Footer />
		</Container>
	);
};

export default About;
