import styled from "styled-components";

export const Avatar = styled.img`
  width: 115px;
  height: 115px;
  border-radius: ${(p) => p.theme.radii.round};
`;

export const Rating = styled.img`
  width: 122px;
  height: 26px;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 25px;
  line-height: ${(p) => p.theme.lineHeights.text};
  text-align: center;
  cursor: default;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
  cursor: default;
`;

export const Role = styled.p`
  font-size: ${(p) => p.theme.fontSizes[0]};
  line-height: ${(p) => p.theme.lineHeights.text};
  cursor: default;
`;
