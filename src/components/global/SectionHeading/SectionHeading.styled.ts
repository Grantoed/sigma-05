import styled from "styled-components";
import { color, ColorProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const Heading = styled.h2.withConfig({ shouldForwardProp })<ColorProps>`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[8]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
  ${color}
`;
