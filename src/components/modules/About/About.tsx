import React from "react";
import { Box } from "src/components/global/Box";
import { SectionHeading } from "src/components/global/SectionHeading";
import { Subheading } from "src/components/global/Subheading";
import {
  Section,
  AboutContainer as Container,
  Image,
  Text,
  Button,
  Point,
  PointIcon,
  PointTitle,
} from "./About.styled";
import bowlImg from "src/images/bowl.png";
import tractorImg from "src/images/tractor.svg";
import chemicalPlantImg from "src/images/chemical-plant.svg";

export const About = () => {
  return (
    <Section>
      <Container>
        <Image src={bowlImg} />
        <Box width={702}>
          <Subheading>About Us</Subheading>
          <SectionHeading>We do Creative Things for Success</SectionHeading>
          <Text>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Text>
          <Text>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Text>
          <Box display="flex" mt={46} gridGap={65}>
            <Point>
              <PointIcon src={tractorImg}></PointIcon>
              <Box display="flex" flexDirection="column" gridGap="7px">
                <PointTitle>Modern Agriculture Equipment</PointTitle>
              </Box>
            </Point>
            <Point>
              <PointIcon src={chemicalPlantImg}></PointIcon>
              <Box display="flex" flexDirection="column" gridGap="7px">
                <PointTitle>No growth hormones are used</PointTitle>
              </Box>
            </Point>
          </Box>
          <Button to="/shop">Explore More</Button>
        </Box>
      </Container>
    </Section>
  );
};
