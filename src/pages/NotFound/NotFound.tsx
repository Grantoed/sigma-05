import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Container } from "src/components/global/Container";
import {
  Section,
  TextWrapper,
  Code,
  Title,
  Text,
  Button,
  ButtonIcon,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <Section>
      <Container px={214} py={260}>
        <TextWrapper>
          <Code>404</Code>
          <Title>Page not found</Title>
          <Text>
            The page you are looking for doesn't exist or has been moved
          </Text>
          <Button to="/">
            Go to Homepage
            <ButtonIcon>
              <BiRightArrowAlt size={15} color="#fff" />
            </ButtonIcon>
          </Button>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default NotFound;
