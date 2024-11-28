import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});


const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/coordinates/')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <MapContainer
            center={[51.505, -0.09]} // Default map center (latitude, longitude)
            zoom={5} // Zoom level
            style={{ height: "500px", width: "100%" }} // Set map size
        >
        {/* Add a tile layer (map background) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
  
        {/* Add markers dynamically from the data */}
        {data.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.long]}>
            <Popup>{marker.created || "No label provided"}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
};

export default Dashboard;
