// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Carousel from './Carousel';
import Contact from './pages/Contact';
import './style.css';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
