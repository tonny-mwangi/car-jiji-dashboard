
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Search, Filter } from "lucide-react";

interface SearchFiltersProps {
  onFilter: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilter }) => {
  const [location, setLocation] = useState("");
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({
      location,
      carType,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-8">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-lg font-semibold">Filter Cars</h2>
        <Button
          variant="outline"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`space-y-4 md:space-y-0 md:flex md:gap-4 md:items-end ${
          showMobileFilters ? "block" : "hidden md:flex"
        }`}
      >
        <div className="flex-1 space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label htmlFor="car-type">Car Type</Label>
          <Select value={carType} onValueChange={setCarType}>
            <SelectTrigger id="car-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
              <SelectItem value="minivan">Minivan</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="price-range">Price Range</Label>
            <span className="text-sm text-gray-500">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <Slider
            id="price-range"
            min={0}
            max={500}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="py-4"
          />
        </div>

        <div className="flex-initial">
          <Button
            type="submit"
            className="w-full md:w-auto bg-carjiji-orange hover:bg-carjiji-orange/90"
          >
            <Search className="h-4 w-4 mr-2" />
            Search Cars
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
