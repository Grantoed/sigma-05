import React from "react";
import { useSelector } from "react-redux";
import { selectProductsObject } from "src/redux/products";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import { ProductCard } from "src/components/global/ProductCard";
import { Section, OffersHeading } from "./Offers.styled";

export const Offers = () => {
  const productsObject = useSelector(selectProductsObject);

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
          {productsObject.products
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4)
            .map((productItem) => (
              <ProductCard
                key={productItem._id}
                category={productItem.category}
                imageURL={productItem.imageURL}
                name={productItem.name}
                priceOld={productItem.priceOld}
                price={productItem.price}
                rating={productItem.rating}
                // openModal={() => {
                //   setSelectedProduct(productItem);
                //   setIsModalOpen(true);
                // }}
              />
            ))}
        </Box>
      </Container>
    </Section>
  );
};
