// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../src/img/logo1.png';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<header className={isMenuOpen ? 'menu-open' : ''}>
				<figure className='logo'>
					<Link to='/' onClick={closeMenu}>
						<img src={logo} alt='Logo' />
					</Link>
				</figure>

				<button
					className='menu-toggle'
					onClick={toggleMenu}
					aria-expanded={isMenuOpen}
					aria-label='Toggle navigation menu'
				>
					<span className='hamburger'></span>
				</button>

				<nav className={isMenuOpen ? 'active' : ''}>
					<ul>
						<li>
							<Link to='/' onClick={closeMenu}>
								HOME
							</Link>
						</li>
						<li>
							<Link to='/product' onClick={closeMenu}>
								PRODUCT
							</Link>
						</li>
						<li>
							<Link to='/about' onClick={closeMenu}>
								ABOUT
							</Link>
						</li>
						<li>
							<Link to='/contact' onClick={closeMenu}>
								CONTACT
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			{isMenuOpen && <div className='overlay' onClick={closeMenu}></div>}
		</>
	);
}

export default Header;
