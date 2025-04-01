
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/car/BookingForm";
import { getCarById } from "@/services/mockData";
import { CarData } from "@/components/car/CarCard";
import { ArrowLeft, Calendar, Car, Fuel, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!id) return;
    
    // Simulate API call
    setTimeout(() => {
      const foundCar = getCarById(id);
      if (foundCar) {
        setCar(foundCar);
      }
      setIsLoading(false);
    }, 1000);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded mb-4 w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-32 bg-gray-200 rounded mt-6"></div>
            </div>
            <div>
              <div className="h-80 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
        <p className="mb-6">The car you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/cars")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Cars
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/cars")}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cars
      </Button>
      
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                {car.location}
              </div>
            </div>
            <div className="text-2xl font-bold text-carjiji-orange">
              ${car.price}/day
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center">
              <Calendar className="h-6 w-6 mb-2 text-carjiji-blue" />
              <div className="text-sm text-gray-500">Year</div>
              <div className="font-semibold">{car.year}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center">
              <Users className="h-6 w-6 mb-2 text-carjiji-blue" />
              <div className="text-sm text-gray-500">Seats</div>
              <div className="font-semibold">{car.seats}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center">
              <Fuel className="h-6 w-6 mb-2 text-carjiji-blue" />
              <div className="text-sm text-gray-500">Fuel</div>
              <div className="font-semibold">{car.fuelType}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md flex flex-col items-center">
              <Car className="h-6 w-6 mb-2 text-carjiji-blue" />
              <div className="text-sm text-gray-500">Transmission</div>
              <div className="font-semibold">{car.transmission}</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About this car</h2>
            <p className="text-gray-600">
              This {car.year} {car.name} is available for rent in {car.location}. 
              It features a {car.transmission.toLowerCase()} transmission and runs on {car.fuelType.toLowerCase()} fuel. 
              With {car.seats} seats, it's perfect for small to medium-sized groups. 
              The car is well-maintained and ready for your next adventure!
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Features and amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Air Conditioning", 
                "Bluetooth", 
                "Backup Camera", 
                "Navigation System", 
                "Cruise Control", 
                "USB Charger"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg 
                    className="h-5 w-5 text-green-500 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <BookingForm carId={car.id} price={car.price} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
