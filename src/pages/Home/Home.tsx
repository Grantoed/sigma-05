import React from "react";
import { Hero } from "src/components/modules/Hero";
import { Ads } from "src/components/modules/Ads";
import { AboutUs } from "src/components/modules/AboutUs";
import { Products } from "src/components/modules/Products";
import { Testimonials } from "src/components/modules/Testimonials";
import { Offers } from "src/components/modules/Offers";
import { EcoFriendly } from "src/components/modules/EcoFriendly";
import { Gallery } from "src/components/modules/Gallery";
import { News } from "src/components/modules/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Ads />
      <AboutUs />
      <Products />
      <Testimonials />
      <Offers />
      <EcoFriendly />
      <Gallery />
      <News />
    </>
  );
};

export default Home;
