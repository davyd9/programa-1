import React from 'react';
import HeroSection from '../components/HeroSection';
import FilterSection from '../components/FilterSection';
import RecipeGrid from '../components/RecipeGrid';
import SidePanel from '../components/SidePanel';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FilterSection />
      
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <RecipeGrid />
          </div>
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;