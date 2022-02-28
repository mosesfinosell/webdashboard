import axios from 'axios';
import UserActionType from '../constants/UserActionType';

const baseUrl = `https://finosell.link/api/v2`;

export const businessUserSignUp =
	(name, phone_number, email, password, address, industry, account_type) =>
	async (dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
		try {
			const { data } = await axios.post(baseUrl + `/auths/firststage`, {
				name,
				phone_number,
				email,
				password,
				address,
				industry,
				account_type,
			});
			dispatch({
				type: UserActionType.SIGN_UP_SUCCESS,
				payload: data,
			});

			localStorage.setItem('businessDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserActionType.SIGN_UP_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	};

export const businessUserLogin =
	(phonenumber, password) => async (dispatch) => {
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

			localStorage.setItem('businessDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserActionType.SIGN_IN_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	};


	export const creditUserAccount = (amount,user_id,balance_type,ref,platform) => async(dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST
		});
		try {
			const {data} = await axios.post(baseUrl + `/finance/credit`,{amount,user_id,balance_type,ref,platform})
			dispatch({
				type: UserActionType.CREDIT_USER_SUCCESS,
				payload: data
			});
		}catch (error) {
			dispatch({
				type: UserActionType.CREDIT_USER_ERROR,
				payload: error.response && error.response.data.message,
			});
		}
	}
