
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Fuel, Car } from "lucide-react";
import { Link } from "react-router-dom";

export interface CarData {
  id: string;
  name: string;
  image: string;
  price: number;
  location: string;
  year: number;
  seats: number;
  fuelType: string;
  transmission: string;
}

interface CarCardProps {
  car: CarData;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-carjiji-orange hover:bg-carjiji-orange/90">
          ${car.price}/day
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{car.location}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center">
            <Fuel className="h-3 w-3 mr-1" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center">
            <Car className="h-3 w-3 mr-1" />
            <span>{car.transmission}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4">
        <Link to={`/cars/${car.id}`} className="w-full">
          <Button variant="default" className="w-full bg-carjiji-blue hover:bg-carjiji-blue/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
