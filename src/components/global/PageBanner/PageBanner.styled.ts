import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, background, ColorProps, BackgroundProps } from "styled-system";

export const Section = styled.div.withConfig({
  shouldForwardProp,
})<BackgroundProps & ColorProps>`
  height: 450px;
  background-color: ${(p) => p.theme.colors.bbgc};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${color};
  ${background};
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[9]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;
