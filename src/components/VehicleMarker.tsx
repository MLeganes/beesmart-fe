import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import TruckIcon from "../assets/images/garbage-truck.svg"
import "./VehileMarker.css"

interface VehicleMarkerProps {
  vehicle: { id: number; name: string; lat: number; lng: number ; driver:string};
}

const carIcon = new L.Icon({
  iconUrl: TruckIcon,
  iconSize: [35, 35],
  className: "truck-icon",
});

const VehicleMarker: React.FC<VehicleMarkerProps> = ({ vehicle }) => {
  return (
    <Marker position={[vehicle.lat, vehicle.lng]} icon={carIcon}>
     <Popup>
        <div style={{ textAlign: "center", color: "black" }}>
          <strong>{vehicle.name}</strong>
          <br />
          Driver: {vehicle.driver}
        </div>
      </Popup>
    </Marker>
  );
};

export default VehicleMarker;
