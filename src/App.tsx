import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import VehicleMarker from "./components/VehicleMarker";
import { fetchVehicleData } from "./service/dataService";
import { Vehicle } from "./types";
import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.7758, 9.1829]);
  const [mapZoom, setMapZoom] = useState<number>(12);

  useEffect(() => {
    const fetchData = () => {
      fetchVehicleData().then((data) => setVehicles(data));
    };

    fetchData();
    const interval = setInterval(fetchData,2 * 6 * 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedVehicleId === null) {
      if (vehicles.length > 0) {
        const avgLat = vehicles.reduce((sum, v) => sum + v.lat, 0) / vehicles.length;
        const avgLng = vehicles.reduce((sum, v) => sum + v.lng, 0) / vehicles.length;
        setMapCenter([avgLat, avgLng]);
        setMapZoom(12);
      }
    } else {
      const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedVehicleId);
      if (selectedVehicle) {
        setMapCenter([selectedVehicle.lat, selectedVehicle.lng]);
        setMapZoom(16);
      }
    }
  }, [selectedVehicleId, vehicles]);

  const handleVehicleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedVehicleId(value === "all" ? null : parseInt(value, 10));
  };

  return (
    <div>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <label htmlFor="vehicle-select" style={{ marginRight: "10px" }}>
          View Vehicle:
        </label>
        <select id="vehicle-select" onChange={handleVehicleSelection}>
          <option value="all">All Vehicles</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>

      <Map center={mapCenter} zoom={mapZoom}>
        {(selectedVehicleId === null
          ? vehicles
          : vehicles.filter((v) => v.id === selectedVehicleId)
        ).map((vehicle) => (
          <VehicleMarker key={vehicle.id} vehicle={vehicle} />
        ))}
      </Map>
    </div>
  );
};

export default App;
