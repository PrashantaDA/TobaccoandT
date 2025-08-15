import React from "react";
import { motion } from "motion/react";
import { FaShieldAlt, FaStar, FaUsers, FaHandshake } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FEATURED_SECTION_DATA } from "../constants/constants";

const FeaturedSection = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 1.05,
			y: -10,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	// Icon mapping
	const iconMap = {
		FaShieldAlt: <FaShieldAlt className="text-3xl" />,
		FaStar: <FaStar className="text-3xl" />,
		FaHandshake: <FaHandshake className="text-3xl" />,
		FaUsers: <FaUsers className="text-3xl" />,
	};

	return (
		<section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
			{/* Background with gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-800/95"></div>

			{/* Decorative background elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Subtle geometric patterns */}
				<div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/3 to-yellow-500/3 rounded-full blur-3xl"></div>
			</div>

			{/* Border separator */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

			<motion.div
				className="container mx-auto relative z-10"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				{/* Section Header */}
				<motion.div
					className="text-center mb-16 lg:mb-20"
					variants={itemVariants}
				>
					<motion.h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
						variants={itemVariants}
					>
						<span className="text-gray-100">
							Why Choose{" "}
							<motion.span
								className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent cursor-pointer"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								Tobacco & Things
							</motion.span>
						</span>
					</motion.h2>
					<motion.p
						className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
						variants={itemVariants}
					>
						We're your local tobacco shop offering quality products, good selection, and friendly service to meet your smoking needs.
					</motion.p>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
					variants={containerVariants}
				>
					{FEATURED_SECTION_DATA.map((feature, index) => (
						<motion.div
							key={index}
							className="group relative h-full cursor-pointer"
							variants={cardVariants}
							whileHover="hover"
						>
							{/* Card Background */}
							<motion.div
								className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-700/50 overflow-hidden h-full flex flex-col shadow-2xl"
								whileHover={{
									borderColor: "rgba(251, 191, 36, 0.5)",
									transition: { duration: 0.3 },
								}}
							>
								{/* Hover overlay */}
								<motion.div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								{/* Icon */}
								<motion.div
									className={`relative z-10 w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg cursor-pointer`}
									whileHover={{ rotate: 5 }}
								>
									{iconMap[feature.icon]}
								</motion.div>

								{/* Content */}
								<div className="relative z-10 flex-1 flex flex-col">
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">{feature.title}</h3>
									<p className="text-gray-300 leading-relaxed flex-1">{feature.description}</p>
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

				{/* CTA Section */}
				<motion.div
					className="text-center"
					variants={itemVariants}
				>
					<motion.div
						className="inline-block cursor-pointer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to="/products"
							className="relative px-8 py-4 bg-gradient-to-r from-red-700 to-gray-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl cursor-pointer group text-lg inline-flex items-center gap-3"
						>
							{/* Sliding background overlay */}
							<motion.span
								className="absolute inset-0 bg-gradient-to-r from-gray-600 to-red-700"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							/>

							{/* Glow effect */}
							<motion.span
								className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-red-600/20 rounded-lg blur-sm"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							/>

							{/* Button text */}
							<span className="relative z-10 transition-all duration-300 group-hover:text-white font-semibold">Explore Our Collection</span>
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

export default FeaturedSection;
