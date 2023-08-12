import React from "react";
import { useTheme } from "styled-components";
import {
  ProductWrapper,
  ProductCategory,
  ProductImage,
  ProductName,
  ProductDetails,
  PriceWrapper,
  ProductOldPrice,
  ProductPrice,
  ProductRating,
} from "./ProductCard.styled";
import { BiStar } from "react-icons/bi";

type ProductProps = {
  category: string;
  imageURL: string;
  name: string;
  priceOld?: number;
  price: number;
  rating: number;
};

export const ProductCard = ({
  category,
  imageURL,
  name,
  priceOld,
  price,
  rating,
}: ProductProps) => {
  const MAX_STARS = 5;
  const theme = useTheme();

  return (
    <ProductWrapper>
      <ProductCategory>{category}</ProductCategory>
      <ProductImage src={imageURL} />
      <ProductName>{name}</ProductName>
      <ProductDetails>
        <PriceWrapper>
          <ProductOldPrice>${priceOld}</ProductOldPrice>
          <ProductPrice>${price}</ProductPrice>
        </PriceWrapper>
        <ProductRating>
          {Array.from({ length: MAX_STARS }).map((_, index) => (
            <BiStar
              key={index}
              size={18}
              color={
                index < rating
                  ? `${theme.colors.star}`
                  : `${theme.colors.disount}`
              }
            />
          ))}
        </ProductRating>
      </ProductDetails>
    </ProductWrapper>
  );
};
