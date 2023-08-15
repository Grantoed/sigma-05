import React, { useEffect } from "react";
import { fetchAll } from "src/api/productsAPI";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Button } from "src/components/global/Button";
import { ProductsHeading, ProductsSubheading } from "./Products.styled";
import { Section } from "./Products.styled";
import { ProductCard } from "src/components/global/ProductCard";

export const Products = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetchAll({ limit: "8" });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // }, []);

  return (
    <Section>
      <Container py={150}>
        <ProductsSubheading>Categories</ProductsSubheading>
        <ProductsHeading>Our Products</ProductsHeading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="auto"
          gridGap={20}
          mt={40}
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
        <Button backgroundColor="#1E1E1E" mt={80} ml="auto" mr="auto">
          Load More
        </Button>
      </Container>
    </Section>
  );
};
