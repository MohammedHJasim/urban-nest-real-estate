
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Users, Home } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Agents', href: '#agents' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' }
  ];

  const services = [
    { name: 'Buy Property', href: '#buy' },
    { name: 'Sell Property', href: '#sell' },
    { name: 'Rent Property', href: '#rent' },
    { name: 'Property Management', href: '#management' },
    { name: 'Investment Advice', href: '#investment' },
    { name: 'Market Analysis', href: '#analysis' }
  ];

  return (
    <footer className="bg-navy-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Stay Updated with Market Trends
          </h3>
          <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest property listings, market insights, and exclusive deals.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-gold-500"
            />
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UN</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins">UrbanNest</h3>
                  <p className="text-sm text-navy-300 -mt-1">Realty</p>
                </div>
              </div>
              
              <p className="text-navy-200 mb-6 leading-relaxed">
                Your trusted partner in real estate. We help you find your dream home and make smart property investments with our expert guidance and premium service.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-navy-200">
                  <MapPin className="h-5 w-5 mr-3 text-gold-400" />
                  <span>123 Business Ave, Downtown NY 10001</span>
                </div>
                <div className="flex items-center text-navy-200">
                  <Users className="h-5 w-5 mr-3 text-gold-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-navy-200">
                  <Home className="h-5 w-5 mr-3 text-gold-400" />
                  <span>info@urbannestrealty.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-navy-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-navy-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold-400">Connect With Us</h4>
              <p className="text-navy-200 mb-6">
                Follow us on social media for the latest updates and property showcases.
              </p>
              
              <div className="flex space-x-4 mb-6">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-navy-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">{social[0]}</span>
                  </button>
                ))}
              </div>

              <div className="bg-navy-700 rounded-lg p-4">
                <h5 className="font-semibold mb-2 text-gold-400">Office Hours</h5>
                <div className="text-sm text-navy-200 space-y-1">
                  <div>Mon - Fri: 9:00 AM - 7:00 PM</div>
                  <div>Sat - Sun: 10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-navy-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-navy-300 text-sm mb-4 md:mb-0">
                © 2024 UrbanNest Realty. All rights reserved.
              </p>
              
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
