import styled from "styled-components";
import { color, background, ColorProps, BackgroundProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const Section = styled.section``;

export const OfferCard = styled.div.withConfig({
  shouldForwardProp,
})<BackgroundProps>`
  width: 682px;
  height: 367px;
  padding: 110px 55px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: ${(p) => p.theme.radii.default};
  ${background}
`;

export const OfferTitle = styled.p.withConfig({
  shouldForwardProp,
})<ColorProps>`
  width: 278px;
  margin-top: 5px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[7]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
  ${color};
`;
