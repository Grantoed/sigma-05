import styled from "styled-components";
import { color, ColorProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const Heading = styled.h3.withConfig({ shouldForwardProp })<ColorProps>`
  font-family: ${(p) => p.theme.fonts.atf};
  font-size: ${(p) => p.theme.fontSizes[5]};
  line-height: ${(p) => p.theme.lineHeights.text};
  color: ${(p) => p.theme.colors.atc};
  ${color}
`;
