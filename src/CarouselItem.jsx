import React from 'react';
import './style.css';

function CarouselItem({ item, active }) {
	return (
		<div className={`item ${active ? 'active' : ''}`}>
			<figure>
				<img src={item.imgSrc} alt={item.category} />
			</figure>
			<div className='content'>
				<p className='category'>{item.category}</p>
				<h2>{item.title}</h2>
				<p className='description'>{item.description}</p>
			</div>
		</div>
	);
}

export default CarouselItem;
