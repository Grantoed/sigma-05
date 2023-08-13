import React from "react";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import { ProductCard } from "src/components/global/ProductCard";
import { Section, OffersHeading } from "./Offers.styled";

export const Offers = () => {
  return (
    <Section>
      <Container>
        <Subheading>Offer</Subheading>
        <OffersHeading>We Offer Organic For You</OffersHeading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="1fr"
          gridGap={20}
          mt={50}
        >
          <ProductCard
            category="Vegetable"
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDy1TN-_7PiDfIBzI1JUm51QT2-PNM4u_CQ&usqp=CAU"
            name="Calabrese Broccoli"
            priceOld={20}
            price={13}
            rating={3}
          />
          <ProductCard
            category="Vegetable"
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDy1TN-_7PiDfIBzI1JUm51QT2-PNM4u_CQ&usqp=CAU"
            name="Calabrese Broccoli"
            priceOld={20}
            price={13}
            rating={3}
          />
          <ProductCard
            category="Vegetable"
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDy1TN-_7PiDfIBzI1JUm51QT2-PNM4u_CQ&usqp=CAU"
            name="Calabrese Broccoli"
            priceOld={20}
            price={13}
            rating={3}
          />
          <ProductCard
            category="Vegetable"
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDy1TN-_7PiDfIBzI1JUm51QT2-PNM4u_CQ&usqp=CAU"
            name="Calabrese Broccoli"
            priceOld={20}
            price={13}
            rating={3}
          />
        </Box>
      </Container>
    </Section>
  );
};
