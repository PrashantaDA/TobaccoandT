import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BoundaryLoader from "./components/BoundaryLoader";
import Footer from "./components/Footer";
// Critical route - load synchronously
import Home from "./pages/Home";
// Other routes - lazy load
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(() => {
		// Load immediately when DOM is ready
		if (document.readyState === "complete" || document.readyState === "interactive") {
			setInitialLoading(false);
		} else {
			const handleLoad = () => setInitialLoading(false);
			window.addEventListener("load", handleLoad, { once: true });
			// Fallback: hide loader after max 300ms if page hasn't loaded
			const timeout = setTimeout(() => setInitialLoading(false), 300);
			return () => {
				window.removeEventListener("load", handleLoad);
				clearTimeout(timeout);
			};
		}
	}, []);

	if (initialLoading) {
		return <BoundaryLoader />;
	}

	return (
		<div className="opacity-100">
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
			<Footer />
		</div>
	);
};

export default App;
