import { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageError, setImageError] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		if (!src) return;

		// Intersection Observer for lazy loading
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
				rootMargin: "50px", // Start loading 50px before image is visible
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [src]);

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
			{!imageLoaded && !imageError && (
				<div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-pulse flex items-center justify-center">
					<svg
						className="w-8 h-8 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
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
					loading="lazy"
					decoding="async"
				/>
			)}
		</div>
	);
};

export default LazyImage;
