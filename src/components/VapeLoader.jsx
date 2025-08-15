import React from "react";

const VapeLoader = () => {
	return (
		<div className="flex items-center justify-center min-h-[50vh]">
			<div className="relative">
				{/* Smoke particles near the lit end */}
				<div className="absolute -top-5 right-3">
					<div className="smoke-particle-1"></div>
					<div className="smoke-particle-2"></div>
					<div className="smoke-particle-3"></div>
				</div>

				{/* Cigar SVG */}
				<svg
					width="200"
					height="52"
					viewBox="0 0 220 60"
				>
					{/* Cigar body */}
					<defs>
						<linearGradient
							id="cigarBody"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset="0%"
								stopColor="#6F4A2E"
							/>
							<stop
								offset="100%"
								stopColor="#4B3422"
							/>
						</linearGradient>
						<radialGradient
							id="ember"
							cx="50%"
							cy="50%"
							r="50%"
						>
							<stop
								offset="0%"
								stopColor="#FCD34D"
							/>
							<stop
								offset="55%"
								stopColor="#F59E0B"
							/>
							<stop
								offset="100%"
								stopColor="#DC2626"
							/>
						</radialGradient>
					</defs>

					<rect
						x="10"
						y="15"
						width="180"
						height="30"
						rx="15"
						fill="url(#cigarBody)"
						stroke="#3A2A1C"
						strokeWidth="1.5"
					/>

					{/* Subtle band */}
					<rect
						x="82"
						y="19"
						width="24"
						height="22"
						rx="11"
						fill="#C4A484"
						opacity="0.18"
					/>

					{/* Ash ring near lit end */}
					<rect
						x="188"
						y="17"
						width="5"
						height="26"
						rx="2.5"
						fill="#C9CED6"
						opacity="0.85"
					/>

					{/* Lit end (ember) */}
					<circle
						cx="202"
						cy="30"
						r="10"
						fill="url(#ember)"
					/>
					{/* Very subtle ember rings */}
					<circle
						cx="202"
						cy="30"
						r="7"
						fill="transparent"
						stroke="#FFFFFF"
						strokeOpacity="0.12"
						strokeWidth="1"
					/>
					<circle
						cx="202"
						cy="30"
						r="5"
						fill="transparent"
						stroke="#000000"
						strokeOpacity="0.1"
						strokeWidth="1"
					/>
				</svg>

				{/* Subtle ember glow */}
				<div
					className="absolute top-[32px] right-[8px] w-12 h-5 -translate-y-1"
					style={{ filter: "blur(5px)" }}
				>
					<div
						className="w-full h-full rounded-full"
						style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.25) 0%, rgba(220,38,38,0.18) 50%, transparent 70%)" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default VapeLoader;
