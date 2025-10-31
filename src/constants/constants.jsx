import hookahImg from "../assets/hookah.png";
import hookah2Img from "../assets/hookah2.png";
import logoImg from "../assets/logo.png";

// Product Categories
export const PRODUCT_CATEGORIES = [
	{ id: "all", name: "All Products", icon: "🛍️" },
	{ id: "hookah", name: "Hookahs", icon: "🚬" },
	{ id: "vaping", name: "Vaping", icon: "💨" },
	{ id: "tobacco", name: "Tobacco", icon: "🍃" },
	{ id: "accessories", name: "Accessories", icon: "🔧" },
];

// All Products Data
export const PRODUCTS_DATA = [
	// Hookahs
	{
		id: 1,
		name: "Traditional Hookah",
		category: "hookah",
		price: 89.99,
		image: hookahImg,
		description: "Classic traditional hookah with brass base",
		rating: 4.5,
		inStock: true,
		flavors: ["Apple", "Mint", "Grape", "Strawberry"],
		details: "Handcrafted brass hookah with traditional design. Includes hose, bowl, and base. Perfect for authentic smoking experience.",
		specifications: {
			Material: "Brass",
			Height: "24 inches",
			Weight: "2.5 kg",
			Includes: "Hose, Bowl, Base, Tongs",
			Warranty: "1 Year",
		},
	},
	{
		id: 2,
		name: "Modern Glass Hookah",
		category: "hookah",
		price: 149.99,
		image: hookah2Img,
		description: "Contemporary glass hookah with LED lights",
		rating: 4.8,
		inStock: true,
		flavors: ["Blueberry", "Watermelon", "Pineapple", "Cherry"],
		details: "Modern glass hookah featuring LED lighting system. Includes premium hose and glass bowl. Perfect for parties and gatherings.",
		specifications: {
			Material: "Glass & Stainless Steel",
			Height: "28 inches",
			Weight: "3.2 kg",
			Includes: "LED Base, Premium Hose, Glass Bowl, Remote",
			Warranty: "2 Years",
		},
	},
	{
		id: 3,
		name: "Portable Hookah",
		category: "hookah",
		price: 69.99,
		image: hookahImg,
		description: "Compact travel-friendly hookah",
		rating: 4.2,
		inStock: false,
		flavors: ["Mint", "Lemon", "Orange"],
		details: "Compact and portable hookah perfect for travel. Easy to assemble and disassemble. Includes carrying case.",
		specifications: {
			Material: "Aluminum",
			Height: "18 inches",
			Weight: "1.8 kg",
			Includes: "Travel Case, Hose, Bowl, Base",
			Warranty: "6 Months",
		},
	},
	// Vaping
	{
		id: 4,
		name: "Vape Pen Starter Kit",
		category: "vaping",
		price: 39.99,
		image: hookah2Img,
		description: "Complete vaping starter kit for beginners",
		rating: 4.3,
		inStock: true,
		flavors: ["Tobacco", "Menthol", "Vanilla", "Coffee"],
		details: "Complete starter kit includes vape pen, charger, and 3 e-liquid bottles. Perfect for beginners.",
		specifications: {
			Battery: "650mAh",
			Capacity: "2ml",
			Includes: "Vape Pen, Charger, 3 E-liquids",
			Warranty: "1 Year",
		},
	},
	{
		id: 5,
		name: "Premium E-Liquid Set",
		category: "vaping",
		price: 24.99,
		image: hookahImg,
		description: "Assorted premium e-liquid flavors",
		rating: 4.6,
		inStock: true,
		flavors: ["Strawberry", "Blueberry", "Mango", "Peach", "Watermelon"],
		details: "Premium e-liquid set with 5 different flavors. Each bottle contains 30ml of high-quality liquid.",
		specifications: {
			Volume: "30ml each",
			Nicotine: "0-18mg",
			"PG/VG": "30/70",
			Count: "5 bottles",
			Expiry: "2 years",
		},
	},
	{
		id: 6,
		name: "Vape Mod Device",
		category: "vaping",
		price: 79.99,
		image: hookah2Img,
		description: "Advanced vaping mod with temperature control",
		rating: 4.7,
		inStock: true,
		flavors: ["Customizable", "Any flavor compatible"],
		details: "Advanced vaping mod with temperature control and variable wattage. Compatible with all e-liquids.",
		specifications: {
			Battery: "Dual 18650",
			Wattage: "200W max",
			Temperature: "100-315°C",
			Includes: "Mod, Tank, Coils",
			Warranty: "1 Year",
		},
	},
	// Tobacco
	{
		id: 7,
		name: "Premium Tobacco Blend",
		category: "tobacco",
		price: 12.99,
		image: hookahImg,
		description: "Handcrafted premium tobacco blend",
		rating: 4.4,
		inStock: true,
		flavors: ["Virginia", "Burley", "Oriental", "Cavendish"],
		details: "Handcrafted premium tobacco blend made from the finest leaves. Available in 50g and 100g packages.",
		specifications: {
			Weight: "50g/100g",
			Origin: "Multiple regions",
			Cut: "Fine cut",
			Moisture: "Optimal",
			Storage: "Airtight container",
		},
	},
	{
		id: 8,
		name: "Rolling Papers Pack",
		category: "tobacco",
		price: 4.99,
		image: hookah2Img,
		description: "High-quality rolling papers (50 sheets)",
		rating: 4.1,
		inStock: true,
		flavors: ["Natural", "Hemp", "Rice", "Flax"],
		details: "High-quality rolling papers available in different materials. Each pack contains 50 sheets.",
		specifications: {
			Count: "50 sheets",
			Size: "1.25 inch",
			Material: "Various",
			Thickness: "Ultra-thin",
			Bleaching: "Natural",
		},
	},
	{
		id: 9,
		name: "Tobacco Filters",
		category: "tobacco",
		price: 6.99,
		image: hookahImg,
		description: "Premium tobacco filters (100 count)",
		rating: 4.0,
		inStock: true,
		flavors: ["Activated charcoal", "Cotton", "Cellulose"],
		details: "Premium tobacco filters available in different materials. Each pack contains 100 filters.",
		specifications: {
			Count: "100 filters",
			Size: "6mm",
			Material: "Various",
			Length: "15mm",
			Filtration: "High efficiency",
		},
	},
	// Accessories
	{
		id: 10,
		name: "Premium Lighter",
		category: "accessories",
		price: 19.99,
		image: hookah2Img,
		description: "Windproof premium lighter",
		rating: 4.5,
		inStock: true,
		flavors: ["Butane", "Electric", "Plasma"],
		details: "Windproof premium lighter with adjustable flame. Available in different fuel types.",
		specifications: {
			Fuel: "Butane",
			Capacity: "12ml",
			Flame: "Adjustable",
			Windproof: "Yes",
			Warranty: "1 Year",
		},
	},
	{
		id: 11,
		name: "Glass Ashtray",
		category: "accessories",
		price: 14.99,
		image: hookahImg,
		description: "Elegant glass ashtray with holder",
		rating: 4.2,
		inStock: true,
		flavors: ["Clear", "Smoked", "Colored"],
		details: "Elegant glass ashtray with built-in holder. Available in different colors and finishes.",
		specifications: {
			Material: "Glass",
			Diameter: "6 inches",
			Height: "2 inches",
			Features: "Built-in holder",
			Care: "Hand wash",
		},
	},
	{
		id: 12,
		name: "Tobacco Storage Jar",
		category: "accessories",
		price: 29.99,
		image: hookah2Img,
		description: "Airtight tobacco storage jar",
		rating: 4.6,
		inStock: false,
		flavors: ["Glass", "Ceramic", "Metal"],
		details: "Airtight tobacco storage jar to preserve freshness. Available in different materials and sizes.",
		specifications: {
			Material: "Glass",
			Capacity: "250ml",
			Seal: "Airtight",
			Features: "UV protection",
			Care: "Dishwasher safe",
		},
	},
];

