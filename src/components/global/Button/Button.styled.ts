import styled from "styled-components";
import {
  color,
  border,
  space,
  ColorProps,
  BorderProps,
  SpaceProps,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export type ButtonProps = ColorProps & BorderProps & SpaceProps;

export const CustomizedButton = styled.button.withConfig({
  shouldForwardProp,
})<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mtc};
  color: ${(p) => p.theme.colors.mbgc};
  ${color};
  ${border}
  ${space}
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.theme.colors.buttonIcon};
  border-radius: ${(p) => p.theme.radii.round};
`;
