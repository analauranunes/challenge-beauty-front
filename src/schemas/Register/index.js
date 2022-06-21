import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required(""),
  email: yup.string().email("").required(""),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email")], "")
    .required(""),
  password: yup.string().required("").min(8, ""),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "")
    .required(""),
});

export default registerSchema;
