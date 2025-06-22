import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Home, TrendingUp, Shield, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest communication and transparent practices."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace technology and innovative solutions to enhance your real estate experience."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our collaborative approach ensures you benefit from our collective expertise."
    }
  ];

  const milestones = [
    { year: "2010", event: "UrbanNest Realty Founded", description: "Started with a vision to transform real estate" },
    { year: "2015", event: "First $100M in Sales", description: "Reached our first major milestone" },
    { year: "2018", event: "Digital Innovation Award", description: "Recognized for technology leadership" },
    { year: "2020", event: "50 Agent Team", description: "Expanded to serve more clients" },
    { year: "2023", event: "$2.5B Total Sales", description: "Celebrating continued growth and success" }
  ];

  const team = [
    {
      name: "James Wilson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
      bio: "James founded UrbanNest with 20+ years of real estate experience and a vision for exceptional service."
    },
    {
      name: "Maria Garcia",
      role: "VP of Operations",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      bio: "Maria ensures our operations run smoothly and our clients receive consistent, high-quality service."
    },
    {
      name: "Alex Kim",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      bio: "Alex leads our digital innovation efforts, making real estate more accessible through technology."
    }
  ];

  return (
    <div className="font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-navy-600 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UrbanNest Realty</h1>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto">
              We're more than just a real estate company – we're your partners in finding the perfect place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At UrbanNest Realty, our mission is to revolutionize the real estate experience by combining 
                cutting-edge technology with personalized service. We believe that finding your dream home 
                should be exciting, not stressful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to building lasting relationships with our clients, providing expert guidance 
                throughout their real estate journey, and delivering results that exceed expectations.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Modern building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-600/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-700 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, here's how we've grown.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold-400"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold-400">
                      <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-navy-700 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team is dedicated to driving innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-gold-300 text-lg">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-navy-100 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Real Estate Agency</h3>
              <p className="text-navy-200">2023 Industry Awards</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Top Sales Performance</h3>
              <p className="text-navy-200">Regional Excellence Award</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-navy-200">99% Satisfaction Rate</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation Leader</h3>
              <p className="text-navy-200">Technology Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
            Ready to Experience the UrbanNest Difference?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have trusted us with their real estate needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-lg px-8 py-3"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Contact Us Today
            </Button>
            <Button variant="outline" className="border-navy-500 text-navy-500 hover:bg-navy-50 text-lg px-8 py-3"
              onClick={() => {
                navigate('/properties');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              View Our Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
