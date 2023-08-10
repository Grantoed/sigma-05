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

type Props = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export const Box = styled.div<Props>`
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
