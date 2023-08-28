import React, { useState } from "react";
import { toast } from "react-toastify";
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

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const Subscription = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;

    if (!email) {
      toast.error("Email field cannot be empty");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setIsSubscribing(true);
      await subscribe(email);
      setIsSubscribing(false);
      form.reset();
      toast.success(
        "Thank you for subscribing to our newsletter. Please check your email!"
      );
    } catch (e: any) {
      const errorMessage =
        e.response?.data?.message ||
        "There was an error. Please try again later";
      setIsSubscribing(false);
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
            <SubmitButton type="submit" disabled={isSubscribing}>
              Subscribe
            </SubmitButton>
          </SubscriptionForm>
        </SubscriptionWrapper>
      </Container>
    </Section>
  );
};
