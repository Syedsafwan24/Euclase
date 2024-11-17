import React, { useState, useEffect } from 'react';
import './css/contact.css';
import Header from '../../components/Header';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSent, setIsSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace with your EmailJS service and template details
		const serviceID = 'service_lbs66wd';
		const templateID = 'template_bdtxh17';
		const publicKey = 'eESU8_c7bEh5fhZSb';

		// Prepare the template parameters
		const templateParams = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		// Send the email using EmailJS
		emailjs
			.send(serviceID, templateID, templateParams, publicKey)
			.then(() => {
				setIsSent(true); // Update success state
				setErrorMessage('');
				setFormData({ name: '', email: '', message: '' }); // Reset form fields
			})
			.catch((error) => {
				setErrorMessage('Failed to send the message, please try again.');
				console.error('EmailJS Error:', error);
			});
	};

	// Reset success message after a delay
	useEffect(() => {
		if (isSent) {
			const timer = setTimeout(() => setIsSent(false), 5000); // Clear success state after 5 seconds
			return () => clearTimeout(timer);
		}
	}, [isSent]);

	return (
		<>
			<Header />
			<div className='contact-container'>
				<h1 className='contact-title'>Get in Touch</h1>

				{/* Display success or error messages */}
				{isSent && (
					<p className='success-message'>
						Your message has been sent successfully!
					</p>
				)}
				{errorMessage && <p className='error-message'>{errorMessage}</p>}

				{/* Contact form */}
				<form className='contact-form' onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Your Name'
						aria-label='Enter your name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						aria-label='Enter your email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<textarea
						name='message'
						placeholder='Your Message'
						aria-label='Enter your message'
						value={formData.message}
						onChange={handleChange}
						rows='6'
						required
					/>
					<button type='submit' className='contact-button'>
						Send Message
					</button>
				</form>

				{/* Footer */}
				<div className='contact-footer'>
					<p>
						&copy; 2024 Euclase. Designed with care in Bhatkal. All rights
						reserved.
					</p>
				</div>
			</div>
		</>
	);
};

export default Contact;
