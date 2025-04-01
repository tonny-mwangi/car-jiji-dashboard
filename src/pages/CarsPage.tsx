
import { useState, useEffect } from "react";
import SearchFilters from "@/components/car/SearchFilters";
import CarCard, { CarData } from "@/components/car/CarCard";
import { carsData, filterCars } from "@/services/mockData";

const CarsPage = () => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCars(carsData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleFilter = (filters: any) => {
    setIsLoading(true);
    // Simulate API call with filter
    setTimeout(() => {
      setCars(filterCars(filters));
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-carjiji-blue">Available Cars</h1>
      
      <SearchFilters onFilter={handleFilter} />
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-lg bg-gray-100 animate-pulse h-72"></div>
          ))}
        </div>
      ) : (
        <>
          {cars.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">No cars found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarsPage;
