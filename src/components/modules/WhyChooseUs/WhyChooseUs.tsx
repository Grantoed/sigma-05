import React from "react";
import { useTheme } from "styled-components";
import {
  PiShoppingCartSimpleFill,
  PiLeafFill,
  PiClockCountdownFill,
  PiCreditCardFill,
} from "react-icons/pi";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import {
  Section,
  Heading,
  Image,
  Text,
  Point,
  PointTitleWrapper,
  PointTitle,
  PointText,
  CardList,
  CardItem,
  CardIconWrapper,
  CardTitle,
  CardText,
} from "./WhyChooseUs.styled";
import vegiesImg from "src/images/cut-vegies.webp";

export const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <Section>
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridGap={50}
        >
          <Box width={671}>
            <Subheading>Why Choose us?</Subheading>
            <Heading>We do not buy from the open market & traders.</Heading>
            <Text>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </Text>
            <Box display="flex" flexDirection="column" mt={36} gridGap={35}>
              <Point>
                <PointTitleWrapper>
                  <PointTitle>100% Natural Product</PointTitle>
                </PointTitleWrapper>
                <PointText>
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </PointText>
              </Point>
              <Point>
                <PointTitleWrapper>
                  <PointTitle>Increases resistance</PointTitle>
                </PointTitleWrapper>
                <PointText>
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </PointText>
              </Point>
            </Box>
          </Box>
          <Image src={vegiesImg} alt="Vegetables" />
        </Box>
        <CardList>
          <CardItem>
            <CardIconWrapper>
              <PiShoppingCartSimpleFill size={46} color={theme.colors.mtc} />
            </CardIconWrapper>
            <CardTitle>Return Policy</CardTitle>
            <CardText>
              Simply dummy text of the printintypesetting industry.
            </CardText>
          </CardItem>
          <CardItem>
            <CardIconWrapper>
              <PiLeafFill size={46} color={theme.colors.mtc} />
            </CardIconWrapper>
            <CardTitle>100% Fresh</CardTitle>
            <CardText>
              Simply dummy text of the printintypesetting industry.
            </CardText>
          </CardItem>
          <CardItem>
            <CardIconWrapper>
              <PiClockCountdownFill size={46} color={theme.colors.mtc} />
            </CardIconWrapper>
            <CardTitle>Support 24/7</CardTitle>
            <CardText>
              Simply dummy text of the printintypesetting industry.
            </CardText>
          </CardItem>
          <CardItem>
            <CardIconWrapper>
              <PiCreditCardFill size={46} color={theme.colors.mtc} />
            </CardIconWrapper>
            <CardTitle>Secured Payment</CardTitle>
            <CardText>
              Simply dummy text of the printintypesetting industry.
            </CardText>
          </CardItem>
        </CardList>
      </Container>
    </Section>
  );
};
