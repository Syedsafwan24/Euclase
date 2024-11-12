// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import only Link for navigation
// import '../src/style.css';
import './Header.css';
// import logo from '../img/logo1.png'; // Adjusted import
import logo from '../src/img/logo1.png';

function Header() {
	return (
		<header>
			<figure className='logo'>
				<Link to='/'>
					<img src={logo} alt='Logo' />
				</Link>
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
