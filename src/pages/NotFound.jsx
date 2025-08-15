import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center"
			>
				<h1 className="text-6xl sm:text-7xl font-bold text-white mb-4">404</h1>
				<p className="text-gray-300 text-lg mb-8">The page you're looking for doesn't exist.</p>
				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Link
						to="/"
						className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 cursor-pointer"
					>
						Back Home
					</Link>
					<Link
						to="/products"
						className="px-6 py-3 bg-gradient-to-r from-gray-700 to-red-700 text-white rounded-lg hover:from-gray-600 hover:to-red-600 transition-all duration-300 cursor-pointer"
					>
						Browse Products
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default NotFound;
