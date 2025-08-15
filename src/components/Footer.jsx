import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FOOTER_DATA, COMPANY_INFO } from "../constants/constants";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const navigate = useNavigate();

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Icon mapping for social links
	const iconMap = {
		FaFacebook: <FaFacebook />,
		FaInstagram: <FaInstagram />,
		FaTwitter: <FaTwitter />,
		FaWhatsapp: <FaWhatsapp />,
	};

	// Handle category link click
	const handleCategoryClick = (path) => {
		navigate(path);
		scrollToTop();
	};

	return (
		<footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
			</div>

			{/* Top border */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
						{/* Company Info */}
						<div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:col-span-1"
						>
							<h3 className="text-2xl font-bold text-white mb-4">
								<span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">{COMPANY_INFO.name}</span>
							</h3>
							<p className="text-gray-300 leading-relaxed mb-6">{COMPANY_INFO.description}</p>

							{/* Social Media Links */}
							<div className="flex space-x-4">
								{FOOTER_DATA.socialLinks.map((social, index) => (
									<a
										key={social.name}
										href={social.url}
										className={`text-gray-400 text-xl transition-all duration-300 ${social.color} hover:scale-110 cursor-pointer`}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										{iconMap[social.icon]}
									</a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
							<ul className="space-y-2">
								{FOOTER_DATA.quickLinks.map((link, index) => (
									<li
										key={link.name}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Link
											to={link.path}
											className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group cursor-pointer"
										>
											<span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Product Categories */}
						<div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h4 className="text-lg font-semibold text-white mb-4">Products</h4>
							<ul className="space-y-2">
								{FOOTER_DATA.productCategories.map((category, index) => (
									<li
										key={category.name}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<button
											onClick={() => handleCategoryClick(category.path)}
											className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group cursor-pointer"
										>
											<span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
											{category.name}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Contact & Hours */}
						<div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<h4 className="text-lg font-semibold text-white mb-4">Contact & Hours</h4>

							{/* Contact Info */}
							<div className="space-y-3 mb-6">
								<div className="flex items-center text-gray-300">
									<FaPhone className="text-amber-400 mr-3 flex-shrink-0" />
									<span>{FOOTER_DATA.contactInfo.phone}</span>
								</div>
								<div className="flex items-center text-gray-300">
									<FaEnvelope className="text-amber-400 mr-3 flex-shrink-0" />
									<span>{FOOTER_DATA.contactInfo.email}</span>
								</div>
								<div className="flex items-start text-gray-300">
									<FaMapMarkerAlt className="text-amber-400 mr-3 mt-1 flex-shrink-0" />
									<span>
										{FOOTER_DATA.contactInfo.address.street}
										<br />
										{FOOTER_DATA.contactInfo.address.city}
									</span>
								</div>
							</div>

							{/* Business Hours */}
							<div>
								<h5 className="text-white font-medium mb-2">Business Hours</h5>
								<div className="space-y-1">
									{FOOTER_DATA.businessHours.map((schedule, index) => (
										<div
											key={schedule.day}
											className="flex justify-between text-sm text-gray-300"
										>
											<span>{schedule.day}</span>
											<span>{schedule.hours}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-700/50">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="text-gray-400 text-sm"
							>
								© {currentYear} {COMPANY_INFO.name}. All rights reserved.
							</p>

							<div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="flex space-x-6 text-sm"
							>
								<Link
									to="/privacy"
									className="text-gray-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
								>
									Privacy Policy
								</Link>
								<Link
									to="/terms"
									className="text-gray-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
								>
									Terms of Service
								</Link>
								<span className="text-gray-600">|</span>
								<span className="text-gray-500">Age 21+ Only</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
