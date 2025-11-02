/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCT_SHOWCASE_DATA } from "../constants/constants";
import { scrollToTop } from "../utils/scrollToTop";
import { showcaseContainerVariants, showcaseItemVariants } from "../utils/animations";
import LazyImage from "./LazyImage";

const ProductShowcase = () => {
	const navigate = useNavigate();

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 1.05,
			y: -15,
			transition: {
				duration: 0.4,
				ease: "easeInOut",
			},
		},
	};

	// Handle category card click
	const handleCategoryClick = (categoryId) => {
		navigate(`/products?category=${categoryId}`);
		scrollToTop();
	};

	return (
		<section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
			{/* Background with subtle pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80"></div>

			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-2xl"></div>
			</div>

			<motion.div
				className="container mx-auto relative z-10"
				variants={showcaseContainerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{/* Section Header */}
				<motion.div
					className="text-center mb-16 lg:mb-20"
					variants={showcaseItemVariants}
				>
					<motion.h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
						variants={showcaseItemVariants}
					>
						<span className="text-gray-100">
							What We{" "}
							<motion.span
								className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent cursor-pointer"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								Offer
							</motion.span>
						</span>
					</motion.h2>
					<motion.p
						className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
						variants={showcaseItemVariants}
					>
						Browse through our selection of tobacco products, hookahs, vaping essentials, and smoking accessories. Find what you need for your smoking experience.
					</motion.p>
				</motion.div>

				{/* Product Categories Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16"
					variants={showcaseContainerVariants}
				>
					{PRODUCT_SHOWCASE_DATA.map((category, index) => (
						<motion.div
							key={category.id}
							className="group relative cursor-pointer"
							variants={cardVariants}
							whileHover="hover"
							onClick={() => handleCategoryClick(category.id)}
						>
							{/* Card Container */}
							<motion.div
								className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 overflow-hidden shadow-2xl min-h-[300px]"
								whileHover={{
									borderColor: "rgba(251, 191, 36, 0.5)",
									transition: { duration: 0.3 },
								}}
							>
								{/* Hover overlay */}
								<motion.div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
									{/* Image Section */}
									<motion.div
										className="relative flex-shrink-0 cursor-pointer"
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3 }}
									>
										<div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-xl bg-gradient-to-r ${category.gradient} p-1`}>
											<div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
												<LazyImage
													src={category.image}
													alt={category.title}
													className="w-full h-full object-cover"
												/>
											</div>
										</div>
									</motion.div>

									{/* Content Section */}
									<div className="flex-1 text-center lg:text-left">
										<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">{category.title}</h3>
										<p className="text-gray-300 leading-relaxed mb-4">{category.description}</p>

										{/* Features List */}
										<div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
											{category.features.map((feature, featureIndex) => (
												<span
													key={featureIndex}
													className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-full text-sm text-gray-200 border border-gray-600/50"
												>
													{feature}
												</span>
											))}
										</div>

										{/* CTA Button */}
										<div
											className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-700 to-gray-700 text-white font-semibold rounded-lg hover:from-red-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
											onClick={(e) => {
												e.stopPropagation(); // Prevent double navigation
												handleCategoryClick(category.id);
											}}
										>
											<span>Browse {category.title}</span>
											<BiChevronRight className="text-xl" />
										</div>
									</div>
								</div>

								{/* Floating particles */}
								<motion.div
									className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100"
									animate={{
										y: [0, -5, 0],
										opacity: [0, 1, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
										delay: index * 0.2,
									}}
								/>
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* View All Products CTA */}
				<motion.div
					className="text-center"
					variants={showcaseItemVariants}
				>
					<motion.div
						className="inline-block cursor-pointer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to="/products"
							className="relative px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl cursor-pointer group text-lg inline-flex items-center gap-3"
						>
							{/* Sliding background overlay */}
							<motion.span
								className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							/>

							{/* Glow effect */}
							<motion.span
								className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-sm"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							/>

							{/* Button text */}
							<span className="relative z-10 transition-all duration-300 group-hover:text-white font-semibold">View All Products</span>
							<motion.span
								className="relative z-10 text-2xl"
								animate={{ x: [0, 5, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<BiChevronRight />
							</motion.span>
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ProductShowcase;
