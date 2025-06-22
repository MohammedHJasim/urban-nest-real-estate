import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropertyDetails from './PropertyDetails';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$850,000",
      location: "Downtown, NYC",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      type: "Apartment",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "$2,500,000",
      location: "Beverly Hills, CA",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=300&fit=crop",
      type: "Villa",
      featured: false
    },
    {
      id: 3,
      title: "Cozy Family Home",
      price: "$650,000",
      location: "Suburb Heights, TX",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,100",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=300&fit=crop",
      type: "House",
      featured: true
    },
    {
      id: 4,
      title: "Penthouse Suite",
      price: "$3,200,000",
      location: "Manhattan, NYC",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,800",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      type: "Penthouse",
      featured: false
    },
    {
      id: 5,
      title: "Waterfront Condo",
      price: "$950,000",
      location: "Miami Beach, FL",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop",
      type: "Condo",
      featured: true
    },
    {
      id: 6,
      title: "Country Estate",
      price: "$1,800,000",
      location: "Countryside, VA",
      bedrooms: 6,
      bathrooms: 5,
      area: "5,200",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      type: "Estate",
      featured: false
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !propertyType || propertyType === 'all' || property.type === propertyType;
    const matchesBedrooms = !bedrooms || bedrooms === 'any' || property.bedrooms.toString() === bedrooms;
    
    return matchesSearch && matchesType && matchesBedrooms;
  });

  return (
    <div className="font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-navy-600 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Property</h1>
            <p className="text-xl text-navy-100 max-w-2xl mx-auto">
              Discover premium properties from our extensive collection of homes, apartments, and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Input
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-navy-200"
            />
            
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
                <SelectItem value="Estate">Estate</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any-price">Any Price</SelectItem>
                <SelectItem value="0-500k">$0 - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m+">$2M+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy-700">
              {filteredProperties.length} Properties Found
            </h2>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-gold-500 text-white">
                      Featured
                    </Badge>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-navy-600" />
                  </button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-bold text-gold-600">{property.price}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area} sqft</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white"
                    onClick={() => navigate(`/properties/${property.id}`)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button className="bg-navy-600 text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
