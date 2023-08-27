import styled from "styled-components";

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${(p) => p.theme.fontSizes[6]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const LogoIcon = styled.img`
  width: 36px;
  height: 53px;
`;
