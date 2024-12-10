import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface VehicleMarkerProps {
  vehicle: { id: number; name: string; lat: number; lng: number };
}

const carIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/7435/7435673.png",
  iconSize: [25, 25],
});

const VehicleMarker: React.FC<VehicleMarkerProps> = ({ vehicle }) => {
  return (
    <Marker position={[vehicle.lat, vehicle.lng]} icon={carIcon}>
      <Popup>{vehicle.name}</Popup>
    </Marker>
  );
};

export default VehicleMarker;
