import * as yup from 'yup';

export default yup.object().shape({
	password: yup
		.string()
		.min(5, 'Too short')
		.max(9, 'Okay')
		.required('Password is required'),
	email: yup.string().email('Invalid Email').required('Email is required'),
});
