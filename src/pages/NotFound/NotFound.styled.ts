import styled from "styled-components";
import { NavLink } from "react-router-dom";
import notFoundBgImg from "src/images/404-bg.jpg";

export const Section = styled.section`
  height: 898px;
  background-image: url(${notFoundBgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #b4c5c3;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 533px;
  margin-left: auto;
`;

export const Code = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: 300px;
  line-height: 0.82;
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: #8fa8a8;
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[9]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Text = styled.p`
  margin-top: 10px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  margin-top: 36px;
  width: 275px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mtc};
  color: ${(p) => p.theme.colors.mbgc};
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.theme.colors.buttonIcon};
  border-radius: ${(p) => p.theme.radii.round};
`;
