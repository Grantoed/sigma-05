import styled from "styled-components";
import { SectionHeading } from "src/components/global/SectionHeading";

export const Section = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${(p) => p.theme.colors.mtc};
`;

export const OffersHeading = styled(SectionHeading)`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.mbgc};
`;
