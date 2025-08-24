import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import ProductShowcase from "../components/ProductShowcase";

const Home = () => {
	return (
		<div>
			<Hero />
			<FeaturedSection />
			<ProductShowcase />
		</div>
	);
};

export default Home;
