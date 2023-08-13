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
