import axios from 'axios';
import toast from 'react-hot-toast';
import {
	VERIFICATION,
	SEND_SMS_LOADING,
	SEND_SMS_SUCCESS,
	SEND_SMS_ERROR,
	SEND_EMAIL_LOADING,
	SEND_EMAIL_SUCCESS,
	SEND_EMAIL_ERROR,
} from '../../constants/businessSignupActionType';

const finosellClient = axios.create({
	baseURL: 'https://finosell.link/api/v2'
	// process.env.REACT_APP_FINOSELL_BASE_URI
});

export const setVerification = (dispatch, data) => {
	return dispatch({
		type: VERIFICATION,
		payload: data,
	});
};

export const SendOtpSms = (user) => async (dispatch) => {
	dispatch({
		type: SEND_SMS_LOADING,
	});
    await finosellClient
			.post('/sms/sendsms', {
				user,
			})

			.then((res) => {
				const { status, message, data } = res.data;
				if (status) {
					dispatch({
						type: SEND_SMS_SUCCESS,
						payload: data,
					});
					toast.success('Otp Sent !!!');
				} else {
					dispatch({
						type: SEND_SMS_ERROR,
						payload: message ? message : 'COULD NOT CONNECT',
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: SEND_SMS_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.error,
				});
				toast.error(error.response?.data.message);
			});
};

// export const SendEmailOtp = (user) => async (dispatch) => {
// 	dispatch({
// 		type: SEND_SMS_LOADING,
// 	});
// 	await finosellClient
// 		.post('/cc/send', {
// 			user,
// 		})

// 		.then((res) => {
// 			const { status, message, data } = res.data;
// 			if (status) {
// 				dispatch({
// 					type: SEND_SMS_SUCCESS,
// 					payload: data,
// 				});
// 				toast.success('Otp Sent !!!');
// 			} else {
// 				dispatch({
// 					type: SEND_SMS_ERROR,
// 					payload: message ? message : 'COULD NOT CONNECT',
// 				});
// 			}
// 		})
// 		.catch((error) => {
// 			dispatch({
// 				type: SEND_SMS_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.error,
// 			});
// 			toast.error(error.response?.data.message);
// 		});
// };


