import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Subheading } from "src/components/global/Subheading";
import { SectionHeading } from "src/components/global/SectionHeading";
import { NewsPiece } from "src/components/global/NewsPiece";
import { Section, Link, LinkIcon } from "./News.styled";
import lettuceImg from "src/images/lettuce.webp";
import tomatoesImg from "src/images/tomatoes.webp";

export const News = () => {
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
            <SectionHeading>
              Discover weekly content about organic food, & more
            </SectionHeading>
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
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="The Benefits of Vitamin D & How to Get It"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={lettuceImg}
          />
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="Our Favourite Summertime Tomato"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={tomatoesImg}
          />
        </Box>
      </Container>
    </Section>
  );
};
