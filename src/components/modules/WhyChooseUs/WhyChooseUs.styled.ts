import styled from "styled-components";
import { SectionHeading } from "src/components/global/SectionHeading";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${(p) => p.theme.colors.abgc};
`;

export const Heading = styled(SectionHeading)`
  width: 524px;
`;

export const Image = styled.img`
  width: 600px;
  border-radius: ${(p) => p.theme.radii.default};
`;

export const Text = styled.p`
  margin-top: 15px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PointTitleWrapper = styled.div`
  display: flex;
  width: 340px;
  padding: 29px 27px;
  align-items: flex-start;
  background-color: #ececec;
  border-radius: ${(p) => p.theme.radii.searchBar};
`;

export const PointTitle = styled.p`
  display: flex;
  align-items: baseline;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.mtc};
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    background-color: transparent;
    border: 5px solid ${(p) => p.theme.colors.atc};
    border-radius: ${(p) => p.theme.radii.round};
  }
`;

export const PointText = styled.p`
  width: 444px;
  margin-left: 60px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const CardList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 90px;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 257px;
  height: 335px;
  padding: 40px 25px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-radius: ${(p) => p.theme.radii.default};
`;

export const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 95px;
  background-color: ${(p) => p.theme.colors.abgc};
  border-radius: ${(p) => p.theme.radii.points};
`;

export const CardTitle = styled.p`
  margin-top: 15px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.mtc};
`;

export const CardText = styled.p`
  margin-top: 12px;
  line-height: ${(p) => p.theme.lineHeights.text};
  text-align: center;
`;
