import { useEffect } from "react";
import { motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import { containerVariants, itemVariants } from "../utils/animations";

const About = () => {
	useEffect(() => {
		scrollToTop();
	}, []);

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
		whileHover: { y: -8, transition: { duration: 0.25 } },
	};

	const values = [
		{ title: "Quality First", description: "We focus on dependable products customers use daily." },
		{ title: "Friendly Service", description: "Down-to-earth guidance and honest recommendations." },
		{ title: "Local Roots", description: "Community-driven shop that supports local preferences." },
		{ title: "Simple Selection", description: "Curated choices instead of overwhelming catalogs." },
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
			{/* Header */}
			<section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90" />
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
					<div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl" />
				</div>

				<motion.div
					className="container mx-auto relative z-10"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						variants={itemVariants}
						className="text-center mb-10 lg:mb-14"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
							About <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Tobacco & Things</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
							A small local shop offering dependable tobacco products, hookahs, vaping essentials, and accessories. We'll keep this simple and update details as we go.
						</p>
					</motion.div>

					{/* Values Grid */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
					>
						{values.map((v, i) => (
							<motion.div
								key={v.title}
								variants={cardVariants}
								className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm shadow-2xl cursor-default"
								whileHover="whileHover"
							>
								<h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
								<p className="text-gray-300">{v.description}</p>
							</motion.div>
						))}
					</motion.div>

					{/* CTA */}
					<motion.div
						variants={itemVariants}
						className="text-center mt-12"
					>
						<Link
							to="/products"
							className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
						>
							<span>Browse Products</span>
							<BiChevronRight className="text-2xl" />
						</Link>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default About;
