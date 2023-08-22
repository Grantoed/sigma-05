import * as yup from "yup";

export const orderSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Phone number should only contain numbers")
    .min(10, "Phone number should be at least 10 digits")
    .max(13, "Phone number should not exceed 13 digits")
    .required("Phone is required"),
  message: yup.string(),
});
