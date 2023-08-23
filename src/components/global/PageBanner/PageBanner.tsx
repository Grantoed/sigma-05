import React from "react";
import { BackgroundProps, ColorProps } from "styled-system";
import { Container } from "src/components/global/Container";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";
import { Section, Title } from "./PageBanner.styled";

export const PageBanner = ({
  children,
  backgroundColor,
  backgroundImage,
}: ChildrenProp & BackgroundProps & ColorProps) => {
  return (
    <Section
      backgroundImage={`url(${backgroundImage})`}
      backgroundColor={backgroundColor}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Title>{children}</Title>
      </Container>
    </Section>
  );
};
