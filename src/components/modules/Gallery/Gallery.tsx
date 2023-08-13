import React from "react";
import { Container } from "src/components/global/Container";
import {
  GallerySection,
  GalleryItem,
  GalleryTextWrapper,
  GalleryText,
} from "./Gallery.styled";

export const Gallery = () => {
  return (
    <GallerySection>
      <Container display="flex" justifyContent="space-between" px="unset">
        <GalleryItem>
          <GalleryTextWrapper>
            <GalleryText>Organic Juice</GalleryText>
          </GalleryTextWrapper>
        </GalleryItem>
        <GalleryItem>
          <GalleryTextWrapper>
            <GalleryText>Organic Food</GalleryText>
          </GalleryTextWrapper>
        </GalleryItem>
        <GalleryItem>
          <GalleryTextWrapper>
            <GalleryText>Nut Cookies</GalleryText>
          </GalleryTextWrapper>
        </GalleryItem>
      </Container>
    </GallerySection>
  );
};
