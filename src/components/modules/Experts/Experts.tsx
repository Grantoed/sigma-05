import React from "react";
import { useTheme } from "styled-components";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";
import { Container } from "src/components/global/Container";
import {
  Section,
  ExpertsSubheading as Subheading,
  ExpertsHeading as Heading,
  Text,
  CardList,
  CardItem,
  CardImage,
  CardTextWrapper,
  CardNameWrapper,
  CardName,
  CardPosition,
  CardSocialsWrapper,
  CardLink,
} from "./Experts.styled";
import giovanniImg from "src/images/Giovani-Bacardo.jpg";
import marianneImg from "src/images/Marianne-Loreno.jpg";
import rigaImg from "src/images/Riga-Pelore.jpg";

export const Experts = () => {
  const theme = useTheme();

  return (
    <Section>
      <Container>
        <Subheading>Team</Subheading>
        <Heading>Our Organic Experts</Heading>
        <Text>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </Text>
        <CardList>
          <CardItem>
            <CardImage src={giovanniImg} />
            <CardTextWrapper>
              <CardNameWrapper>
                <CardName>Giovani Bacardo</CardName>
                <CardPosition>Farmer</CardPosition>
              </CardNameWrapper>
              <CardSocialsWrapper>
                <CardLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="instagram"
                >
                  <BiLogoInstagram size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="facebook"
                >
                  <BiLogoFacebookCircle size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="twitter"
                >
                  <BiLogoTwitter size={22} color={theme.colors.mtc} />
                </CardLink>
              </CardSocialsWrapper>
            </CardTextWrapper>
          </CardItem>
          <CardItem>
            <CardImage src={marianneImg} />
            <CardTextWrapper>
              <CardNameWrapper>
                <CardName>Marianne Loreno</CardName>
                <CardPosition>Designer</CardPosition>
              </CardNameWrapper>
              <CardSocialsWrapper>
                <CardLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="instagram"
                >
                  <BiLogoInstagram size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="facebook"
                >
                  <BiLogoFacebookCircle size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="twitter"
                >
                  <BiLogoTwitter size={22} color={theme.colors.mtc} />
                </CardLink>
              </CardSocialsWrapper>
            </CardTextWrapper>
          </CardItem>
          <CardItem>
            <CardImage src={rigaImg} />
            <CardTextWrapper>
              <CardNameWrapper>
                <CardName>Riga Pelore</CardName>
                <CardPosition>Farmer</CardPosition>
              </CardNameWrapper>
              <CardSocialsWrapper>
                <CardLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="instagram"
                >
                  <BiLogoInstagram size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="facebook"
                >
                  <BiLogoFacebookCircle size={22} color={theme.colors.mtc} />
                </CardLink>
                <CardLink
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="twitter"
                >
                  <BiLogoTwitter size={22} color={theme.colors.mtc} />
                </CardLink>
              </CardSocialsWrapper>
            </CardTextWrapper>
          </CardItem>
        </CardList>
      </Container>
    </Section>
  );
};
