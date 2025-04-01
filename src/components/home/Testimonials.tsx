
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      rating: 5,
      text: "Car Jiji made my vacation so much easier! I found the perfect car at a great price, and the owner was amazing. Will definitely use again!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      rating: 5,
      text: "As a car owner, I've made over $1,200 in just two months renting out my car when I'm not using it. The platform is simple and secure.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "ER",
      rating: 4,
      text: "I needed a car for a weekend trip and found exactly what I needed on Car Jiji. The booking process was smooth and straightforward.",
    },
  ];
  
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-carjiji-blue mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.id}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-current" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
