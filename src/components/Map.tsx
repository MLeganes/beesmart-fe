import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

interface MapProps {
  center: [number, number];
  zoom: number;
  children: React.ReactNode;
}

const ChangeView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map: React.FC<MapProps> = ({ center, zoom, children }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ChangeView center={center} zoom={zoom} />
      {children}
    </MapContainer>
  );
};

export default Map;
