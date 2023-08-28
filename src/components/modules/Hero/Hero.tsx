import React from "react";
import { Container } from "src/components/global/Container";
import { Section, TextWrapper, Title, Link } from "./Hero.styled";
import { Subheading } from "src/components/global/Subheading";

export const Hero = () => {
  return (
    <Section>
      <Container py={245}>
        <TextWrapper>
          <Subheading>100% Natural Food</Subheading>
          <Title>Choose the best healthier way of life</Title>
          <Link href="#products">Explore Now</Link>
        </TextWrapper>
      </Container>
    </Section>
  );
};
