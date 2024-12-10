import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import VehicleMarker from "./components/VehicleMarker";
import { fetchVehicleData } from "./service/dataService";
import { Vehicle } from "./types";
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchVehicleData().then((data) => setVehicles(data));
    }, 120000); // 2 minutes interval

    return () => clearInterval(interval);
  }, []);

  return (
    <Map>
      {vehicles.map((vehicle) => (
        <VehicleMarker key={vehicle.id} vehicle={vehicle} />
      ))}
    </Map>
  );
};

export default App;
