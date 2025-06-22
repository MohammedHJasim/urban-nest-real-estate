import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Calculator, Users } from 'lucide-react';

const CallToAction = () => {
  const services = [
    {
      icon: Home,
      title: "List Your Property",
      description: "Get maximum exposure for your property with our premium marketing solutions.",
      buttonText: "List Now",
      gradient: "from-navy-500 to-navy-600"
    },
    {
      icon: Calculator,
      title: "Free Property Valuation",
      description: "Get an accurate market value estimate for your property from our experts.",
      buttonText: "Get Estimate",
      gradient: "from-gold-500 to-gold-600"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Connect with our experienced agents for personalized real estate advice.",
      buttonText: "Book Consultation",
      gradient: "from-navy-500 to-navy-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-700 mb-6 font-poppins">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-navy-700 mb-4 font-poppins">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-white`}
                  size="lg"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-navy-600 to-navy-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">$2.5B</div>
              <div className="text-lg">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">50+</div>
              <div className="text-lg">Expert Agents</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
