import React from "react";
import { Container } from "src/components/global/Container";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";
import { Section, Title } from "./PageBanner.styled";

type PageBannerProps = {
  backgroundImgUrl: string;
};

export const PageBanner = ({
  children,
  backgroundImgUrl,
}: ChildrenProp & PageBannerProps) => {
  return (
    <Section backgroundImage={`url(${backgroundImgUrl})`}>
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
