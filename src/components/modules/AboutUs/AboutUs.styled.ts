import styled from "styled-components";
import { Button as StyledButton } from "src/components/global/Button";

export const Section = styled.section`
  padding-top: 85px;
  padding-bottom: 85px;
  background-color: ${(p) => p.theme.colors.abgc};
`;

export const Image = styled.img`
  width: 733px;
  height: 697px;
`;

export const Text = styled.p`
  margin-top: 15px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const Button = styled(StyledButton)`
  margin-top: 46px;
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PointIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.points};
`;

export const PointIcon = styled.img`
  width: 46px;
  height: 46px;
`;

export const PointTitle = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const PointText = styled.p`
  line-height: ${(p) => p.theme.lineHeights.text};
`;
