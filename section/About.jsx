import React from 'react';
import './About.css';

function About() {
	return (
		<div className='about-container'>
			<div className='about-header'>
				<h4>About Us</h4>
				<h1>
					25 Long Years of Manufacturing <br /> Excellence With Quality at Its
					Best!
				</h1>
			</div>

			<div className='about-content'>
				{/* First 3 cards */}
				<div className='about-card'>
					<h2>About Euclase</h2>
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
				</div>
				<div className='about-card'>
					<h2>Our Services</h2>
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
				<div className='about-card'>
					<h2>Looking Ahead</h2>
					<p>
						Our representative, Mr. Khurram, recently reached out regarding the
						possibility of exploring a mutually beneficial partnership with your
						company. We are keen to engage directly with your team to discuss
						how we can collaborate effectively and contribute to your expansion
						with the Saudi market. We look forward to the opportunity to connect
						with you to further explore how Euclase can bring value to your
						esteemed company.
					</p>
				</div>

				{/* Lottie Animation iframe (4th card, no card styling) */}
				<div className='about-animation'>
					<iframe
						src='https://lottie.host/embed/22eb3967-ba03-4927-8fad-68899405638c/BoYiJxaCDu.json'
						width='100%'
						height='400'
						frameBorder='0'
						title='Lottie Animation'
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default About;
