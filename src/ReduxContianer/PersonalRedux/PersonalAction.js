import axios from 'axios';
import UserActionType from '../constants/UserActionType';
import OrderActionType from '../constants/OrderActionType';

const baseUrl = `https://finosell.link/api/v2`;

export const personalUserSignUp =
	(name, phone_number, email, password, account_type) => async (dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
		try {
			const { data } = await axios.post(baseUrl + `/auths/firststage`, {
				name,
				phone_number,
				email,
				password,
				account_type,
			});
			dispatch({
				type: UserActionType.SIGN_UP_SUCCESS,
				payload: data,
			});

			localStorage.setItem('userDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserActionType.SIGN_UP_ERROR,
				payload: error.response && error.response.data.message,
				//   ? error.response.data.message
				//   : error.message,
			});
		}
	};

export const peronalUserLogin = (phonenumber, password) => async (dispatch) => {
	dispatch({
		type: UserActionType.DATA_REQUEST,
	});
	try {
		const { data } = await axios.post(baseUrl + `/auths/login`, {
			phonenumber,
			password,
		});
		dispatch({
			type: UserActionType.SIGN_IN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: UserActionType.SIGN_IN_ERROR,
			payload: error.response && error.response.data.message,
		});
	}
};

export const SendOtpSms = (user) => async (dispatch) => {
	try {
		const { data } = await axios.post(baseUrl + `/sms/sendsms`, { user });
		dispatch({
			type: UserActionType.SEND_SMS_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: UserActionType.SEND_SMS_ERROR,
			payload: error.response && error.response.data.message,
		});
	}
};

export const verifyNumberSms = (user, code) => async (dispatch) => {
	try {
		const { data } = await axios.post(baseUrl + `/sms/verifysms`, {
			user,
			code,
		});
		dispatch({
			type: UserActionType.VERIFY_NUMBRER_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: UserActionType.VERIFY_NUMBRER_ERROR,
			payload: error.response && error.response.data,
		});
	}
};

export const getUserDetail = (user_id) => async (dispatch) => {
	try {
		const { data } = await axios.get(baseUrl + `/auths/signin?${user_id}`);
		dispatch({
			type: UserActionType.GET_USER_DETAIL_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UserActionType.GET_USER_DETAIL_ERROR,
			payload: error.response && error.response.data,
		});
	}
};



