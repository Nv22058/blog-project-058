import React from "react";

import MainLayout from "../../src/components/MainLayout";
import Hero from "./home/container/Hero";
import Articles from "../components/ArticleCard";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};

export default HomePage;