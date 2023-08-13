import React from "react";
import { useTheme } from "styled-components";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import { Section, AdsCard, AdsTitle } from "./Ads.styled";
import naturalImg from "src/images/natural.jpg";
import offerImg from "src/images/offer.jpg";

export const Ads = () => {
  const theme = useTheme();
  return (
    <Section>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={150}
      >
        <AdsCard backgroundImage={`url(${naturalImg})`}>
          <Subheading color={theme.colors.mbgc}>Natural!!</Subheading>
          <AdsTitle color={theme.colors.mbgc}>Get Garden Fresh Fruits</AdsTitle>
        </AdsCard>
        <AdsCard backgroundImage={`url(${offerImg})`}>
          <Subheading>Offer!!</Subheading>
          <AdsTitle color={theme.colors.mtc}>
            Get 10% off on Vegetables
          </AdsTitle>
        </AdsCard>
      </Container>
    </Section>
  );
};
