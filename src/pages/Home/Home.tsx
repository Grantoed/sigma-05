import React from "react";
import { Hero } from "src/components/modules/Hero";
import { Offers } from "src/components/modules/Offers";
import { AboutUs } from "src/components/modules/AboutUs";
import { Products } from "src/components/modules/Products";
import { Testimonials } from "src/components/modules/Testimonials";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Offers />
      <AboutUs />
      <Products />
      <Testimonials />
    </>
  );
};

export default Home;
