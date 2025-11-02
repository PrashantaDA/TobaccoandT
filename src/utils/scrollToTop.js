/**
 * Utility function to scroll to top of page smoothly
 * @param {Object} options - Optional configuration
 * @param {number} options.top - Scroll position (default: 0)
 * @param {string} options.behavior - Scroll behavior (default: "smooth")
 */
export const scrollToTop = (options = {}) => {
	const { top = 0, behavior = "smooth" } = options;
	window.scrollTo({ top, behavior });
};

