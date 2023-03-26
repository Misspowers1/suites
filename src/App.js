import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Order from "./pages/Order";
import BookRoom from "./pages/BookRoom";
import CheckAvailability from "./components/CheckAvailability";
import About from "./pages/About";
import Slider from "./components/Slider";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Outlet, Link } from "react-router-dom";

function App() {
	return (
		<div>
			<Link to="home">data</Link>
		</div>
	);
}

export default App;
