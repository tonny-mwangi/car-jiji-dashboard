
import { ArrowRight, Calendar, Car, CreditCard, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-carjiji-orange" />,
      title: "Find the perfect car",
      description: "Browse through a wide selection of cars and choose the one that fits your needs.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-carjiji-orange" />,
      title: "Book your rental",
      description: "Choose your pickup and drop-off dates, and book instantly.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-carjiji-orange" />,
      title: "Pick up the car",
      description: "Meet the car owner at the agreed location and get the keys.",
    },
    {
      icon: <Car className="h-12 w-12 text-carjiji-orange" />,
      title: "Enjoy your trip",
      description: "Hit the road with your rental car and enjoy your journey.",
    },
  ];
  
  return (
    <div className="bg-carjiji-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-carjiji-blue mb-4">
            How Car Jiji Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Renting a car has never been easier. Follow these simple steps to get on the road in no time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/how-it-works">
            <Button className="bg-carjiji-blue hover:bg-carjiji-blue/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Make sure to declare Search
const Search = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

export default HowItWorks;
