import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const position: [number, number] = [48.7758, 9.1829];
const Map: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <MapContainer
      center={position}
      zoom={13.8}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default Map;
