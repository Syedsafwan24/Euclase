import React from 'react';
import './Product.css';
import ProductDetails from './ProductDetails';

function Product() {
	return (
		<div>
			{/* Background section */}
			<div className='product-header'>
				<div className='product-header-text'>PRODUCTS</div>
			</div>
			<ProductDetails />
		</div>
	);
}

export default Product;
