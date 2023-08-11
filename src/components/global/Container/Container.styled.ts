import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { Box } from "../Box";

export const ContainerWrapper = styled(Box).withConfig({ shouldForwardProp })`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`;
