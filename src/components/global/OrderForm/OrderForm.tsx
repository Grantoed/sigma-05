import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { clearCart } from "src/redux/orders";
import { submitOrder } from "src/api/orderAPI";
import { orderSchema } from "src/validations/order.validation";
import { Box } from "src/components/global/Box";
import { Order } from "src/interfaces/Order.interface";
import {
  Form,
  FlexFieldWrapper,
  FieldWrapper,
  Label,
  Input,
  TextAreaWrapper,
  TextArea,
  SubmitButton,
  ErrorMessage,
} from "./OrderForm.styled";

type Props = {
  productsInCart: Order["productsInCart"];
  subtotal: Order["subtotal"];
  discount: Order["discount"];
  total: Order["total"];
};

export const OrderForm = ({
  productsInCart,
  subtotal,
  discount,
  total,
}: Props) => {
  const [orderSubmittedSuccessfully, setOrderSubmittedSuccessfully] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<Order["client"]>({
    mode: "onTouched",
    resolver: yupResolver<Order["client"]>(orderSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (orderSubmittedSuccessfully) {
      reset();
      dispatch(clearCart());
      navigate("/successful-order", { replace: true });
      setOrderSubmittedSuccessfully(false); // Reset for any subsequent submissions.
    }
  }, [orderSubmittedSuccessfully, reset, dispatch, navigate]);

  const onSubmit: SubmitHandler<Order["client"]> = async (data) => {
    try {
      await submitOrder({
        productsInCart,
        client: data,
        subtotal,
        discount,
        total,
      });
      setOrderSubmittedSuccessfully(true);
    } catch (e: any) {
      const errorMessage =
        e.response?.data?.errors?.[0] ||
        "Couldn't submit order. Please try again later";
      toast.error(errorMessage);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FlexFieldWrapper>
        <FieldWrapper>
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
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="email">Email*</Label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            placeholder="example@sigma.software"
          />
          {errors.email?.message && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </FieldWrapper>
      </FlexFieldWrapper>
      <FlexFieldWrapper>
        <FieldWrapper>
          <Label htmlFor="address">Address*</Label>
          <Input
            autoComplete="off"
            type="text"
            id="address"
            {...register("address")}
            placeholder="Kharkiv, Akademika Proskury Street, 1"
          />
          {errors.address?.message && (
            <ErrorMessage>{errors.address.message}</ErrorMessage>
          )}
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="phoneNumber">Phone number*</Label>
          <Input
            autoComplete="off"
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
            inputMode="numeric"
            placeholder="0501234567"
          />
          {errors.phoneNumber?.message && (
            <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
          )}
        </FieldWrapper>
      </FlexFieldWrapper>
      <TextAreaWrapper>
        <Label htmlFor="message">Message</Label>
        <TextArea
          autoComplete="off"
          id="message"
          {...register("message")}
          placeholder="Is there anything else you want us to know?"
        />
        {errors.message?.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
      </TextAreaWrapper>
      <Box>
        <SubmitButton disabled={isSubmitting || !isValid}>Confirm</SubmitButton>
      </Box>
    </Form>
  );
};
