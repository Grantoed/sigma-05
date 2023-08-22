import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { submitOrder } from "src/api/orderAPI";
import { orderSchema } from "src/validations/order.validation";
import { Box } from "src/components/global/Box";
import { Order } from "src/interfaces/Order.interface";
import {
  Form,
  Field,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from "./OrderForm.styled";

type Props = {
  productsInCart: Order["productsInCart"];
  totalPrice: Order["totalPrice"];
  totalDiscount: Order["totalDiscount"];
};

export const OrderForm = ({
  productsInCart,
  totalPrice,
  totalDiscount,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    reset,
    setError,
  } = useForm<Order["client"]>({
    defaultValues: {
      //   email: "",
    },
    mode: "onTouched",
    resolver: yupResolver<Order["client"]>(orderSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<Order["client"]> = async (data) => {
    const r = await submitOrder({
      productsInCart,
      client: data,
      totalPrice,
      totalDiscount,
    });
    if (r.status === 400) {
      setError("root", {
        type: "manual",
        message: "Couldn't submit order. Please try again later",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Field>
        <Label htmlFor="fullName">Full name*</Label>
        <Input
          type="name"
          id="fullName"
          {...register("fullName")}
          placeholder="John Doe"
        />
        {errors.fullName?.message && (
          <ErrorMessage>{errors.fullName.message}</ErrorMessage>
        )}
      </Field>
      <Field>
        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          placeholder="example@mail.com"
        />
        {errors.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
      </Field>

      <Field>
        <Label htmlFor="address">Address*</Label>
        <Input
          autoComplete="off"
          type="text"
          id="address"
          {...register("address")}
        />
        {errors.address?.message && (
          <ErrorMessage>{errors.address.message}</ErrorMessage>
        )}
      </Field>
      <Field>
        <Label htmlFor="phoneNumber">Phone number*</Label>
        <Input
          autoComplete="off"
          type="text"
          id="phoneNumber"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber?.message && (
          <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
        )}
      </Field>
      <Field>
        <Label htmlFor="message">Message</Label>
        <Input
          autoComplete="off"
          type="text"
          id="message"
          {...register("message")}
        />
        {errors.message?.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
      </Field>
      <Box>
        <SubmitButton disabled={isSubmitting || !isValid}>Confirm</SubmitButton>
      </Box>
    </Form>
  );
};
