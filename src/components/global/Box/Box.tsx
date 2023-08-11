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

export type BoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export const Box = styled.div<BoxProps>`
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
