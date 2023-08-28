import styled from "styled-components";
import HeroImg from "src/images/hero-banner.webp";

export const Section = styled.section`
  height: 898px;
  background-color: ${(p) => p.theme.colors.hbgc};
  background-image: url(${HeroImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  max-width: 530px;
`;

export const Title = styled.h1`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[9]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.ac};
  color: ${(p) => p.theme.colors.mtc};
`;
