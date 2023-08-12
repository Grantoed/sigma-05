import styled from "styled-components";
import { space } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { StyledBox, BoxProps } from "../Box/Box.styled";

export const ContainerWrapper = styled(StyledBox).withConfig({
  shouldForwardProp,
})<BoxProps>`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 260px;
  padding-right: 260px;
  ${space}
`;
