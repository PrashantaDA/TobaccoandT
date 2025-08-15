import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BoundaryLoader from "./components/BoundaryLoader";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
	const [initialLoading, setInitialLoading] = useState(true);
	const [showApp, setShowApp] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => {
			setInitialLoading(false);
			// let the loader disappear first, then fade-in app
			setTimeout(() => setShowApp(true), 50);
		}, 1800);
		return () => clearTimeout(t);
	}, []);

	if (initialLoading) {
		return <BoundaryLoader />;
	}

	return (
		<div className={`transition-opacity duration-500 ${showApp ? "opacity-100" : "opacity-0"}`}>
			<Navbar />
			<ScrollToTop />
			<Suspense fallback={<BoundaryLoader />}>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/products"
						element={<Products />}
					/>
					<Route
						path="/products/:productId"
						element={<ProductDetail />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