// Featured Section Data
export const FEATURED_SECTION_DATA = [
	{
		icon: "FaShieldAlt",
		title: "Quality Products",
		description: "We offer reliable tobacco products and accessories that meet your smoking needs with consistent quality standards",
		gradient: "from-amber-400 to-orange-500",
	},
	{
		icon: "FaStar",
		title: "Good Selection",
		description: "Browse through our variety of hookahs, vaping products, tobacco, and smoking accessories in one place",
		gradient: "from-yellow-400 to-amber-500",
	},
	{
		icon: "FaHandshake",
		title: "Friendly Service",
		description: "Get helpful advice and recommendations from our knowledgeable staff to find the right products for you",
		gradient: "from-red-400 to-pink-500",
	},
	{
		icon: "FaUsers",
		title: "Local Shop",
		description: "Support your local tobacco shop with personalized service and community-focused business approach",
		gradient: "from-gray-400 to-gray-600",
	},
];

// Product Showcase Data
export const PRODUCT_SHOWCASE_DATA = [
	{
		id: "hookah",
		title: "Hookah Collection",
		description: "Quality hookahs and accessories for your smoking experience",
		image: hookahImg,
		gradient: "from-amber-400 to-orange-500",
		features: ["Traditional Hookahs", "Modern Designs", "Accessories"],
	},
	{
		id: "vaping",
		title: "Vaping Products",
		description: "Vaping devices, e-liquids, and replacement parts",
		image: hookah2Img,
		gradient: "from-red-400 to-pink-500",
		features: ["Vape Devices", "E-Liquids", "Coils & Parts"],
	},
	{
		id: "tobacco",
		title: "Tobacco Products",
		description: "Various tobacco blends and smoking accessories",
		image: hookahImg,
		gradient: "from-yellow-400 to-amber-500",
		features: ["Tobacco Blends", "Rolling Papers", "Filters"],
	},
	{
		id: "accessories",
		title: "Smoking Accessories",
		description: "Essential accessories for tobacco and smoking enthusiasts",
		image: hookah2Img,
		gradient: "from-gray-400 to-gray-600",
		features: ["Lighters", "Ashtrays", "Storage"],
	},
];

