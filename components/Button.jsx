// LearnMoreButton.jsx
import React from 'react';
import './Button.css';

function Button({ text, href }) {
	// Accepting text and href as props
	return (
		<div className='learn-more'>
			<a href={href} className='learn-more-button'>
				{text}
			</a>
		</div>
	);
}

export default Button;
