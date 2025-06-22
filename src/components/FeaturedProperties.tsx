import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$450,000",
      location: "Downtown, New York",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      type: "Apartment",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Family Villa",
      price: "$750,000",
      location: "Suburbs, California",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,800 sqft",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      type: "Villa",
      featured: true
    },
    {
      id: 3,
      title: "Contemporary Office Space",
      price: "$1,200,000",
      location: "Business District, Miami",
      bedrooms: 0,
      bathrooms: 4,
      area: "5,000 sqft",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      type: "Commercial",
      featured: true
    },
    {
      id: 4,
      title: "Elegant Townhouse",
      price: "$620,000",
      location: "Historic District, Boston",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
      type: "House",
      featured: true
    },
    {
      id: 5,
      title: "Minimalist Studio",
      price: "$280,000",
      location: "Arts Quarter, Seattle",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      type: "Apartment",
      featured: false
    },
    {
      id: 6,
      title: "Waterfront Penthouse",
      price: "$1,850,000",
      location: "Marina District, San Diego",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,400 sqft",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      type: "Penthouse",
      featured: true
    }
  ];

  const navigate = useNavigate();

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-100 text-gold-700 hover:bg-gold-200">
            Featured Properties
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-700 mb-6 font-poppins">
            Discover Your Next Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-navy-600 hover:bg-navy-700 text-white">
                    {property.type}
                  </Badge>
                </div>
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold-500 hover:bg-gold-600 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-navy-700 group-hover:text-gold-600 transition-colors duration-200">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-gold-500">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div>
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-navy-200 text-navy-600 hover:bg-navy-50"
                    onClick={() => navigate(`/properties/${property.id}`)}
                  >
                    View Details
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
                    onClick={() => {
                      navigate('/agents');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Contact Agent
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-navy-500 text-navy-500 hover:bg-navy-50 px-8"
            onClick={() => {
              navigate('/properties');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
