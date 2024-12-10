import { Vehicle } from "../types";

export const fetchVehicleData = (): Promise<Vehicle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const vehicles: Vehicle[] = [
        { id: 1, name: 'Truck 1', lat: 48.7758, lng: 9.1829 },
        { id: 2, name: 'Truck 2', lat: 48.7858, lng: 9.1929 },
        { id: 3, name: 'Truck 3', lat: 48.7658, lng: 9.1729 },
        { id: 4, name: 'Truck 4', lat: 48.7558, lng: 9.1629 },
        { id: 5, name: 'Truck 5', lat: 48.7458, lng: 9.1529 },
      ];
      resolve(vehicles);
    }, 2000);
  });
};