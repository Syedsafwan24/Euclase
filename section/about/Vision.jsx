import React, { useState } from 'react';
import './vision.css';

function AboutUs() {
	const [activeSection, setActiveSection] = useState('about');

	const renderContent = () => {
		switch (activeSection) {
			case 'about':
				return (
					<div className='section'>
						<h2 className='section-title'>About Us</h2>
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
				);
			case 'vision':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Vision</h2>
						<p className='section-text'>
							At Euclase, our vision is to revolutionize the industry by
							fostering creativity, innovation, and excellence. We aim to create
							sustainable solutions that empower individuals and organizations
							to achieve their goals effectively.
						</p>
					</div>
				);
			case 'mission':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Mission</h2>
						<p className='section-text'>
							Our mission at Euclase is to deliver high-quality solutions that
							meet the needs of our clients and the community. We are committed
							to fostering innovation, ensuring excellence, and promoting
							ethical practices in everything we do.
						</p>
					</div>
				);
			case 'values':
				return (
					<div className='section'>
						<h2 className='section-title'>Our Values</h2>
						<ul className='values-list'>
							<li>Integrity: Upholding the highest ethical standards.</li>
							<li>Innovation: Driving creative solutions to challenges.</li>
							<li>
								Sustainability: Ensuring long-term success for future
								generations.
							</li>
							<li>Excellence: Striving for perfection in all we do.</li>
						</ul>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<section className='about-section'>
			<div className='about-container'>
				{/* Left Navigation */}
				<div className='navigation'>
					<ul className='nav-list'>
						<li
							className={
								activeSection === 'about' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('about')}
						>
							About
						</li>
						<li
							className={
								activeSection === 'vision' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('vision')}
						>
							Vision
						</li>
						<li
							className={
								activeSection === 'mission' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('mission')}
						>
							Mission
						</li>
						<li
							className={
								activeSection === 'values' ? 'nav-item active' : 'nav-item'
							}
							onClick={() => setActiveSection('values')}
						>
							Values
						</li>
					</ul>
				</div>

				{/* Right Content */}
				<div className='content'>{renderContent()}</div>
			</div>
		</section>
	);
}

export default AboutUs;
