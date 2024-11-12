// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import only Link for navigation
import './style.css';
import logo from './img/logo1.png'; // Adjusted import

function Header() {
	return (
		<header>
			<figure className='logo'>
				<img src={logo} alt='Logo' />
			</figure>
			<nav>
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
		</header>
	);
}

export default Header;
