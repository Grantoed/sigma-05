import styled from "styled-components";
import { SectionHeading } from "src/components/global/SectionHeading";
import { Subheading } from "src/components/global/Subheading";
import bgImgLeft from "src/images/testimonial-left.png";
import bgImgRight from "src/images/testimonial-right.png";

export const Section = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${(p) => p.theme.colors.abgc};
  background-image: url(${bgImgLeft}), url(${bgImgRight});
  background-position: cover;
  background-repeat: no-repeat;
  background-position: left, right;
`;

export const TestimonialsSubheading = styled(Subheading)`
  text-align: center;
`;

export const TestimonialsHeading = styled(SectionHeading)`
  margin-top: 8px;
  text-align: center;
`;

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 60px;
  width: 1108px;
  padding-top: 100px;
  border-top: 1px solid #e0e0e0;
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 211px;
  height: 211px;
  background-image: radial-gradient(
    circle at center,
    ${(p) => p.theme.colors.hbgc} 66%,
    ${(p) => p.theme.colors.mbgc} 66%
  );
  /* background-color: ${(p) => p.theme.colors.hbgc}; */
  border: 5px solid ${(p) => p.theme.colors.atc};
  border-radius: ${(p) => p.theme.radii.round};
`;

export const StatsNumber = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[8]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const StatsName = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.black};
  line-height: ${(p) => p.theme.lineHeights.text};
  color: ${(p) => p.theme.colors.mtc};
`;
