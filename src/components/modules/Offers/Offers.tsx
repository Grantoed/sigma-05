import React from "react";
import { useTheme } from "styled-components";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import { Section, OfferCard, OfferTitle } from "./Offers.styled";
import naturalImg from "src/images/natural.jpg";
import offerImg from "src/images/offer.jpg";

export const Offers = () => {
  const theme = useTheme();
  return (
    <Section>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={150}
      >
        <OfferCard backgroundImage={`url(${naturalImg})`}>
          <Subheading color={theme.colors.mbgc}>Natural!!</Subheading>
          <OfferTitle color={theme.colors.mbgc}>
            Get Garden Fresh Fruits
          </OfferTitle>
        </OfferCard>
        <OfferCard backgroundImage={`url(${offerImg})`}>
          <Subheading>Offer!!</Subheading>
          <OfferTitle color={theme.colors.mtc}>
            Get 10% off on Vegetables
          </OfferTitle>
        </OfferCard>
      </Container>
    </Section>
  );
};
