
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Home, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "123 Business Avenue\nDowntown, NYC 10001",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567\nToll-free: 1-800-URBAN-NEST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@urbannestrealty.com\nsupport@urbannestrealty.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 7:00 PM\nSat-Sun: 10:00 AM - 5:00 PM",
      action: "Schedule Visit"
    }
  ];

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing by contacting the agent directly, calling our office, or using our online booking system. We're flexible with timing to accommodate your schedule."
    },
    {
      question: "What documents do I need to buy a property?",
      answer: "Typically, you'll need proof of income, bank statements, pre-approval letter, ID, and down payment funds. Our agents will guide you through the complete checklist."
    },
    {
      question: "How long does the buying process take?",
      answer: "The process usually takes 30-45 days from offer acceptance to closing, though it can vary based on financing, inspections, and other factors."
    },
    {
      question: "Do you help with property management?",
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and more."
    },
    {
      question: "What are your commission rates?",
      answer: "Our commission rates are competitive and can vary based on the property type and services required. Contact us for a personalized quote."
    },
    {
      question: "Can you help me sell my property quickly?",
      answer: "Absolutely! We use professional photography, strategic marketing, and our extensive network to ensure maximum exposure for your property."
    }
  ];

  return (
    <div className="font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-navy-600 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-navy-100 max-w-2xl mx-auto">
              Have questions about buying, selling, or investing in real estate? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-700 flex items-center">
                    <MessageCircle className="h-6 w-6 mr-3 text-gold-500" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buying">Buying Property</SelectItem>
                            <SelectItem value="selling">Selling Property</SelectItem>
                            <SelectItem value="renting">Property Rental</SelectItem>
                            <SelectItem value="investment">Investment Advice</SelectItem>
                            <SelectItem value="valuation">Property Valuation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-2"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-navy-700 mb-2">{info.title}</h3>
                        <p className="text-gray-600 mb-3 whitespace-pre-line">{info.details}</p>
                        <Button variant="outline" size="sm" className="border-gold-500 text-gold-600 hover:bg-gold-50">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at our downtown location or schedule a meeting at your convenience.
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Integration</p>
              <p className="text-gray-500">123 Business Avenue, Downtown NYC</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and the real estate process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy-700 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-navy-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-navy-100 max-w-2xl mx-auto">
              Our team is ready to help you with urgent inquiries and immediate support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Now</h3>
              <p className="text-navy-200 mb-4">Speak with an agent immediately</p>
              <Button className="bg-white text-navy-700 hover:bg-gray-100">
                +1 (555) 123-4567
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-navy-200 mb-4">Chat with our support team</p>
              <Button className="bg-white text-navy-700 hover:bg-gray-100">
                Start Chat
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-white mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Visit</h3>
              <p className="text-navy-200 mb-4">Book an in-person consultation</p>
              <Button className="bg-white text-navy-700 hover:bg-gray-100">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
