import styled from "styled-components";
import { Subheading } from "src/components/global/Subheading";
import { SectionHeading } from "src/components/global/SectionHeading";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const ExpertsSubheading = styled(Subheading)`
  text-align: center;
`;

export const ExpertsHeading = styled(SectionHeading)`
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 16px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const CardList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 40px;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 615px;
  background-color: ${(p) => p.theme.colors.abgc};
  border-radius: ${(p) => p.theme.radii.default};
  transition: all var(--transition);
  &:hover {
    background-color: ${(p) => p.theme.colors.mbgc};
    box-shadow: 0px 29px 44px ${(p) => p.theme.colors.shadow};
  }
`;

export const CardImage = styled.img`
  height: 486px;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 35px 28px;
`;

export const CardNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardName = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const CardPosition = styled.p`
  font-family: ${(p) => p.theme.fonts.atf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  color: ${(p) => p.theme.colors.atc};
`;

export const CardSocialsWrapper = styled.div`
  display: flex;
  gap: 17px;
`;

export const CardLink = styled.a``;
