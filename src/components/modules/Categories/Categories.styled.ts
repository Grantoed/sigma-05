import styled from "styled-components";
import { Subheading } from "src/components/global/Subheading";
import { SectionHeading } from "src/components/global/SectionHeading";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${(p) => p.theme.colors.mtc};
`;

export const CategoriesSubheading = styled(Subheading)`
  text-align: center;
`;

export const CategoriesHeading = styled(SectionHeading)`
  color: ${(p) => p.theme.colors.mbgc};
  text-align: center;
`;

export const CardList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const CardItem = styled.li``;

export const CardImage = styled.img`
  width: 330px;
  height: 315px;
  border-radius: ${(p) => p.theme.radii.default};
`;

export const CardCategoryName = styled.p`
  margin-top: 30px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mbgc};
  text-align: center;
`;
