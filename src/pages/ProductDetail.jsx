import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaStar, FaCheck, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer";
import { PRODUCTS_DATA } from "../constants/constants";
import { scrollToTop } from "../utils/scrollToTop";

const ProductDetail = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const [selectedFlavor, setSelectedFlavor] = useState(null);
	const [selectedImage, setSelectedImage] = useState(0);

	const product = PRODUCTS_DATA.find((p) => p.id === parseInt(productId));
	const relatedProducts = PRODUCTS_DATA.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

	useEffect(() => {
		if (product && product.flavors.length > 0) {
			setSelectedFlavor(product.flavors[0]);
		}
		scrollToTop();
	}, [product]);

	if (!product) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
					<Link
						to="/products"
						className="text-amber-400 hover:text-amber-300 cursor-pointer"
					>
						Back to Products
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative py-8 px-4 sm:px-6 lg:px-8"
			>
				<div className="container mx-auto">
					{/* Back Button */}
					<motion.button
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						onClick={() => navigate(-1)}
						className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 mb-6 cursor-pointer"
					>
						<FaArrowLeft />
						Back to Products
					</motion.button>

					{/* Product Details */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Product Images */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="space-y-4"
						>
							<div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
							</div>
						</motion.div>

						{/* Product Info */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="space-y-6"
						>
							{/* Product Header */}
							<div>
								<h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{product.name}</h1>
								<p className="text-gray-300 text-lg mb-4">{product.description}</p>

								{/* Rating */}
								<div className="flex items-center gap-2 mb-4">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<span
												key={i}
												className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}`}
											>
												★
											</span>
										))}
									</div>
									<span className="text-gray-400">({product.rating})</span>
									<span className="text-gray-500">•</span>
									<span className={`flex items-center gap-1 ${product.inStock ? "text-green-400" : "text-red-400"}`}>
										{product.inStock ? <FaCheck /> : <FaTimes />}
										{product.inStock ? "In Stock" : "Out of Stock"}
									</span>
								</div>

								{/* Price */}
								<div className="text-3xl font-bold text-amber-400 mb-6">${product.price}</div>
							</div>

							{/* Flavors/Variants */}
							{product.flavors && product.flavors.length > 0 && (
								<div>
									<h3 className="text-lg font-semibold text-white mb-3">Available Flavors/Variants</h3>
									<div className="flex flex-wrap gap-2">
										{product.flavors.map((flavor) => (
											<button
												key={flavor}
												onClick={() => setSelectedFlavor(flavor)}
												className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer ${
													selectedFlavor === flavor
														? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500"
														: "bg-gray-800/50 text-gray-300 border-gray-700 hover:border-amber-500 hover:text-amber-400"
												}`}
											>
												{flavor}
											</button>
										))}
									</div>
								</div>
							)}

							{/* Product Details */}
							<div>
								<h3 className="text-lg font-semibold text-white mb-3">Product Details</h3>
								<p className="text-gray-300 leading-relaxed">{product.details}</p>
							</div>

							{/* Specifications */}
							{product.specifications && (
								<div>
									<h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										{Object.entries(product.specifications).map(([key, value]) => (
											<div
												key={key}
												className="flex justify-between py-2 border-b border-gray-700"
											>
												<span className="text-gray-400">{key}</span>
												<span className="text-white font-medium">{value}</span>
											</div>
										))}
									</div>
								</div>
							)}
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Related Products */}
			{relatedProducts.length > 0 && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="px-4 sm:px-6 lg:px-8 py-16"
				>
					<div className="container mx-auto">
						<h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">Related Products</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((relatedProduct) => (
								<motion.div
									key={relatedProduct.id}
									whileHover={{ y: -5 }}
									className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
									onClick={() => navigate(`/products/${relatedProduct.id}`)}
								>
									<div className="h-48 bg-gray-900 flex items-center justify-center">
										<img
											src={relatedProduct.image}
											alt={relatedProduct.name}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
									<div className="p-4">
										<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">{relatedProduct.name}</h3>
										<p className="text-gray-400 text-sm mb-3 line-clamp-2">{relatedProduct.description}</p>
										<div className="flex items-center justify-between">
											<span className="text-lg font-bold text-amber-400">${relatedProduct.price}</span>
											<span className="text-sm text-gray-400">View Details</span>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default ProductDetail;
