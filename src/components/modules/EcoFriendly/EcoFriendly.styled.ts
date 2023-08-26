import styled from "styled-components";
import { Container } from "src/components/global/Container";
import { SectionHeading } from "src/components/global/SectionHeading";
import ecoFriendlyImg from "src/images/eco-friendly.webp";

export const Section = styled.section``;

export const EcoFriendlyContainer = styled(Container)`
  height: 930px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(${ecoFriendlyImg});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
`;

export const EcoFriendlyHeading = styled(SectionHeading)`
  margin-top: 8px;
`;

export const TextWrapper = styled.div`
  width: 635px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 90px;
  margin-left: 630px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.default};
`;

export const BulletsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 35px;
  margin-top: 35px;
`;

export const BulletItem = styled.div``;

export const BulletTitle = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mtc};
`;

export const BulletText = styled.p`
  margin-top: 7px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;
