import styled from "styled-components";
import { SectionHeading } from "src/components/global/SectionHeading";
import newsletterImg from "src/images/newsletter-bg.jpg";

export const Section = styled.section``;

export const Heading = styled(SectionHeading)`
  width: 357px;
  color: ${(p) => p.theme.colors.mbgc};
`;

export const SubscriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 323px;
  padding-left: 70px;
  padding-right: 70px;
  background-image: url(${newsletterImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: ${(p) => p.theme.radii.default};
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Input = styled.input`
  width: 350px;
  height: 80px;
  padding: 30px 25px;
  font-family: ${(p) => p.theme.fonts.mtf};
  color: ${(p) => p.theme.colors.mtc};
  background-color: ${(p) => p.theme.colors.mbgc};
  border: transparent;
  border-radius: ${(p) => p.theme.radii.buttons};
  outline: none;
  &::placeholder {
    font-style: italic;
    color: ${(p) => p.theme.colors.placeholder};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mtc};
  color: ${(p) => p.theme.colors.mbgc};
`;
