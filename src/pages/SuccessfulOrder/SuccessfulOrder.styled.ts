import styled from "styled-components";
import successfulOrderImg from "src/images/successful-order.webp";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[9]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Background = styled.div`
  margin-top: 44px;
  width: 100%;
  height: 450px;
  background-image: url(${successfulOrderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #f3f2f0;
`;
