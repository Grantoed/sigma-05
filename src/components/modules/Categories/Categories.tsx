import React from "react";
import { Container } from "src/components/global/Container";
import {
  Section,
  CategoriesSubheading as Subheading,
  CategoriesHeading as Heading,
  CardList,
  CardItem,
  CardImage,
  CardCategoryName,
} from "./Categories.styled";
import nutsImg from "src/images/brown-hazelnut.webp";
import fruitsImg from "src/images/fresh-banana.webp";
import vegetablesImg from "src/images/spinach.webp";
import beansImg from "src/images/mung-bean.webp";

export const Categories = () => {
  return (
    <Section>
      <Container>
        <Subheading>Categories</Subheading>
        <Heading>Fresh Products For You</Heading>
        <CardList>
          <CardItem>
            <CardImage src={nutsImg} alt="Hazelnuts" />
            <CardCategoryName>Nuts</CardCategoryName>
          </CardItem>
          <CardItem>
            <CardImage src={fruitsImg} alt="Banana" />
            <CardCategoryName>Fruits</CardCategoryName>
          </CardItem>
          <CardItem>
            <CardImage src={vegetablesImg} alt="Lettuce" />
            <CardCategoryName>Vegetables</CardCategoryName>
          </CardItem>
          <CardItem>
            <CardImage src={beansImg} alt="Beans" />
            <CardCategoryName>Beans</CardCategoryName>
          </CardItem>
        </CardList>
      </Container>
    </Section>
  );
};
