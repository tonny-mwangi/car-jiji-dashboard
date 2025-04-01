
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CarFront, CheckCircle, CreditCard, MapPin, Search, ShieldCheck, User } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-carjiji-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How Car Jiji Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Car Jiji connects car owners with people who need a vehicle. 
            Find your perfect ride or earn money by renting out your car.
          </p>
        </div>
      </div>
      
      {/* Renter Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Renting a Car</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-carjiji-gray rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Find Your Car</h3>
              <p className="text-gray-600">
                Browse our selection of cars, filter by location, price, and features to find the perfect vehicle for your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-carjiji-gray rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Book It</h3>
              <p className="text-gray-600">
                Select your dates, submit your request, and wait for the owner to confirm your booking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-carjiji-gray rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <CarFront className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Enjoy Your Ride</h3>
              <p className="text-gray-600">
                Pick up the car, enjoy your trip, and return it at the agreed time and place.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/cars">
              <Button className="bg-carjiji-orange hover:bg-carjiji-orange/90">
                Browse Available Cars <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Owner Process */}
      <div className="py-16 bg-carjiji-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Listing Your Car</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <CarFront className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. List Your Car</h3>
              <p className="text-gray-600">
                Sign up as an owner, provide details about your car, upload photos, and set your pricing and availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Approve Bookings</h3>
              <p className="text-gray-600">
                Review booking requests, communicate with renters, and confirm bookings that work with your schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-carjiji-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Paid</h3>
              <p className="text-gray-600">
                Hand over the keys, and get paid securely through our platform once the rental is complete.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/dashboard">
              <Button className="bg-carjiji-blue hover:bg-carjiji-blue/90">
                List Your Car <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Car Jiji?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4">
                <ShieldCheck className="h-8 w-8 text-carjiji-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">
                  Every booking includes insurance coverage for both owners and renters, giving you peace of mind during the rental period.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <User className="h-8 w-8 text-carjiji-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Users</h3>
                <p className="text-gray-600">
                  All users are verified through a comprehensive screening process to ensure safety and reliability.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <CreditCard className="h-8 w-8 text-carjiji-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Our secure payment system ensures that transactions are safe, transparent, and hassle-free.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <MapPin className="h-8 w-8 text-carjiji-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                <p className="text-gray-600">
                  With cars available in cities across the country, you can find a vehicle wherever you need one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-carjiji-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benefits of Car Jiji.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/cars">
              <Button className="bg-carjiji-orange hover:bg-carjiji-orange/90 text-white" size="lg">
                Find a Car
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                List Your Car
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
