import React from "react";
import { Container } from "src/components/global/Container";
import {
  Section,
  Heading,
  SubscriptionWrapper,
  FormWrapper,
  Input,
  SubmitButton,
} from "./Subscription.styled";

export const Subscription = () => {
  return (
    <Section>
      <Container py={90}>
        <SubscriptionWrapper>
          <Heading>Subscribe to our Newsletter</Heading>
          <FormWrapper>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <SubmitButton type="button">Subscribe</SubmitButton>
          </FormWrapper>
        </SubscriptionWrapper>
      </Container>
    </Section>
  );
};
