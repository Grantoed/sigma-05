import React from "react";
import { Container } from "src/components/global/Container";
import { SwiperCarousel } from "src/components/global/Swiper";
import {
  Section,
  TestimonialsHeading,
  TestimonialsSubheading,
  StatsWrapper,
  StatsItem,
  StatsNumber,
  StatsName,
} from "./Testimonials.styled";

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <TestimonialsSubheading>Testimonial</TestimonialsSubheading>
        <TestimonialsHeading>What Our Customer Saying?</TestimonialsHeading>
        <SwiperCarousel />
        <StatsWrapper>
          <StatsItem>
            <StatsNumber>100%</StatsNumber>
            <StatsName>Organic</StatsName>
          </StatsItem>
          <StatsItem>
            <StatsNumber>285</StatsNumber>
            <StatsName>Active Product</StatsName>
          </StatsItem>
          <StatsItem>
            <StatsNumber>350+</StatsNumber>
            <StatsName>Organic Orchads</StatsName>
          </StatsItem>
          <StatsItem>
            <StatsNumber>25+</StatsNumber>
            <StatsName>Years of Farming</StatsName>
          </StatsItem>
        </StatsWrapper>
      </Container>
    </Section>
  );
};
