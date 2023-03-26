import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 500;
	margin: 28px 50px;
	color: #595959;
`;

const GalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 40px;
	margin-bottom: 50px;
`;

const Image = styled.img`
	height: 300px;
	width: 300px;
	object-fit: cover;
	margin: 20px 8px;
	border-radius: 20px;
`;

const Gallery = () => {
	return (
		<Container>
			<Header />
			<Title>Gallery</Title>
			<GalleryContainer>
				<Image src="/images/image9.jpeg" />
				<Image src="/images/conference.jpeg" />
				<Image src="/images/drink.jpeg" />
				<Image src="/images/food5.jpeg" />
				<Image src="/images/drink1.jpeg" />
				<Image src="/images/food1.jpeg" />
				<Image src="/images/drink2.jpeg" />
				<Image src="/images/food2.jpeg" />
				<Image src="/images/drink2.jpeg" />
				<Image src="/images/food3.jpeg" />
				<Image src="/images/drink3.jpeg" />
				<Image src="/images/food4.jpeg" />
				<Image src="/images/drink4.jpeg" />
				<Image src="/images/food6.jpeg" />
				<Image src="/images/drink5.jpeg" />
				<Image src="/images/food7.jpeg" />
				<Image src="/images/gazibo.jpeg" />
				<Image src="/images/guest1.jpeg" />
				<Image src="/images/workers.jpeg" />
				<Image src="/images/guest2.jpeg" />
				<Image src="/images/image1.jpeg" />
				<Image src="/images/food3.jpeg" />
				<Image src="/images/image3.jpeg" />
				<Image src="/images/image2.jpeg" />
				<Image src="/images/view3.jpeg" />
				<Image src="/images/image6.jpeg" />
				<Image src="/images/image7.jpeg" />
				<Image src="/images/image8.jpeg" />
				<Image src="/images/image9.jpeg" />
				<Image src="/images/view1.jpeg" />
				<Image src="/images/view3.jpeg" />
				<Image src="/images/view2.jpeg" />
				<Image src="/images/view4.jpeg" />
				<Image src="/images/view5.jpeg" />
				<Image src="/images/view6.jpeg" />
				<Image src="/images/view7.jpeg" />
			</GalleryContainer>
			<Footer />
		</Container>
	);
};

export default Gallery;
