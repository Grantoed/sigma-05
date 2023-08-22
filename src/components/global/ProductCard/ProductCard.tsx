import React from "react";
import { useTheme } from "styled-components";
import { BiStar } from "react-icons/bi";
import { formatPrice } from "src/helpers/formatPrice";
import { Product } from "src/interfaces/product.interface";
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
import placeholderImg from "src/images/product-placeholder.png";

type ProductCardProps = {
  category: Product["category"];
  imageURL: Product["imageURL"];
  name: Product["name"];
  priceOld?: Product["priceOld"];
  price: Product["price"];
  rating: Product["rating"];
  openModal: () => void;
};

export const ProductCard = ({
  category,
  imageURL,
  name,
  priceOld,
  price,
  rating,
  openModal,
}: ProductCardProps) => {
  const MAX_STARS = 5;
  const theme = useTheme();

  return (
    <ProductWrapper onClick={openModal}>
      <ProductCategory>{category}</ProductCategory>
      <ProductImage src={imageURL || placeholderImg} />
      <ProductName>{name}</ProductName>
      <ProductDetails>
        <PriceWrapper>
          {priceOld && (
            <ProductOldPrice>${formatPrice(priceOld)}</ProductOldPrice>
          )}
          <ProductPrice>${formatPrice(price)}</ProductPrice>
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
