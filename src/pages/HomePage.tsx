import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import DesignCatalogue from '../components/sections/DesignCatalogue';
import CustomPackages from '../components/sections/CustomPackages';
import VisionToReality from '../components/sections/VisionToReality';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <div className="bg-background-500">
      <Hero />
      <Services />
      <DesignCatalogue />
      <CustomPackages />
      <VisionToReality />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;