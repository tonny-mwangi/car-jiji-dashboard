
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-carjiji-blue" />
          <span className="text-xl font-bold text-carjiji-blue">Car Jiji</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/cars" className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors">
            Browse Cars
          </Link>
          <Link to="/how-it-works" className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors">
            How It Works
          </Link>
          <Link to="/dashboard" className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors">
            List Your Car
          </Link>
          <Button className="bg-carjiji-orange hover:bg-carjiji-orange/90">
            <User className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-carjiji-darkgray" />
          ) : (
            <Menu className="h-6 w-6 text-carjiji-darkgray" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4 py-2">
            <Link 
              to="/cars" 
              className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Cars
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className="text-carjiji-darkgray hover:text-carjiji-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Car
            </Link>
            <Button 
              className="bg-carjiji-orange hover:bg-carjiji-orange/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
