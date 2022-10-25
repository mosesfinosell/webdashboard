import * as yup from 'yup';

export default yup.object().shape({
	password: yup
		.string()
		.min(5, 'Too short')
		.max(9, 'Okay')
		.required('Password is required'),
	email: yup.string().email('Invalid Email').required('Email is required'),
});

export const passwordValidator = yup
  .string()
  .required("Password is required")
  .min(6, "password should be at least 6 characters long")
  .matches(/[a-z]/, "password must contain at least 1 lower case letter")
  .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
  .matches(/[0-9]/, "password must contain at least 1 number")
  .matches(/\W|_/, "password must contain at least 1 special character");

export const confirmPasswordValidator = yup
  .string()
  .oneOf([yup.ref("password"), null], "Passwords must match")
  .required("Password confirmation is required");

export const emailValidator = yup
  .string()
  .email("Invalid Email")
  .required("Email is required");