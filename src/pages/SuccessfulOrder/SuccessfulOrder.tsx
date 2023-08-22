import React from "react";
import { Container } from "src/components/global/Container";
import { Section, Title, Background } from "./SuccessfulOrder.styled";

const SuccessfulOrder = () => {
  return (
    <Section>
      <Container display="flex" alignItems="center" justifyContent="center">
        <Title>Thank you for your order</Title>
      </Container>
      <Background />
    </Section>
  );
};

export default SuccessfulOrder;
