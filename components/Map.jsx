import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import the CSS file

const Map = () => {
	const bhatkalPosition = [13.997762, 74.540466];

	return (
		<div className='map-container'>
			<MapContainer
				center={bhatkalPosition}
				zoom={10}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={bhatkalPosition}>
					<Popup>Euclase Company Location - Bhatkal</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
