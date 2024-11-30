import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../src/img/logo1.png';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle menu function
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Close menu when scrolling
	useEffect(() => {
		const handleScroll = () => {
			if (isMenuOpen) {
				setIsMenuOpen(false); // Close the menu on scroll
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isMenuOpen]); // Dependency on isMenuOpen to ensure it's updated

	return (
		<header className={isMenuOpen ? 'menu-open' : ''}>
			<div className='header-container'>
				<div className='logo-toggle-container'>
					<div className='logo'>
						<Link to='/'>
							<img src={logo} alt='Logo' />
						</Link>
					</div>
					<button
						className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label='Toggle navigation menu'
					>
						<span className='hamburger'></span>
					</button>
				</div>
				<nav className={isMenuOpen ? 'active' : ''}>
					<ul>
						<li>
							<Link to='/'>HOME</Link>
						</li>
						<li>
							<Link to='/product'>PRODUCT</Link>
						</li>
						<li>
							<Link to='/about'>ABOUT</Link>
						</li>
						<li>
							<Link to='/contact'>CONTACT</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
