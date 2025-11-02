import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

const ScrollToTop = () => {
	const { pathname, hash } = useLocation();
	const [visible, setVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [prevPathname, setPrevPathname] = useState(pathname);

	useEffect(() => {
		// Only scroll to top if the pathname actually changed (page navigation)
		// Don't scroll when only query parameters change (filters, search, etc.)
		if (pathname !== prevPathname) {
			// If a hash is present, let the browser handle anchor jump
			if (!hash) {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
			setPrevPathname(pathname);
		}
	}, [pathname, hash, prevPathname]);

	useEffect(() => {
		const calculateScrollProgress = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

			setScrollProgress(progress);
			setVisible(scrollTop > 300);
		};

		calculateScrollProgress();
		window.addEventListener("scroll", calculateScrollProgress, { passive: true });
		return () => window.removeEventListener("scroll", calculateScrollProgress);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.6, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.6, y: 20 }}
					transition={{
						duration: 0.3,
						ease: "easeOut",
					}}
					whileHover={{ scale: 1.08 }}
					whileTap={{ scale: 0.92 }}
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 cursor-pointer"
					aria-label="Scroll to top"
				>
					{/* Smoke wisps effect */}
					<div className="relative w-11 h-11">
						{/* Smoke wisp 1 */}
						<motion.div
							className="absolute -top-2 left-1/2 w-2 h-3 bg-gradient-to-t from-gray-400/60 to-transparent rounded-full blur-sm"
							animate={{
								y: [-4, -8, -4],
								x: [-1, 1, -1],
								opacity: [0.4, 0.7, 0.4],
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						{/* Smoke wisp 2 */}
						<motion.div
							className="absolute -top-3 left-1/2 w-1.5 h-2 bg-gradient-to-t from-gray-500/50 to-transparent rounded-full blur-sm"
							animate={{
								y: [-3, -7, -3],
								x: [1, -1, 1],
								opacity: [0.3, 0.6, 0.3],
								scale: [1, 1.3, 1],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0.3,
							}}
						/>

						{/* Background circle with glow */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/25 via-amber-500/20 to-orange-600/25 backdrop-blur-sm border border-amber-500/40 shadow-lg shadow-amber-500/20"></div>

						{/* Progress indicator SVG - smoke-like wavy effect */}
						<svg
							className="absolute inset-0 -rotate-90 transform"
							width="44"
							height="44"
							viewBox="0 0 44 44"
						>
							{/* Background track */}
							<circle
								cx="22"
								cy="22"
								r="20"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								className="text-amber-600/20"
							/>
							{/* Progress track - wavy/smoke effect */}
							<circle
								cx="22"
								cy="22"
								r="20"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeDasharray={`${2 * Math.PI * 20}`}
								strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
								className="text-amber-400/70 transition-all duration-150 ease-out"
								style={{
									filter: "blur(0.5px)",
								}}
							/>
						</svg>

						{/* Main button - hookah bowl inspired design */}
						<div className="absolute inset-0.5 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-700/90 via-amber-600/90 to-orange-600/90 shadow-lg shadow-amber-600/40 hover:from-amber-600/95 hover:via-amber-500/95 hover:to-orange-500/95 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 border border-amber-500/30">
							<motion.div
								animate={{ y: [0, -1.5, 0] }}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<FaArrowUp className="text-white text-sm" />
							</motion.div>
						</div>

						{/* Gentle glow pulse */}
						<motion.div
							className="absolute inset-0 rounded-full bg-amber-400/20"
							animate={{
								scale: [1, 1.4, 1.4],
								opacity: [0.4, 0, 0],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: "easeOut",
							}}
						/>
					</div>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
