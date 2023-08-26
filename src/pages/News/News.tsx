import React from "react";
import { Container } from "src/components/global/Container";
import { PageBanner } from "src/components/global/PageBanner";
import { NewsPiece } from "src/components/global/NewsPiece";
import { Subscription } from "src/components/modules/Subscription";
import { Section } from "./News.styled";
import newsBgImg from "src/images/news-banner.webp";
import lettuceImg from "src/images/lettuce.webp";
import tomatoesImg from "src/images/tomatoes.webp";
import vegetablesImg from "src/images/vegetables.webp";
import dudeImg from "src/images/dude.webp";
import womanImg from "src/images/woman.webp";
import plasticImg from "src/images/plastic.webp";

const News = () => {
  return (
    <>
      <PageBanner backgroundImage={newsBgImg} backgroundColor="#f5f5f7">
        Recent News
      </PageBanner>
      <Section>
        <Container
          py={90}
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="auto"
          gridColumnGap={46}
          gridRowGap={104}
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
            title="Our Favorite Summertime Tomato"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={tomatoesImg}
          />
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="The Benefits of Vitamin D & How to Get It"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={vegetablesImg}
          />
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="Research More Organic Foods"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={dudeImg}
          />
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="Everyday Fresh Fruites"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={womanImg}
          />
          <NewsPiece
            date="25 Nov"
            author="Rachi Card"
            title="Don’t Use Plastic Product! it’s Kill Nature"
            text="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum"
            url="#"
            imageURL={plasticImg}
          />
        </Container>
      </Section>
      <Subscription />
    </>
  );
};

export default News;
