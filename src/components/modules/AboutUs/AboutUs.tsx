import React from "react";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { SectionHeading } from "src/components/global/SectionHeading";
import { Subheading } from "src/components/global/Subheading";
import {
  Section,
  Image,
  Text,
  Button,
  Point,
  PointIcon,
  PointIconWrapper,
  PointTitle,
  PointText,
} from "./AboutUs.styled";
import aboutImg from "src/images/about.png";
import organicFoodImg from "src/images/organic-food.svg";
import qualityStandardsImg from "src/images/quality-standards.svg";

export const AboutUs = () => {
  return (
    <Section>
      <Container display="flex" alignItems="center">
        <Image src={aboutImg} />
        <Box width={702}>
          <Subheading>About Us</Subheading>
          <SectionHeading>
            We Believe in Working Accredited Farmers
          </SectionHeading>
          <Text>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Text>
          <Box display="flex" flexDirection="column" mt={46} gridGap={35}>
            <Point>
              <PointIconWrapper>
                <PointIcon src={organicFoodImg}></PointIcon>
              </PointIconWrapper>
              <Box display="flex" flexDirection="column" gridGap="7px">
                <PointTitle>Organic Foods Only</PointTitle>
                <PointText>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </PointText>
              </Box>
            </Point>
            <Point>
              <PointIconWrapper>
                <PointIcon src={qualityStandardsImg}></PointIcon>
              </PointIconWrapper>
              <Box display="flex" flexDirection="column" gridGap="7px">
                <PointTitle>Quality Standards</PointTitle>
                <PointText>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </PointText>
              </Box>
            </Point>
          </Box>
          <Button>Shop Now</Button>
        </Box>
      </Container>
    </Section>
  );
};
