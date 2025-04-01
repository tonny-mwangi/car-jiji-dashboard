
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search, Info } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-carjiji-blue text-white">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.3"
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rent The Perfect Car For Your Journey
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Car Jiji connects car owners with people who need a vehicle. 
            Find your perfect ride or earn money by renting out your car.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-carjiji-orange hover:bg-carjiji-orange/90 text-white"
              size="lg"
              onClick={() => navigate("/cars")}
            >
              <Search className="mr-2 h-5 w-5" />
              Find a Car
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              size="lg"
              onClick={() => navigate("/how-it-works")}
            >
              <Info className="mr-2 h-5 w-5" />
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
