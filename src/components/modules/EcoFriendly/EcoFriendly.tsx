import React from "react";
import { Subheading } from "src/components/global/Subheading";
import {
  EcoFriendlyContainer as Container,
  EcoFriendlyHeading as Heading,
  Section,
  TextWrapper,
  BulletsWrapper,
  BulletItem,
  BulletTitle,
  BulletText,
} from "./EcoFriendly.styled";

export const EcoFriendly = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Subheading>Eco Friendly</Subheading>
          <Heading>Econis is a Friendly Organic Store</Heading>
          <BulletsWrapper>
            <BulletItem>
              <BulletTitle>Start with Our Company First</BulletTitle>
              <BulletText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </BulletText>
            </BulletItem>
            <BulletItem>
              <BulletTitle>Learn How to Grow Yourself</BulletTitle>
              <BulletText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </BulletText>
            </BulletItem>
            <BulletItem>
              <BulletTitle>Farming Strategies of Today</BulletTitle>
              <BulletText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </BulletText>
            </BulletItem>
          </BulletsWrapper>
        </TextWrapper>
      </Container>
    </Section>
  );
};
