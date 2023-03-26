import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookRoom from "./pages/BookRoom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Order from "./pages/Order";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/bookroom" element={<BookRoom />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/about" element={<About />} />
			<Route path="/Contact" element={<Contact />} />
			<Route path="/order" element={<Order />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
