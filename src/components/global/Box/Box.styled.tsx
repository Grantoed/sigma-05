import styled from "styled-components";
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  TypographyProps,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export type BoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export const StyledBox = styled.div.withConfig({ shouldForwardProp })<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${background};
  ${border};
  ${position};
  ${typography};
`;
