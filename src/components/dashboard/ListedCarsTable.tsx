
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ListedCar {
  id: string;
  name: string;
  price: number;
  location: string;
  status: "active" | "pending" | "booked";
  bookings: number;
  revenue: number;
}

const ListedCarsTable = () => {
  // Sample data - would come from API in a real app
  const listedCars: ListedCar[] = [
    {
      id: "car1",
      name: "Toyota Camry 2020",
      price: 60,
      location: "New York, NY",
      status: "active",
      bookings: 12,
      revenue: 720,
    },
    {
      id: "car2",
      name: "Honda Civic 2019",
      price: 45,
      location: "Los Angeles, CA",
      status: "booked",
      bookings: 8,
      revenue: 360,
    },
    {
      id: "car3",
      name: "Tesla Model 3",
      price: 95,
      location: "San Francisco, CA",
      status: "pending",
      bookings: 0,
      revenue: 0,
    },
  ];

  const handleDelete = (id: string) => {
    // In a real app, you would call an API to delete the car
    toast({
      title: "Car Deleted",
      description: "Your car has been removed from the marketplace.",
    });
  };

  const handleEdit = (id: string) => {
    // In a real app, you would navigate to the edit page
    toast({
      title: "Edit Car",
      description: "You can now edit your car details.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 hover:bg-green-600";
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "booked":
        return "bg-blue-500 hover:bg-blue-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Car</TableHead>
            <TableHead>Price/Day</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Bookings</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listedCars.map((car) => (
            <TableRow key={car.id}>
              <TableCell className="font-medium">{car.name}</TableCell>
              <TableCell>${car.price}</TableCell>
              <TableCell>{car.location}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(car.status)}>
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{car.bookings}</TableCell>
              <TableCell>${car.revenue}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.location.href = `/cars/${car.id}`}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(car.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-red-500 hover:text-white hover:bg-red-500"
                    onClick={() => handleDelete(car.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListedCarsTable;
