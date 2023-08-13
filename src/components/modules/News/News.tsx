import React from "react";
import { useTheme } from "styled-components";
import { BiRightArrowAlt, BiSolidUser } from "react-icons/bi";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import {
  Section,
  NewsHeading as Heading,
  Link,
  LinkIcon,
  NewsItem,
  NewsDateWrapper,
  NewsDate,
  NewsTextWrapper,
  NewsAuthorWrapper,
  NewsAuthor,
  NewsTitle,
  NewsText,
  NewsLink,
} from "./News.styled";

export const News = () => {
  const theme = useTheme();
  return (
    <Section>
      <Container py={150}>
        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column" width={702}>
            <Subheading>News</Subheading>
            <Heading>
              Discover weekly content about organic food, & more
            </Heading>
          </Box>
          <Link to="/news">
            More News
            <LinkIcon>
              <BiRightArrowAlt size={15} color="#fff" />
            </LinkIcon>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={50}
        >
          <NewsItem>
            <NewsDateWrapper>
              <NewsDate>25 Nov</NewsDate>
            </NewsDateWrapper>
            <NewsTextWrapper>
              <NewsAuthorWrapper>
                <BiSolidUser size={20} color={theme.colors.ac} />
                <NewsAuthor>By Rachi Card</NewsAuthor>
              </NewsAuthorWrapper>
              <NewsTitle>The Benefits of Vitamin D & How to Get It</NewsTitle>
              <NewsText>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </NewsText>
              <NewsLink to="/">
                Read More
                <LinkIcon>
                  <BiRightArrowAlt size={15} color="#fff" />
                </LinkIcon>
              </NewsLink>
            </NewsTextWrapper>
          </NewsItem>
          <NewsItem>
            <NewsDateWrapper>
              <NewsDate>25 Nov</NewsDate>
            </NewsDateWrapper>
            <NewsTextWrapper>
              <NewsAuthorWrapper>
                <BiSolidUser size={20} color={theme.colors.ac} />
                <NewsAuthor>By Rachi Card</NewsAuthor>
              </NewsAuthorWrapper>
              <NewsTitle>Our Favourite Summertime Tomato</NewsTitle>
              <NewsText>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </NewsText>
              <NewsLink to="/">
                Read More
                <LinkIcon>
                  <BiRightArrowAlt size={15} color="#fff" />
                </LinkIcon>
              </NewsLink>
            </NewsTextWrapper>
          </NewsItem>
        </Box>
      </Container>
    </Section>
  );
};
