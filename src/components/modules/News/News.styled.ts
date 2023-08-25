import styled from "styled-components";
import { NavLink } from "react-router-dom";
import lettuceImg from "src/images/lettuce.jpg";
import tomatoesImg from "src/images/tomatoes.jpg";

export const Section = styled.section``;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: 2px solid ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mbgc};
  color: ${(p) => p.theme.colors.mtc};
`;

export const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.theme.colors.buttonIcon};
  border-radius: ${(p) => p.theme.radii.round};
`;

export const NewsItem = styled.div`
  position: relative;
  width: 677px;
  height: 524px;
  border-radius: ${(p) => p.theme.radii.default};
  &:nth-child(1) {
    background-image: url(${lettuceImg});
  }
  &:nth-child(2) {
    background-image: url(${tomatoesImg});
  }
`;

export const NewsDateWrapper = styled.div`
  position: absolute;
  top: 43px;
  left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 82px;
  padding: 15px;
  text-align: center;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.round};
`;

export const NewsDate = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const NewsTextWrapper = styled.div`
  position: absolute;
  left: 32px;
  bottom: -68px;
  width: 620px;
  padding: 50px 60px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.default};
  box-shadow: 0px 20px 35px 0px ${(p) => p.theme.colors.shadow};
`;

export const NewsAuthorWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const NewsAuthor = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  color: ${(p) => p.theme.colors.mtc};
`;

export const NewsTitle = styled.p`
  margin-top: 15px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const NewsText = styled.p`
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const NewsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.ac};
  color: ${(p) => p.theme.colors.mtc};
`;
