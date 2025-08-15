import React from "react";

const BoundaryLoader = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<svg
				width="140"
				height="140"
				viewBox="0 0 140 140"
				role="img"
				aria-label="Loading"
			>
				<defs>
					<linearGradient
						id="loaderStroke"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							stopColor="#f59e0b"
						/>
						<stop
							offset="100%"
							stopColor="#ef4444"
						/>
					</linearGradient>
				</defs>

				{/* Outer rounded rectangle boundary */}
				<rect
					x="10"
					y="10"
					width="120"
					height="120"
					rx="18"
					fill="transparent"
					stroke="url(#loaderStroke)"
					strokeWidth="4"
					strokeLinecap="round"
					strokeDasharray="480"
					strokeDashoffset="480"
				>
					<animate
						attributeName="stroke-dashoffset"
						from="480"
						to="0"
						dur="1.4s"
						repeatCount="indefinite"
					/>
				</rect>

				{/* Inner rounded rectangle, delayed draw for subtlety */}
				<rect
					x="28"
					y="28"
					width="84"
					height="84"
					rx="14"
					fill="transparent"
					stroke="#9ca3af"
					strokeOpacity="0.35"
					strokeWidth="2"
					strokeDasharray="300"
					strokeDashoffset="300"
				>
					<animate
						attributeName="stroke-dashoffset"
						from="300"
						to="0"
						dur="1.4s"
						begin="0.25s"
						repeatCount="indefinite"
					/>
				</rect>

				{/* Center pulse */}
				<circle
					cx="70"
					cy="70"
					r="6"
					fill="#f59e0b"
					fillOpacity="0.6"
				>
					<animate
						attributeName="r"
						values="4;6;4"
						dur="1.2s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="fill-opacity"
						values="0.4;0.7;0.4"
						dur="1.2s"
						repeatCount="indefinite"
					/>
				</circle>
			</svg>
		</div>
	);
};

export default BoundaryLoader;
