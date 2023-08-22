import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { backgroundImage, BackgroundImageProps } from "styled-system";

export const Section = styled.div.withConfig({
  shouldForwardProp,
})<BackgroundImageProps>`
  height: 450px;
  background-color: ${(p) => p.theme.colors.bbgc};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${backgroundImage};
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[9]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;
