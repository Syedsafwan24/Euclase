import React, { useState } from 'react';
import './css/contact.css';
import Header from '../../components/Header';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Form submitted!');
		// Here, you can add form submission logic, e.g., sending the data to a backend.
	};

	return (
		<>
			<Header />
			<div className='contact-container'>
				<h1 className='contact-title'>Get in Touch</h1>
				<form className='contact-form' onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Your Name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<textarea
						name='message'
						placeholder='Your Message'
						value={formData.message}
						onChange={handleChange}
						rows='6'
						required
					/>
					<button type='submit'>Send Message</button>
				</form>
				<div className='contact-footer'>
					<p>&copy; 2024 Your Company. All rights reserved.</p>
				</div>
			</div>
		</>
	);
};

export default Contact;
