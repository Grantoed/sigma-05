import styled from "styled-components";
import organicFoodImg from "src/images/organic-food.webp";
import organicJuiceImg from "src/images/organic-juice.webp";
import nutsCookiesImg from "src/images/nuts-cookies.webp";

export const GallerySection = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${(p) => p.theme.colors.gbgc};
`;

export const GalleryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 612px;
  height: 583px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  &:nth-child(1) {
    background-image: url(${organicJuiceImg});
  }
  &:nth-child(2) {
    background-image: url(${organicFoodImg});
  }
  &:nth-child(3) {
    background-image: url(${nutsCookiesImg});
  }
`;

export const GalleryTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 96px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.points};
`;

export const GalleryText = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mtc};
`;
