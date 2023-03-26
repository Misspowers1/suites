import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div``;

const Image = styled.img`
	height: 100vh;
	width: 98.7vw;
	margin-bottom: 10px;
	object-fit: cover;
`;
const Lower = styled.div`
	display: flex;
	max-width: 800px;
	margin: 50px 300px;
	background: white;
	height: 140px;
	color: #595959;
	border: 1px solid grey;
`;

const In = styled.div`
	height: 200px;
	width: 200px;
`;

const Check = styled.h5`
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
`;

const Date = styled.h1`
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
`;

const Month = styled.h4`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
	font-weight: 500;
`;

const Out = styled.div`
	height: 200px;
	width: 200px;
`;

const Guest = styled.div`
	height: 200px;
	width: 200px;
`;

const Availability = styled.div`
	height: 100px;
	width: 200px;
	padding: 20px 0px;
	background: #ffd500;
	color: white;
`;

const Avail = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	font-weight: 500;
`;

const Avail2 = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
`;

const Room = styled.div`
	display: flex;
	flex: 1;
	max-width: 960px;
	margin-bottom: 32px;
	margin-left: 200px;
	border: 1px solid grey;
`;

const ImageInfo = styled.div`
	display: flex;
	flex: 1;
`;

const Image1 = styled.img`
	height: 300px;
	width: 300px;
	object-fit: contain;
	margin: 0px 32px;
`;

const MoreInfo = styled.div``;

const Title = styled.h2`
	font-weight: 400;
	margin-top: 100px;
`;

const Price = styled.h2`
	font-weight: 400;
	margin: 20px 20px 0px 0px;
`;

const Night = styled.p`
	margin: 0px 20px 150px 0px;
	color: #595959;
`;

const Button = styled.button`
	border: none;
	border-radius: 30px;
	padding: 8px 32px;
	font-size: 18px;
	color: white;
	background: #ffd500;
	margin: 0px 20px;
`;

const BookRoom = () => {
	return (
		<Container>
			<Header />
			<Image src="/images/image9.jpeg" />
			<Lower>
				<In>
					<Check>CHECK IN</Check>
					<Date>16</Date>
					<Month>JUN</Month>
				</In>
				<Out>
					<Check>CHECK OUT</Check>
					<Date>26</Date>
					<Month>JUN</Month>
				</Out>
				<Guest>
					<Check>QUEST</Check>
					<Date>3</Date>
					<Month>3</Month>
				</Guest>
				<Availability>
					<Avail>CHECK</Avail>
					<Avail2>AVAILABILITY</Avail2>
				</Availability>
			</Lower>
			<Room>
				<ImageInfo>
					<Image1 src="/images/image9.jpeg" />
					<Title>
						Single Bed <br />1 Guest
					</Title>
				</ImageInfo>
				<MoreInfo>
					<Price>Ksh 2000</Price>
					<Night>per night</Night>
					<Button>Book Now</Button>
				</MoreInfo>
			</Room>
			<Room>
				<ImageInfo>
					<Image1 src="/images/image7.jpeg" />
					<Title>
						Bed And Breakfast <br />1 Guest
					</Title>
				</ImageInfo>
				<MoreInfo>
					<Price>Ksh 2500</Price>
					<Night>per night</Night>
					<Button>Book Now</Button>
				</MoreInfo>
			</Room>
			<Room>
				<ImageInfo>
					<Image1 src="/images/image9.jpeg" />
					<Title>
						Half Board <br />1 Guest
					</Title>
				</ImageInfo>
				<MoreInfo>
					<Price>Ksh 3500</Price>
					<Night>per night</Night>
					<Button>Book Now</Button>
				</MoreInfo>
			</Room>
			<Footer />
		</Container>
	);
};

export default BookRoom;
