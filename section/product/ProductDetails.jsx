import React from 'react';
import './ProductDetails.css';
// import image1 from './3184209.jpg'; // Replace with the actual image paths
// import image2 from './3184209.jpg';
import image1 from './products.jpg';

const ProductDetails = () => {
	return (
		<div className='product-details'>
			<div className='product-details-text'>
				<h5>Optimized & Industry-ready Solutions</h5>
				<h2>For All Your Complicated Needs</h2>
				<p>
					At <b>Euclase</b>, we create solutions designed to meet your unique
					challenges. Our tools are crafted with precision to simplify complex
					tasks, helping you achieve your goals effortlessly and efficiently.
				</p>
				<p>
					Our focus is on delivering high-quality, reliable, and innovative
					products. Whether you need to streamline operations or enhance
					productivity, Euclase empowers you with the technology you need to
					succeed in today’s fast-paced world.
				</p>
			</div>
			<div className='product-details-images'>
				<img src={image1} alt='Industry Tool 1' className='product-image' />
				{/* <img src={image2} alt='Industry Tool 2' className='product-image' /> */}
			</div>
		</div>
	);
};

export default ProductDetails;
