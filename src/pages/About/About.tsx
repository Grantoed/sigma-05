import React from "react";
import { PageBanner } from "src/components/global/PageBanner";
import { About as OurSuccess } from "src/components/modules/About";
import { WhyChooseUs } from "src/components/modules/WhyChooseUs";
import { Experts } from "src/components/modules/Experts";
import { Categories } from "src/components/modules/Categories";
import { Subscription } from "src/components/modules/Subscription";
import aboutBgImg from "src/images/about-banner.webp";

const About = () => {
  return (
    <>
      <PageBanner backgroundImage={aboutBgImg} backgroundColor="#e0d6d7">
        About Us
      </PageBanner>
      <OurSuccess />
      <WhyChooseUs />
      <Experts />
      <Categories />
      <Subscription />
    </>
  );
};

export default About;
