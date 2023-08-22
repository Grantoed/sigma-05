import * as yup from "yup";

export const orderSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup.string().required("Phone is required"),
  message: yup.string(),
});
