
import { CarData } from "@/components/car/CarCard";

// Mock data for the frontend until we integrate with backend
export const carsData: CarData[] = [
  {
    id: "car1",
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071",
    price: 95,
    location: "New York, NY",
    year: 2022,
    seats: 5,
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    id: "car2",
    name: "Toyota RAV4",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=2066",
    price: 65,
    location: "Los Angeles, CA",
    year: 2020,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car3",
    name: "BMW 3 Series",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070",
    price: 85,
    location: "Miami, FL",
    year: 2021,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car4",
    name: "Mercedes-Benz C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
    price: 90,
    location: "Chicago, IL",
    year: 2021,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car5",
    name: "Audi Q5",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070",
    price: 110,
    location: "San Francisco, CA",
    year: 2022,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car6",
    name: "Honda Civic",
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2074",
    price: 55,
    location: "Seattle, WA",
    year: 2019,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car7",
    name: "Ford Mustang",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=2070",
    price: 120,
    location: "Las Vegas, NV",
    year: 2021,
    seats: 4,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: "car8",
    name: "Jeep Wrangler",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
    price: 95,
    location: "Denver, CO",
    year: 2020,
    seats: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
];

// Function to get car by ID
export const getCarById = (id: string): CarData | undefined => {
  return carsData.find(car => car.id === id);
};

// Function to filter cars based on search criteria
export const filterCars = (filters: any): CarData[] => {
  return carsData.filter(car => {
    let match = true;
    
    if (filters.location && !car.location.toLowerCase().includes(filters.location.toLowerCase())) {
      match = false;
    }
    
    if (filters.minPrice && car.price < filters.minPrice) {
      match = false;
    }
    
    if (filters.maxPrice && car.price > filters.maxPrice) {
      match = false;
    }
    
    return match;
  });
};
