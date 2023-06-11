import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './header.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Dtroffle Merchandise</h3>
			<nav ref={navRef}>
				<a href="/#">Discounted Coupons</a>
				<a href="/#">My Cart</a>
				<a href="/#">Previous orders</a>
				<a href="/#">Credits</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;