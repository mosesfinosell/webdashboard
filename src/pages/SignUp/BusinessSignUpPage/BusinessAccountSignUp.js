import { Text, Link, Button, createStandaloneToast } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
// import { useState } from 'react';
import { FaPhone, FaEnvelope, FaIndustry,FaAddressCard,FaLock } from 'react-icons/fa';
import { MdAddBusiness } from 'react-icons/md'
// import createAccount  from '../../../ReduxContianer/actions/auth/signupActions';
import axios from 'axios';
// import Spinner from "../../../components/Spinner"
import '../../../components/auth.css';
import { useFormik } from 'formik';
import { useColorModeValue } from '@chakra-ui/color-mode';
import FormTitle from '../../../components/Form/FormTitle';
import CustomField from '../../../components/Form/Input';
import Submit from '../../../components/Form/Submit';
import toast from 'react-hot-toast';
import {
	SIGN_UP_LOADING,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
} from '../../../ReduxContianer/constants/businessSignupActionType';

const finosellClient = axios.create({
	baseURL: process.env.REACT_APP_FINOSELL_BASE_URI
});

const createAccount =
	(signData) =>
		async (dispatch) => {
		const {name, phone_number, email, password, address, industry, account_type} = signData
		dispatch({
			type: SIGN_UP_LOADING,
		});
		await finosellClient
			.post('auths/firststage', {
				name,
				phone_number,
				email,
				password,
				address,
				industry,
				account_type,
			})
			.then((res) => {
				const { status, message, data } = res.data;
				if (status) {
					dispatch({
						type: SIGN_UP_SUCCESS,
						payload: data,
					});
					toast.success('Sign up successfull !!!');
				} else {
					dispatch({
						type: SIGN_UP_ERROR,
						payload: message ? message : 'COULD NOT CONNECT',
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: SIGN_UP_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.error,
				});
				toast.error(error.response?.data.message);
			});
	};

 function BusinessAccountSignUp() {
const yellowbtn = useColorModeValue('yellow.500');

	 const dispatch = useDispatch();
	 const history = useNavigate();
	
	// Function
	 const businessSign = useSelector((state) => state.businessSignup);
		const {loading, success } = businessSign;

			

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid Email').required('Email is required'),
		phoneNumber: Yup.number()
			.typeError('Phone number must be digits')
			.required('Phone number is required'),
		address: Yup.string().required('Address is required'),
		industry: Yup.string().required('Industry is required'),
		password: Yup.string()
			.min(5, 'Too short')
			.max(9, 'Okay')
			.required('Password is required'),
	});
	const initialValues = {
		name: '',
		email: '',
		phoneNumber: '',
		password: '',
		address: '',
		industry: '',
	};

	const onSubmit = (values, tools) => {
		const formData = {
			name: values.name,
			email: values.email,
			password: values.password,
			phone_number: values.phoneNumber,
			address: values.address,
			industry: values.industry,
			account_type: 'business',
		};
		dispatch(createAccount(formData));
		tools.resetForm()
		if (success) {
			return history('/download-app');
		}
	};
	
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<>
			<FormTitle
				title='Create a business account'
				text='Use your business information'
			/>

			<form onSubmit={formik.handleSubmit}>
				<CustomField
					type='name'
					id='name'
					Left={MdAddBusiness}
					formik={formik}
					label='Business Name'
					placeholder='Jumoke Adetola'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
				<CustomField
					type='email'
					id='email'
					Left={FaEnvelope}
					formik={formik}
					label='Business Email'
					placeholder='Email Address'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				<CustomField
					type='phoneNumber'
					id='phoneNumber'
					Left={FaPhone}
					formik={formik}
					label='Phone Number'
					placeholder='08012345678'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.phoneNumber}
				/>
				<CustomField
					type='address'
					id='address'
					Left={FaAddressCard}
					formik={formik}
					label='Address'
					placeholder='Ibadan'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.address}
				/>
				<CustomField
					type='industry'
					id='industry'
					Left={FaIndustry}
					formik={formik}
					label='Industry'
					placeholder='Food'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.industry}
				/>
				<CustomField
					type='password'
					id='password'
					Left={FaLock}
					formik={formik}
					label='Password'
					placeholder='********'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{/* <Submit type='submit'>
					{!loading ? 'Continue' : <Spinner size={20} border={5} />}
				</Submit> */}
				<Submit>
					<Button	
						mt={3}
						bg={yellowbtn}
						width='500px'
						h='70px'
						borderRadius='0px 11px 11px 11px'
						type='submit'
						color='white'
						_hover={{ bg: '#1A202C' }}
						isLoading={loading}
						loadingText='Sign Up...'
						spinnerPlacement='end'>
						Continue
					</Button>
				</Submit>
			</form>
			<Text
				fontSize='16px'
				// lineHeight="5"
				style={{
					justifyContent: 'center',
					display: 'flex',
					paddingTop: '0.2rem',
					paddingBottom: '0.4rem',
				}}>
				Already have an account?
				<Text as={Link} pl='2' to='/business-signin' color='yellow.500'>
					Login
				</Text>
			</Text>
		</>
	);
}

export default BusinessAccountSignUp;
