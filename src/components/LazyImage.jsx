import { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, eager = false, rootMargin = "500px", fetchPriority, sizes, srcSet, showSkeleton = true, skeletonClassName, placeholder }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageError, setImageError] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		if (!src) return;

		// Eager: load immediately without waiting for intersection
		if (eager) {
			setImageSrc(src);
			return;
		}

		// For non-eager images, use a more aggressive rootMargin for faster loading
		// Also check if element is already in viewport before setting up observer
		if (imgRef.current) {
			const rect = imgRef.current.getBoundingClientRect();
			const isInViewport = rect.top < window.innerHeight + parseFloat(rootMargin) && rect.bottom > -parseFloat(rootMargin);

			if (isInViewport) {
				// Already visible or very close, load immediately
				setImageSrc(src);
				return;
			}
		}

		// Intersection Observer for lazy loading with optimized settings
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setImageSrc(src);
						observer.disconnect();
					}
				});
			},
			{
				rootMargin,
				threshold: 0.01, // Trigger as soon as 1% is visible
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [src, eager, rootMargin]);

	const handleLoad = () => {
		setImageLoaded(true);
	};

	const handleError = () => {
		setImageError(true);
		setImageLoaded(false);
	};

	return (
		<div
			ref={imgRef}
			className={`relative overflow-hidden ${className || ""}`}
		>
			{/* Placeholder/loading state */}
			{showSkeleton && !imageLoaded && !imageError && (
				placeholder ? (
					<div className={`absolute inset-0 ${skeletonClassName || ""}`}>{placeholder}</div>
				) : (
					<div className={`absolute inset-0 overflow-hidden ${skeletonClassName || ""}`}>
						<div className="w-full h-full bg-gray-800/80">
							<div className="relative w-full h-full overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: "shimmer 1.6s infinite" }}></div>
							</div>
						</div>
					</div>
				)
			)}

			{/* Error state */}
			{imageError && (
				<div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
					<div className="text-center text-gray-500">
						<svg
							className="w-8 h-8 mx-auto mb-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p className="text-xs">Failed to load</p>
					</div>
				</div>
			)}

			{/* Actual image */}
			{imageSrc && (
				<img
					src={imageSrc}
					alt={alt || ""}
					onLoad={handleLoad}
					onError={handleError}
					className={`transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"} ${className || "w-full h-full object-cover"}`}
					loading={eager ? "eager" : "lazy"}
					decoding="async"
					fetchpriority={fetchPriority || (eager ? "high" : undefined)}
					sizes={sizes}
					srcSet={srcSet}
				/>
			)}
		</div>
	);
};

export default LazyImage;

/*
Shimmer keyframes via Tailwind's arbitrary animation are referenced above.
If your Tailwind config doesn't allow arbitrary animations, you can add the following CSS globally:
@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
*/
