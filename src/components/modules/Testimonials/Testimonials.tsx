import React from "react";
import { Container } from "src/components/global/Container";
import { SwiperCarousel } from "src/components/global/Swiper";
import {
  Section,
  TestimonialsHeading,
  TestimonialsSubheading,
} from "./Testimonials.styled";

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <TestimonialsSubheading>Testimonial</TestimonialsSubheading>
        <TestimonialsHeading>What Our Customer Saying?</TestimonialsHeading>
        <SwiperCarousel></SwiperCarousel>
      </Container>
    </Section>
  );
};
