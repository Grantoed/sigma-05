import React from "react";
import { subscribe } from "src/api/subscriptionAPI";
import { Container } from "src/components/global/Container";
import {
  Section,
  Heading,
  SubscriptionWrapper,
  SubscriptionForm,
  Input,
  SubmitButton,
} from "./Subscription.styled";
import { toast } from "react-toastify";

export const Subscription = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      email: { value: string };
    };
    try {
      await subscribe(form.email.value);
      toast.success(
        "Thank you for subscribing to our newsletter. Please check your email!"
      );
    } catch (e: any) {
      const errorMessage =
        e.response?.data?.message ||
        "There was an error. Please try again later";
      toast.error(errorMessage);
    }
  };

  return (
    <Section>
      <Container py={90}>
        <SubscriptionWrapper>
          <Heading>Subscribe to our Newsletter</Heading>
          <SubscriptionForm onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Your Email Address"
            />
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </SubscriptionForm>
        </SubscriptionWrapper>
      </Container>
    </Section>
  );
};
