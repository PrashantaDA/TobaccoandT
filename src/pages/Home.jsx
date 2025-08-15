import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import ProductShowcase from "../components/ProductShowcase";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Hero />
			<FeaturedSection />
			<ProductShowcase />
			<Footer />
		</div>
	);
};

export default Home;
