import React from 'react';
import './About.css'; // Ensure the styles are applied
import euclaseLogo from '../../src/img/logo1.png'; // Adjust the path as needed
import Footer from '../../components/Footer';

function About() {
	return (
		<>
			<div className='about-header'>
				<div className='about-header-text'>ABOUT US</div>
			</div>
			<div className='about-container'>
				<div className='about-content-wrapper'>
					{/* Left Side - Logo */}
					<div className='about-logo'>
						<img src={euclaseLogo} alt='Euclase Logo' />
					</div>
					{/* Right Side - Content */}
					<div className='about-content'>
						<h1>High Quality Tactical Solutions</h1>
						<h2>Finding A Permanent Solution Is Our Ultimate Goal!</h2>
						<p>
							We are pleased to introduce Euclase, an emerging company founded
							by professionals with extensive experience in supplying industrial
							goods and materials to key players within the oil and gas sector.
						</p>
						<p>
							While Euclase is in the formation process, our founders have a
							robust history of engagement with organizations that have supplied
							directly to major entities like SABIC, Hadeed, KOC, and KNPC. This
							background equips us with a solid understanding of the high
							standards and specific needs of the industry.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default About;
