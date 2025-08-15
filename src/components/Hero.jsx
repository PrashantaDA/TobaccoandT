/* eslint-disable no-unused-vars */
import heroImage from "../assets/hookah2.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
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

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8, rotate: -10 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants = {
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
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	};

	return (
		<section className="relative max-w-[95dvw] min-h-[80dvh] flex items-center justify-center mx-auto px-4 sm:px-6 pb-8 lg:pb-0">
			<motion.div
				className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Main Content - Left Side */}
				<motion.div
					className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1"
					variants={itemVariants}
				>
					{/* Main Heading */}
					<motion.h1
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
						variants={itemVariants}
					>
						<span className="text-gray-100">
							Premium{" "}
							<motion.span
								className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								Tobacco & Lifestyle
							</motion.span>{" "}
							Accessories
						</span>
					</motion.h1>

					{/* Short Description */}
					<motion.p
						className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed px-2 sm:px-0"
						variants={itemVariants}
					>
						Discover a wide variety of quality vaping, hookah, cigarette, pipe, tobacco, and related accessories at{" "}
						<motion.span
							className="bg-gradient-to-r from-red-400 via-pink-500 to-gray-500 bg-clip-text text-transparent font-bold uppercase text-2xl"
							whileHover={{ scale: 1.1, rotate: 2 }}
							transition={{ duration: 0.3 }}
						>
							Tobacco & Things
						</motion.span>
						.
					</motion.p>

					{/* CTA Button */}
					<motion.div
						className="flex justify-center lg:justify-start"
						variants={buttonVariants}
					>
						<motion.button
							className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-700 to-gray-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl cursor-pointer group text-sm sm:text-base"
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
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
							<Link
								to="/products"
								className="relative z-10 transition-all duration-300 group-hover:text-white font-semibold text-lg flex items-center gap-2"
							>
								<span>View Products</span>
								<motion.span
									className="text-2xl"
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
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Hero Image - Right Side */}
				<motion.div
					className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0 pt-8 sm:pt-12 lg:pt-0"
					variants={imageVariants}
				>
					<motion.div
						className="relative group"
						transition={{ duration: 0.3 }}
					>
						{/* Image with hover effects */}
						<motion.img
							src={heroImage}
							alt="Premium Hookah Collection"
							className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain transition-all duration-500 transform group-hover:drop-shadow-2xl"
							transition={{
								duration: 0.6,
								ease: "easeInOut",
							}}
						/>

						{/* Floating particles effect */}
						<motion.div
							className="absolute -top-4 -right-4 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"
							animate={{
								y: [0, -10, 0],
								opacity: [0.5, 1, 0.5],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute -bottom-4 -left-4 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
							animate={{
								y: [0, 10, 0],
								opacity: [0.5, 1, 0.5],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0.5,
							}}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
