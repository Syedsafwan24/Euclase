import React from 'react';
import './Footer.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className='footer-container'>
			<div className='footer-column'>
				<h4>Masters in industrial manufacturing</h4>
				<p>with 25 years of experience and 10+ awards!</p>
			</div>
			<div className='footer-column'>
				<h4>Products</h4>
				<ul>
					<li>Roller Chain Drives</li>
					<li>Gear Couplings</li>
					<li>Conveyor Chains</li>
					<li>Marine Bearings</li>
					<li>Saving Investments</li>
					<li>Gear Drives</li>
					<li>Industrial Shafts</li>
					<li>Mechanical Drives</li>
					<li>Conveyor Belts</li>
					<li>Helical Gears</li>
				</ul>
			</div>
			<div className='footer-column'>
				<h4>Features</h4>
				<ul>
					<li>Enterprise</li>
					<li>Customer Service</li>
					<li>Media & Entertainment</li>
					<li>Product</li>
					<li>Marketing</li>
					<li>Analytics</li>
					<li>Professional Services</li>
				</ul>
			</div>
			<div className='footer-column'>
				<h4>Company</h4>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/product'>Product</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			<div className='footer-bottom'>
				<p>Copyright © 2024 Euclase</p>
				<p>Powered by Euclase</p>
			</div>
		</footer>
	);
}

export default Footer;
