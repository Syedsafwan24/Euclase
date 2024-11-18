// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import './style.css';
import Home from './pages/Home';
import Contactpage from './pages/Contactpage';

function App() {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contactpage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
