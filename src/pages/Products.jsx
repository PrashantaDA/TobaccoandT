/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from "../constants/constants";
import { scrollToTop } from "../utils/scrollToTop";
import LazyImage from "../components/LazyImage";

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("name");
	const [showFilters, setShowFilters] = useState(false);
	const navigate = useNavigate();
	const filtersSectionRef = useRef(null);

	// Get category from URL params only on initial load
	useEffect(() => {
		const category = searchParams.get("category");
		if (category && category !== selectedCategory) {
			setSelectedCategory(category);
		}
	}, []); // Only run once on mount

	// Scroll to filters section
	const scrollToFilters = () => {
		if (filtersSectionRef.current) {
			filtersSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	// Filter and sort products
	const filteredProducts = PRODUCTS_DATA.filter((product) => {
		const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
		const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	}).sort((a, b) => {
		switch (sortBy) {
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			case "name":
			default:
				return a.name.localeCompare(b.name);
		}
	});

	const handleCategoryChange = (categoryId) => {
		setSelectedCategory(categoryId);
		setSearchParams({ category: categoryId }, { replace: true });
		scrollToFilters();
	};

	const handleSortChange = (sortValue) => {
		setSortBy(sortValue);
		scrollToFilters();
	};

	const clearFilters = () => {
		setSelectedCategory("all");
		setSearchTerm("");
		setSortBy("name");
		setSearchParams({}, { replace: true });
		scrollToFilters();
	};

	const handleProductClick = (productId) => {
		navigate(`/products/${productId}`);
		scrollToTop();
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative py-16 px-4 sm:px-6 lg:px-8"
			>
				<div className="container mx-auto">
					{/* Page Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
							Our <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Products</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
							Browse through our selection of quality tobacco products, hookahs, vaping essentials, and accessories.
						</p>
					</motion.div>

					{/* Search and Filters */}
					<motion.div
						ref={filtersSectionRef}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mb-8"
					>
						<div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
							{/* Search Bar */}
							<div className="relative flex-1 max-w-md">
								<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
								<input
									type="text"
									placeholder="Search products..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors cursor-text"
								/>
							</div>

							{/* Sort Dropdown */}
							<select
								value={sortBy}
								onChange={(e) => handleSortChange(e.target.value)}
								className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
							>
								<option value="name">Sort by Name</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="rating">Sort by Rating</option>
							</select>

							{/* Mobile Filter Toggle */}
							<button
								onClick={() => setShowFilters(!showFilters)}
								className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-amber-500 transition-colors cursor-pointer"
							>
								<FaFilter />
								Filters
							</button>
						</div>
					</motion.div>

					{/* Category Filters */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className={`mb-8 ${showFilters ? "block" : "hidden lg:block"}`}
					>
						<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
							{PRODUCT_CATEGORIES.map((category) => (
								<motion.button
									key={category.id}
									onClick={() => handleCategoryChange(category.id)}
									className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer ${
										selectedCategory === category.id
											? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500"
											: "bg-gray-800/50 text-gray-300 border-gray-700 hover:border-amber-500 hover:text-amber-400"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<span>{category.icon}</span>
									<span>{category.name}</span>
								</motion.button>
							))}

							{/* Clear Filters */}
							{(selectedCategory !== "all" || searchTerm || sortBy !== "name") && (
								<motion.button
									onClick={clearFilters}
									className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600/30 transition-all duration-300 cursor-pointer"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<FaTimes />
									Clear Filters
								</motion.button>
							)}
						</div>
					</motion.div>

					{/* Results Count */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mb-6 text-gray-400"
					>
						Showing {filteredProducts.length} of {PRODUCTS_DATA.length} products
					</motion.div>
				</div>
			</motion.div>

			{/* Products Grid */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 1 }}
				className="px-4 sm:px-6 lg:px-8 pb-16"
			>
				<div className="container mx-auto">
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredProducts.map((product, index) => (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
									onClick={() => handleProductClick(product.id)}
								>
									{/* Product Image */}
									<div className="relative h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
										<LazyImage
											src={product.image}
											alt={product.name}
											className="w-full h-full transition-transform duration-300 group-hover:scale-110"
											eager={index < 4}
											fetchPriority={index < 4 ? "high" : undefined}
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										/>
										{!product.inStock && (
											<div className="absolute inset-0 bg-black/60 flex items-center justify-center">
												<span className="text-white font-semibold bg-red-600 px-3 py-1 rounded">Out of Stock</span>
											</div>
										)}
									</div>

									{/* Product Info */}
									<div className="p-4">
										<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">{product.name}</h3>
										<p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

										{/* Rating */}
										<div className="flex items-center gap-1 mb-3">
											{[...Array(5)].map((_, i) => (
												<span
													key={i}
													className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}`}
												>
													★
												</span>
											))}
											<span className="text-gray-400 text-sm ml-1">({product.rating})</span>
										</div>

										{/* Price */}
										<div className="flex items-center justify-between">
											<span className="text-xl font-bold text-amber-400">${product.price}</span>
											<span className="text-sm text-gray-400">View Details</span>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-center py-16"
						>
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-2xl font-semibold text-white mb-2">No products found</h3>
							<p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
							<button
								onClick={clearFilters}
								className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 cursor-pointer"
							>
								Clear All Filters
							</button>
						</motion.div>
					)}
				</div>
			</motion.div>
		</div>
	);
};

export default Products;
