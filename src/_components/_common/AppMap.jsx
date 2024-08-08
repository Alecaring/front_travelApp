import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';


function AppMap({positions, customIcon}) {

    
    return (
        <>
            <div className="containerMap">
                <MapContainer
                    center={[44.505, -0.09]}
                    zoom={3}
                    style={{ height: "100%", width: "100%", zIndex: "-10" }}
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {positions.map(position => (
                        <Marker
                            key={position.key}
                            position={[position.lat, position.lng]}
                            icon={customIcon} // Usa l'icona personalizzata qui
                        >
                            <Popup>{position.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>



            {/* <div class="container">
                <div class="post">
                    <div class="avatar"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div> */}
        </>
    )
};

export default AppMap;