import { Vehicle } from "../types";

export const fetchVehicleData = (): Promise<Vehicle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const baseLat = 48.7758;
      const baseLng = 9.1829;
      const drivers = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
      const regions = [
        { latOffset: 0.05, lngOffset: 0.05 },  // Top-right quadrant
        { latOffset: 0.05, lngOffset: -0.05 }, // Top-left quadrant
        { latOffset: -0.05, lngOffset: 0.05 }, // Bottom-right quadrant
        { latOffset: -0.05, lngOffset: -0.05 }, // Bottom-left quadrant
        { latOffset: 0, lngOffset: 0 },        // Center region
      ];

      const vehicles: Vehicle[] = Array.from({ length: 5 }, (_, i) => {
        const region = regions[i];

        return {
          id: i + 1,
          name: `Truck ${i + 1}`,
          lat: baseLat + region.latOffset + (Math.random() - 0.5) * 0.06, // Stay within assigned region
          lng: baseLng + region.lngOffset + (Math.random() - 0.5) * 0.06,
          driver:drivers[i], 
        };
      });

      resolve(vehicles);
    }, 2000);
  });
};
