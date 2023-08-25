import React from "react";
import { useTheme } from "styled-components";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoPinterest,
} from "react-icons/bi";
import { Container } from "src/components/global/Container";
import { Logo } from "src/components/global/Logo";
import {
  FooterSection,
  MainWrapper,
  Text,
  SocialsList,
  SocialsItem,
  SocialsLink,
  SectionName,
  ContactsWrapper,
  ContactsList,
  ContactsItem,
  ContactsType,
  ContactsInfo,
  UtilityWrapper,
  UtilityList,
  UtilityItem,
  UtilityInfo,
} from "./Footer.styled";

export const Footer = () => {
  const theme = useTheme();
  return (
    <FooterSection>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={90}
      >
        <ContactsWrapper>
          <SectionName>Contact Us</SectionName>
          <ContactsList>
            <ContactsItem>
              <ContactsType>Email</ContactsType>
              <ContactsInfo href="mailto:needhelp@organia.com">
                needhelp@organia.com
              </ContactsInfo>
            </ContactsItem>
            <ContactsItem>
              <ContactsType>Phone</ContactsType>
              <ContactsInfo href="tel:666888888">666 888 888</ContactsInfo>
            </ContactsItem>
            <ContactsItem>
              <ContactsType>Address</ContactsType>
              <ContactsInfo
                href="https://www.google.com/maps/search/88+road,+borklyn+street,+USA/@50.4536387,30.5227218,14z?entry=ttu"
                target="_blank"
              >
                88 road, borklyn street, USA
              </ContactsInfo>
            </ContactsItem>
          </ContactsList>
        </ContactsWrapper>
        <MainWrapper>
          <Logo />
          <Text>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </Text>
          <SocialsList>
            <SocialsItem>
              <SocialsLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="instagram"
              >
                <BiLogoInstagram size={25} color={theme.colors.mtc} />
              </SocialsLink>
            </SocialsItem>
            <SocialsItem>
              <SocialsLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="facebook"
              >
                <BiLogoFacebookCircle size={25} color={theme.colors.mtc} />
              </SocialsLink>
            </SocialsItem>
            <SocialsItem>
              <SocialsLink
                href="https://www.twitter.com/"
                target="_blank"
                aria-label="twitter"
              >
                <BiLogoTwitter size={25} color={theme.colors.mtc} />
              </SocialsLink>
            </SocialsItem>
            <SocialsItem>
              <SocialsLink
                href="https://www.pinterest.com/"
                target="_blank"
                aria-label="pinterest"
              >
                <BiLogoPinterest size={25} color={theme.colors.mtc} />
              </SocialsLink>
            </SocialsItem>
          </SocialsList>
        </MainWrapper>
        <UtilityWrapper>
          <SectionName>Utility Pages</SectionName>
          <UtilityList>
            <UtilityItem>
              <UtilityInfo href="#">Style Guide</UtilityInfo>
            </UtilityItem>
            <UtilityItem>
              <UtilityInfo href="#">404 Not Found</UtilityInfo>
            </UtilityItem>
            <UtilityItem>
              <UtilityInfo href="#">Password Protected</UtilityInfo>
            </UtilityItem>
            <UtilityItem>
              <UtilityInfo href="#">Licences</UtilityInfo>
            </UtilityItem>
            <UtilityItem>
              <UtilityInfo href="#">Changelog</UtilityInfo>
            </UtilityItem>
          </UtilityList>
        </UtilityWrapper>
      </Container>
    </FooterSection>
  );
};
