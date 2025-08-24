import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname, search, hash } = useLocation();
	const [visible, setVisible] = useState(false);
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
		const onScroll = () => setVisible(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			{visible && (
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 cursor-pointer"
					aria-label="Scroll to top"
				>
					↑
				</button>
			)}
		</>
	);
};

export default ScrollToTop;
