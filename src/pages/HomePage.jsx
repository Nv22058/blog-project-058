import React from "react";

import MainLayout from "../../src/components/MainLayout";
import Articles from './home/container/Articles';
import CTA from "./home/container/CTA";
import Hero from "./home/container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};
export default HomePage;