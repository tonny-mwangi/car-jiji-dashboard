
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="bg-carjiji-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Got a car? Start earning money today!
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Turn your car into income by sharing it on Car Jiji. 
          It's easy to list, and you're in control of pricing and availability.
        </p>
        <Link to="/dashboard">
          <Button className="bg-carjiji-orange hover:bg-carjiji-orange/90 text-white" size="lg">
            List Your Car <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaSection;
