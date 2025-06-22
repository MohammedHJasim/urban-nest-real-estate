import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, CheckCircle, FileText, Phone, Calendar, Home } from 'lucide-react';

const mockProperty = {
  id: 1,
  title: 'Modern Downtown Apartment',
  price: '$850,000',
  area: '1,200',
  bedrooms: 2,
  bathrooms: 2,
  location: 'Downtown, NYC',
  images: [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=500&fit=crop',
  ],
  amenities: ['Pool', 'Parking', 'Balcony', 'Gym', 'Pet Friendly'],
  floorPlans: [
    { name: 'Main Floor', url: 'https://via.placeholder.com/400x300?text=Floor+Plan+1' },
    { name: 'Upper Floor', url: 'https://via.placeholder.com/400x300?text=Floor+Plan+2' },
  ],
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.858258857944!2d-74.0060156845937!3d40.71277577933009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus',
  description: 'A stunning modern apartment in the heart of downtown NYC, featuring luxury amenities and breathtaking city views.',
  related: [
    { id: 2, title: 'Luxury Villa with Pool', price: '$2,500,000', image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=250&fit=crop' },
    { id: 3, title: 'Cozy Family Home', price: '$650,000', image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=250&fit=crop' },
  ],
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // In a real app, fetch property by id
  const property = mockProperty;

  return (
    <div className="font-poppins">
      <Header />
      <main className="pt-32 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Title & Price */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-700 mb-2 md:mb-0">{property.title}</h1>
            <span className="text-2xl font-bold text-gold-600">{property.price}</span>
          </div>

          {/* Image Gallery (Slider Placeholder) */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={property.images[0]} alt="Main" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              <div className="flex flex-col gap-4">
                {property.images.slice(1).map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx+2}`} className="w-full h-44 object-cover rounded-xl shadow" />
                ))}
              </div>
            </div>
          </div>

          {/* Details & Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-700"><Bed className="h-5 w-5" /> {property.bedrooms} Bedrooms</div>
                <div className="flex items-center gap-2 text-gray-700"><Bath className="h-5 w-5" /> {property.bathrooms} Bathrooms</div>
                <div className="flex items-center gap-2 text-gray-700"><Square className="h-5 w-5" /> {property.area} sqft</div>
                <div className="flex items-center gap-2 text-gray-700"><MapPin className="h-5 w-5" /> {property.location}</div>
              </div>
              <p className="text-lg text-gray-600 mb-6">{property.description}</p>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-gold-500" /> Amenities</h2>
                <ul className="flex flex-wrap gap-3">
                  {property.amenities.map((a, i) => (
                    <li key={i} className="bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"><CheckCircle className="h-4 w-4 text-gold-500" /> {a}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><FileText className="h-5 w-5 text-gold-500" /> Floor Plans</h2>
                <div className="flex flex-wrap gap-4">
                  {property.floorPlans.map((plan, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <img src={plan.url} alt={plan.name} className="w-40 h-32 object-contain rounded border" />
                      <span className="mt-2 text-sm text-gray-700">{plan.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Map & Contact */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><MapPin className="h-5 w-5 text-gold-500" /> Location</h2>
                <div className="rounded-2xl overflow-hidden shadow">
                  <iframe
                    src={property.mapEmbed}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Phone className="h-5 w-5 text-gold-500" /> Contact Agent</h2>
                <form className="bg-white rounded-xl shadow p-4 flex flex-col gap-3">
                  <input type="text" placeholder="Your Name" className="border border-gray-200 rounded px-3 py-2" />
                  <input type="email" placeholder="Your Email" className="border border-gray-200 rounded px-3 py-2" />
                  <textarea placeholder="Message" className="border border-gray-200 rounded px-3 py-2" rows={3}></textarea>
                  <Button className="bg-navy-600 text-white">Send Inquiry</Button>
                </form>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Calendar className="h-5 w-5 text-gold-500" /> Schedule a Visit</h2>
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white flex items-center gap-2"><Calendar className="h-5 w-5" /> Request a Callback</Button>
              </div>
            </div>
          </div>

          {/* Related Properties */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center gap-2"><Home className="h-6 w-6 text-gold-500" /> Related Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {property.related.map((rel) => (
                <div key={rel.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                  <img src={rel.image} alt={rel.title} className="w-full h-32 object-cover rounded mb-3" />
                  <h3 className="text-lg font-semibold text-navy-700 mb-1">{rel.title}</h3>
                  <span className="text-gold-600 font-bold mb-2">{rel.price}</span>
                  <Button className="bg-navy-600 text-white w-full" onClick={() => navigate(`/properties/${rel.id}`)}>View Details</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails; 