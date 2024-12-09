import React, { useEffect } from 'react'; // Import React and useEffect
import './Industries.css'; // Import the CSS file
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Import images at the top of the file
import oilImage from './img-indust/oil-1.jpg';
import alloyImage from './img-indust/alloy.jpg';
import automotiveImage from './img-indust/automotive.jpg';
import Button from '../../components/Button';

function Industries() {
	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 1000, // Animation duration
			once: true, // Animation triggers only once
			easing: 'ease-out', // Easing for the animation
		});
	}, []);

	return (
		<div className='industries-section'>
			<div className='intro-text'>
				<h2 data-aos='fade-up'>Industries We Serve!</h2>
				<p data-aos='fade-up' data-aos-delay='300'>
					Explore the industries we are committed to serving with our innovative
					solutions and services.
				</p>
			</div>
			<div className='industries-cards'>
				<div
					className='industry-card'
					data-aos='fade-right'
					data-aos-delay='500'
				>
					<img src={oilImage} alt='Chemical Industries' />
					<h3>Chemical Industries</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
						molestias sapiente distinctio sint eligendi nostrum dignissimos iste
						reiciendis cum voluptates!
					</p>
				</div>
				<div
					className='industry-card'
					data-aos='fade-left'
					data-aos-delay='500'
				>
					<img src={alloyImage} alt='Ferro Alloys' />
					<h3>Ferro Alloys</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
						doloremque nesciunt molestias reiciendis nisi ducimus? Est minima
						doloremque quibusdam deserunt?
					</p>
				</div>
				<div
					className='industry-card'
					data-aos='fade-right'
					data-aos-delay='500'
				>
					<img src={automotiveImage} alt='Mechanical Supplies' />
					<h3>Mechanical Supplies</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
						doloremque nesciunt molestias reiciendis nisi ducimus? Est minima
						doloremque quibusdam deserunt?
					</p>
				</div>
			</div>
			<div className='learn-more' data-aos='fade-up'>
				<Button text='Learn More' href='/product' />
			</div>
		</div>
	);
}

export default Industries;
