import React from 'react';
import './About.css';
import euclaseLogo from '../../src/img/logo1.png'; // Adjust path as needed

function About() {
	return (
		<div className='about-container'>
			<div className='about-header'>
				<h1>About Us</h1>
				<h1>
					25 Long Years of Manufacturing <br /> Excellence With Quality at Its
					Best!
				</h1>
			</div>
			<div className='about-content-wrapper'>
				<div className='about-logo'>
					<img src={euclaseLogo} alt='Euclase Logo' />
				</div>
				<div className='about-content'>
					<p>
						We are pleased to introduce Euclase, an emerging company founded by
						professionals with extensive experience in supplying industrial
						goods and materials to key players within the oil and gas sector.
						While Euclase is in the formation process, our founders have a
						robust history of engagement with organizations that have supplied
						directly to major entities like SABIC, Hadeed, KOC, and KNPC. This
						background equips us with a solid understanding of the high
						standards and specific needs of the industry.
					</p>
					<p>
						Euclase is focused on providing top-tier sourcing solutions for
						instrumentation, high-efficiency motors, mechanical valves, and a
						wide array of engineering goods. In addition, we supply essential
						construction materials, including fasteners, as well as ferro alloys
						widely used in the steel industry, and epoxy coatings for corrosion
						protection—all tailored to support projects requiring reliable and
						efficient resources.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
