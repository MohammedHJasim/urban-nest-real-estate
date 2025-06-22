
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <FeaturedProperties />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
