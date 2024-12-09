import React from 'react';
import './ProductDetails.css';
import image1 from './3184209.jpg'; // Replace with the actual image paths
import image2 from './3184209.jpg';

const ProductDetails = () => {
	return (
		<div className='product-details'>
			<div className='product-details-text'>
				<h5>Optimized & Industry-ready Solutions</h5>
				<h2>For All Your Complicated Needs</h2>
				<p>
					We build products that fulfill your needs. Click edit button to change
					this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</p>
			</div>
			<div className='product-details-images'>
				<img src={image1} alt='Industry Tool 1' className='product-image' />
				<img src={image2} alt='Industry Tool 2' className='product-image' />
			</div>
		</div>
	);
};

export default ProductDetails;
