/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FOOTER_DATA, COMPANY_INFO } from "../constants/constants";
import { scrollToTop } from "../utils/scrollToTop";
import { containerVariants, itemVariants } from "../utils/animations";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		scrollToTop();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 2500);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
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
					{/* Header */}
					<motion.div
						variants={itemVariants}
						className="text-center mb-10 lg:mb-14"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
							Contact <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">{COMPANY_INFO.name}</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">Have a question? Reach out or drop by during business hours.</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
						{/* Contact Info */}
						<motion.div
							variants={itemVariants}
							className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl"
						>
							<h3 className="text-xl font-semibold text-white mb-4">Get in touch</h3>
							<div className="space-y-4">
								<div className="flex items-start text-gray-300">
									<FaMapMarkerAlt className="text-amber-400 mr-3 mt-1 flex-shrink-0" />
									<span>
										{FOOTER_DATA.contactInfo.address.street}
										<br />
										{FOOTER_DATA.contactInfo.address.city}
									</span>
								</div>
								<div className="flex items-center text-gray-300">
									<FaPhone className="text-amber-400 mr-3 flex-shrink-0" />
									<span>{FOOTER_DATA.contactInfo.phone}</span>
								</div>
								<div className="flex items-center text-gray-300">
									<FaEnvelope className="text-amber-400 mr-3 flex-shrink-0" />
									<span>{FOOTER_DATA.contactInfo.email}</span>
								</div>
							</div>

							<h4 className="text-lg font-semibold text-white mt-8 mb-3">Business Hours</h4>
							<div className="space-y-2">
								{FOOTER_DATA.businessHours.map((b) => (
									<div
										key={b.day}
										className="flex justify-between text-gray-300 text-sm border-b border-gray-700/50 py-2"
									>
										<span>{b.day}</span>
										<span>{b.hours}</span>
									</div>
								))}
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.form
							onSubmit={handleSubmit}
							variants={itemVariants}
							className="lg:col-span-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl"
						>
							<h3 className="text-xl font-semibold text-white mb-4">Send us a message</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={form.name}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors cursor-text"
									required
								/>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={form.email}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors cursor-text"
									required
								/>
								<textarea
									name="message"
									placeholder="Your Message"
									rows="6"
									value={form.message}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors md:col-span-2 cursor-text"
									required
								/>
							</div>
							<div className="mt-4">
								<button
									type="submit"
									className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
								>
									Send Message
								</button>
								{submitted && (
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="ml-3 text-amber-400"
									>
										Thanks! We'll get back soon.
									</motion.span>
								)}
							</div>
						</motion.form>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default Contact;
