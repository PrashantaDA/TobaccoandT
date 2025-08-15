import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NAVIGATION_DATA, COMPANY_INFO } from "../constants/constants";

// Reusable NavLink component
const NavLink = ({ to, children, onClick }) => (
	<Link
		to={to}
		onClick={onClick}
		className="text-3xl relative group transition-all duration-300 hover:text-white links cursor-pointer"
	>
		<span className="relative z-10">{children}</span>
		<span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-black-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
	</Link>
);

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="w-full bg-transparent min-h-[20dvh] relative">
			{/* Desktop Layout - Preserved Original Styling */}
			<div className="hidden lg:flex justify-evenly items-center w-full gap-20 mx-auto py-2">
				<div className="logo">
					<img
						src={COMPANY_INFO.logo}
						alt="logo"
						className="h-40 w-auto"
					/>
				</div>
				<div className="links flex gap-12">
					{NAVIGATION_DATA.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
						>
							{link.text}
						</NavLink>
					))}
				</div>
			</div>

			{/* Mobile Layout */}
			<div className="lg:hidden flex justify-between items-center w-full gap-4 mx-auto py-2 px-4">
				<div className="logo">
					<img
						src={COMPANY_INFO.logo}
						alt="logo"
						className="h-20 w-auto"
					/>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="text-white text-3xl hover:text-amber-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <HiX /> : <HiMenu />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
					onClick={closeMenu}
				/>
			)}

			{/* Mobile Menu Side Panel */}
			<div
				className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md z-50 border-l border-gray-700 transition-all duration-300 ease-in-out transform ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full">
					{/* Menu Header */}
					<div className="flex justify-end items-center p-6 border-b border-gray-700">
						<button
							onClick={closeMenu}
							className="text-white text-2xl hover:text-red-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer"
							aria-label="Close menu"
						>
							<HiX />
						</button>
					</div>

					{/* Navigation Links */}
					<div className="flex-1 flex flex-col justify-center py-8">
						<div className="space-y-8 text-center">
							{NAVIGATION_DATA.map((link, index) => (
								<div
									key={link.to}
									className="transition-all duration-500 ease-out transform"
									style={{
										animationDelay: isMenuOpen ? `${index * 150}ms` : "0ms",
										transform: isMenuOpen ? "translateX(0)" : "translateX(50px)",
										opacity: isMenuOpen ? 1 : 0,
									}}
								>
									<NavLink
										to={link.to}
										onClick={closeMenu}
									>
										{link.text}
									</NavLink>
								</div>
							))}
						</div>
					</div>

					{/* Contact Details Template */}
					<div className="p-6 border-t border-gray-700">
						<div className="space-y-4 text-gray-300">
							{/* Company Logo/Name */}
							<div className="flex justify-center mb-4">
								<img
									src={COMPANY_INFO.logo}
									alt={COMPANY_INFO.name}
									className="h-12 w-auto"
								/>
							</div>

							{/* Address */}
							<div className="text-center">
								<p className="text-sm leading-relaxed">
									{/* Template - Replace with your actual address */}
									123 Tobacco Street
									<br />
									Vape City, VC 12345
								</p>
							</div>

							{/* Phone */}
							<div className="text-center">
								<p className="text-sm">
									{/* Template - Replace with your actual phone */}
									(555) 123-4567
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
