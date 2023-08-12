import React from "react";
import { Container } from "src/components/global/Container";
import { Section, TextWrapper, Title } from "./Hero.styled";
import { Subheading } from "src/components/global/Subheading";
import { Button } from "src/components/global/Button";
import { useTheme } from "styled-components";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Section>
      <Container py={245}>
        <TextWrapper>
          <Subheading>100% Natural Food</Subheading>
          <Title>Choose the best healthier way of life</Title>
          <Button
            mt={25}
            color={theme.colors.mtc}
            backgroundColor={theme.colors.ac}
          >
            Explore Now
          </Button>
        </TextWrapper>
      </Container>
    </Section>
  );
};
