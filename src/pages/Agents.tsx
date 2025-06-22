import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Star, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      properties: 45,
      specialties: ["Luxury Homes", "Commercial"],
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@urbannestrealty.com",
      location: "Downtown NYC",
      bio: "With over 8 years of experience in luxury real estate, Sarah specializes in high-end properties and commercial investments."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Property Investment Specialist",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      properties: 32,
      specialties: ["Investment", "Condos"],
      phone: "+1 (555) 234-5678",
      email: "michael.chen@urbannestrealty.com",
      location: "Beverly Hills",
      bio: "Michael helps clients build wealth through strategic property investments and has closed over $50M in deals."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Residential Sales Expert",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 156,
      properties: 67,
      specialties: ["Family Homes", "First-Time Buyers"],
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@urbannestrealty.com",
      location: "Suburban Areas",
      bio: "Emily is passionate about helping families find their perfect home and making the buying process smooth and stress-free."
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Commercial Real Estate Advisor",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 73,
      properties: 28,
      specialties: ["Commercial", "Office Spaces"],
      phone: "+1 (555) 456-7890",
      email: "david.thompson@urbannestrealty.com",
      location: "Business District",
      bio: "David brings 10+ years of commercial real estate expertise, helping businesses find the perfect spaces to grow."
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Luxury Property Consultant",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      rating: 5.0,
      reviews: 94,
      properties: 38,
      specialties: ["Luxury", "Penthouses"],
      phone: "+1 (555) 567-8901",
      email: "lisa.park@urbannestrealty.com",
      location: "Manhattan",
      bio: "Lisa specializes in ultra-luxury properties and provides white-glove service to discerning clientele."
    },
    {
      id: 6,
      name: "Robert Martinez",
      title: "New Development Specialist",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 112,
      properties: 41,
      specialties: ["New Construction", "Pre-Sales"],
      phone: "+1 (555) 678-9012",
      email: "robert.martinez@urbannestrealty.com",
      location: "Various Locations",
      bio: "Robert helps clients secure the best deals in new developments and pre-construction opportunities."
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-navy-600 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Agents</h1>
            <p className="text-xl text-navy-100 max-w-2xl mx-auto">
              Our experienced team of real estate professionals is dedicated to helping you achieve your property goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">50+</div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">2,500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Choose Your Perfect Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each of our agents brings unique expertise and a commitment to exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{agent.name}</h3>
                      <p className="text-navy-100">{agent.title}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-gold-500 fill-current" />
                        <span className="ml-1 font-semibold">{agent.rating}</span>
                        <span className="ml-1 text-gray-600">({agent.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Home className="h-4 w-4 mr-1" />
                        <span>{agent.properties} sold</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {agent.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-navy-600 border-navy-300">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{agent.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{agent.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="truncate">{agent.email}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-navy-600 hover:bg-navy-700">
                        Contact Agent
                      </Button>
                      <Button variant="outline" className="flex-1 border-gold-500 text-gold-600 hover:bg-gold-50">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h3>
          <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
            Contact us today to be matched with the perfect agent for your real estate needs.
          </p>
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-lg px-8 py-3"
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;
