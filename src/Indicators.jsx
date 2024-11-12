import React from 'react';
import './style.css';

function Indicators({ total, activeIndex, onClick }) {
	return (
		<div className='indicators'>
			<div className='number'>{String(activeIndex + 1).padStart(2, '0')}</div>
			<ul>
				{Array.from({ length: total }).map((_, index) => (
					<li
						key={index}
						className={index === activeIndex ? 'active' : ''}
						onClick={() => onClick(index)}
					/>
				))}
			</ul>
		</div>
	);
}

export default Indicators;