// Footer Data
export const FOOTER_DATA = {
	quickLinks: [
		{ name: "Home", path: "/" },
		{ name: "Products", path: "/products" },
		{ name: "About Us", path: "/about" },
		{ name: "Contact", path: "/contact" },
	],
	productCategories: [
		{ name: "Hookahs", path: "/products?category=hookah" },
		{ name: "Vaping", path: "/products?category=vaping" },
		{ name: "Tobacco", path: "/products?category=tobacco" },
		{ name: "Accessories", path: "/products?category=accessories" },
	],
	businessHours: [
		{ day: "Saturday - Sunday", hours: "10:00 AM - 10:00 PM" },
		{ day: "Monday - Tuesday", hours: "10:00 AM - 08:00 PM" },
		{ day: "Wednesday - Friday", hours: "10:00 AM - 10:00 PM" },
	],
	socialLinks: [
		{ name: "Facebook", icon: "FaFacebook", url: "#", color: "hover:text-blue-500" },
		{ name: "Instagram", icon: "FaInstagram", url: "#", color: "hover:text-pink-500" },
		{ name: "Twitter", icon: "FaTwitter", url: "#", color: "hover:text-blue-400" },
		{ name: "WhatsApp", icon: "FaWhatsapp", url: "#", color: "hover:text-green-500" },
	],
	contactInfo: {
		phone: "+1 (859)-608-1400",
		email: "-",
		address: {
			street: "537 Waller Ave",
			city: "Lexington, KY, 40504",
		},
	},
};

// Navigation Data
export const NAVIGATION_DATA = [
	{ to: "/", text: "Home" },
	{ to: "/products", text: "All Products" },
	{ to: "/contact", text: "Contact" },
];

// Company Information
export const COMPANY_INFO = {
	name: "Tobacco N Things",
	description: "Your local tobacco shop offering quality products, friendly service, and a wide selection of smoking accessories.",
	logo: logoImg,
};
