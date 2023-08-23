import styled from "styled-components";
import { NavButton } from "src/components/global/NavButton";
import { Container } from "src/components/global/Container";
import cherryTomatoesImg from "src/images/cherry-tomatoes.png";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const AboutContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 100px;
    width: 350px;
    height: 350px;
    background-image: url(${cherryTomatoesImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    mix-blend-mode: multiply;
  }
`;

export const Image = styled.img`
  width: 700px;
`;

export const Text = styled.p`
  margin-top: 15px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const Button = styled(NavButton)`
  margin-top: 46px;
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
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
