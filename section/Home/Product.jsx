import React, { useEffect } from 'react';
import './Product.css';
import Button from '../../components/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
	const products = [
		{
			title: 'SPECIALIZED CHEMICALS',
			description:
				'Specialized chemicals are high-value chemicals crafted for specific applications across industries such as pharmaceuticals, agriculture, electronics, and cosmetics. Unlike bulk chemicals, these are produced in smaller quantities with unique formulations for precise functions. Examples include surfactants for cleaning, adhesives for construction, biocides for crop protection, and specialty polymers for electronics.',
		},
		{
			title: 'FERRO ALLOYS',
			description:
				'Ferro alloys are iron-based alloys that add elements like chromium, manganese, and silicon to enhance steel’s properties such as strength, toughness, and corrosion resistance. Essential in steelmaking, they are widely used in construction, automotive, and manufacturing for high-strength materials.',
		},
		{
			title: 'MECHANICAL SUPPLIES',
			description:
				'Mechanical supplies include pipes, valves, pumps, compressors, heat exchangers, bearings, and fasteners. These components are crucial for transporting fluids, controlling flow, managing temperature, and ensuring equipment integrity, supporting safe and efficient operations.',
		},
	];

	// Initialize AOS
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className='products-section'>
			<div className='intro-text' data-aos='fade-up'>
				<h2> Discover Our Expertise</h2>
				<p>
					We are the industry heads and produce the most reliable and trendy
					solution you are looking for.
				</p>
			</div>

			<div className='products-container'>
				{products.map((product, index) => (
					<div key={index} className='product-card' data-aos='zoom-in'>
						<h3 className='product-title'>{product.title}</h3>
						<p className='product-description'>{product.description}</p>
					</div>
				))}
			</div>
			<div className='learn-more' data-aos='fade-up'>
				<Button text='Learn More' href='/product' />
			</div>
		</div>
	);
};

export default Product;
