
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CarCard, { CarData } from "../car/CarCard";

const FeaturedCars = () => {
  const [featuredCars, setFeaturedCars] = useState<CarData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFeaturedCars([
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
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-carjiji-blue">
            Featured Cars
          </h2>
          <Link to="/cars">
            <Button variant="ghost" className="text-carjiji-blue">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-lg bg-gray-100 animate-pulse h-72"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCars;
