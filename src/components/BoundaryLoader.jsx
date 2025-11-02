const BoundaryLoader = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
			{/* Smoke particles for ambiance */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Smoke particle 1 */}
				<div
					className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-t from-amber-400/30 to-transparent rounded-full blur-sm animate-pulse"
					style={{ animationDelay: "0s", animationDuration: "3s" }}
				></div>
				{/* Smoke particle 2 */}
				<div
					className="absolute top-1/3 right-1/4 w-2 h-2 bg-gradient-to-t from-orange-400/25 to-transparent rounded-full blur-sm animate-pulse"
					style={{ animationDelay: "1s", animationDuration: "2.5s" }}
				></div>
				{/* Smoke particle 3 */}
				<div
					className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-sm animate-pulse"
					style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
				></div>
			</div>

			<div className="relative">
				{/* Main loader circle */}
				<svg
					width="120"
					height="120"
					viewBox="0 0 120 120"
					className="relative z-10"
					role="img"
					aria-label="Loading"
				>
					<defs>
						{/* Amber to orange to yellow gradient - matches project theme */}
						<linearGradient
							id="loaderGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								stopColor="#fbbf24"
								stopOpacity="1"
							/>
							<stop
								offset="33%"
								stopColor="#f59e0b"
								stopOpacity="1"
							/>
							<stop
								offset="66%"
								stopColor="#ea580c"
								stopOpacity="1"
							/>
							<stop
								offset="100%"
								stopColor="#eab308"
								stopOpacity="1"
							/>
						</linearGradient>
						{/* Glow effect */}
						<radialGradient id="glowGradient">
							<stop
								offset="0%"
								stopColor="#fbbf24"
								stopOpacity="0.6"
							/>
							<stop
								offset="100%"
								stopColor="#f59e0b"
								stopOpacity="0"
							/>
						</radialGradient>
						{/* Inner glow */}
						<radialGradient id="innerGlow">
							<stop
								offset="0%"
								stopColor="#f59e0b"
								stopOpacity="0.9"
							/>
							<stop
								offset="100%"
								stopColor="#ea580c"
								stopOpacity="0"
							/>
						</radialGradient>
					</defs>

					{/* Outer rotating circle */}
					<circle
						cx="60"
						cy="60"
						r="50"
						fill="none"
						stroke="url(#loaderGradient)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeDasharray="314"
						strokeDashoffset="314"
						opacity="0.9"
					>
						<animate
							attributeName="stroke-dashoffset"
							values="314;0;314"
							dur="2s"
							repeatCount="indefinite"
						/>
					</circle>

					{/* Inner counter-rotating circle */}
					<circle
						cx="60"
						cy="60"
						r="38"
						fill="none"
						stroke="url(#loaderGradient)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeDasharray="240"
						strokeDashoffset="240"
						opacity="0.7"
						transform="rotate(-180 60 60)"
					>
						<animate
							attributeName="stroke-dashoffset"
							values="240;0;240"
							dur="1.5s"
							repeatCount="indefinite"
						/>
					</circle>

					{/* Center pulsing circle */}
					<circle
						cx="60"
						cy="60"
						r="12"
						fill="url(#glowGradient)"
					>
						<animate
							attributeName="r"
							values="10;14;10"
							dur="1.5s"
							repeatCount="indefinite"
						/>
					</circle>

					{/* Inner core */}
					<circle
						cx="60"
						cy="60"
						r="6"
						fill="url(#innerGlow)"
					>
						<animate
							attributeName="opacity"
							values="0.8;1;0.8"
							dur="1s"
							repeatCount="indefinite"
						/>
					</circle>

					{/* Glow effect around loader */}
					<ellipse
						cx="60"
						cy="60"
						rx="55"
						ry="55"
						fill="url(#glowGradient)"
						opacity="0.5"
					>
						<animate
							attributeName="opacity"
							values="0.3;0.6;0.3"
							dur="2s"
							repeatCount="indefinite"
						/>
					</ellipse>
				</svg>
			</div>

			{/* Animated dots with amber/orange/yellow color scheme */}
			<div className="flex gap-2 mt-16">
				<div
					className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
					style={{ animationDelay: "0s", animationDuration: "1s" }}
				></div>
				<div
					className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
					style={{ animationDelay: "0.2s", animationDuration: "1s" }}
				></div>
				<div
					className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
					style={{ animationDelay: "0.4s", animationDuration: "1s" }}
				></div>
			</div>
		</div>
	);
};

export default BoundaryLoader;
