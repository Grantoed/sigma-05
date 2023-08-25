import * as yup from "yup";

export const orderSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "Name should be at least 2 characters")
    .max(20, "Name should not exceed 20 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  address: yup
    .string()
    .max(20, "Address should not exceed 20 characters")
    .required("Address is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Phone number should only contain numbers")
    .min(10, "Phone number should be at least 10 digits")
    .max(13, "Phone number should not exceed 13 digits")
    .required("Phone is required"),
  message: yup.string().max(150, "Message should not exceed 150 characters"),
});
