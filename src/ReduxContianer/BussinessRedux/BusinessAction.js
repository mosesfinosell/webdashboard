import axios from 'axios';
import UserActionType from '../constants/UserActionType';
import OrderActionType from '../constants/OrderActionType';
import ProductActionType from '../constants/ProductActionType';

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


	export const getUserDetails = (user_id) => async(dispatch,getState) => {
		dispatch({
			type: UserActionType.DATA_REQUEST
		});
		try {
			const {
				businessSignIn: {
					user: {
						businessDetails: { message },
					},
				},
			} = getState();
			const config = {
				headers: {
					Authorization: `Bearer ${message.password}`,
				},
			};
			const { data } = await axios.get(baseUrl + `/auths/signin?user=${user_id}`, config);
			dispatch({
				type: UserActionType.GET_USER_DETAIL_SUCCESS,
				payload: data,
			});
		}catch (error) {
			dispatch({
				type: UserActionType.GET_USER_DETAIL_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	}

	export const getOrders = (business_id) => async (dispatch) => {
		try{
			const {data} = await axios.get(baseUrl + `/order/fetch?business_id=${business_id}`)
			dispatch({
				type: OrderActionType.GET_ORDER_SUCCESS,
				payload: data
			})
		}catch (error){
			 dispatch({
					type: OrderActionType.GET_ORDER_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
		}
} 
	

export const createCustomers = (customer_name,customer_email,customer_id,customer_phonenumber,customer_address,business_id) => async (dispatch,getState) => {
	try {
		const {
			businessSignIn: { user: { businessDetails: { message } } },
		} = getState();
		 const config = {
			 headers: {
					Authorization: `Bearer ${message.password}`
				},
			};
		const { data } = await axios.post(
			baseUrl + `/customer/create`,
			
				{customer_name,
				customer_email,
				customer_id,
				customer_phonenumber,
				customer_address,
				business_id},
			
		 config
		); 
			dispatch({
				type: UserActionType.CREATE_CUSTOMER_SUCCESS,
				payload: data
			})
	} catch (error) {
		    dispatch({
					type: UserActionType.CREATE_CUSTOMER_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
		}
}



export const updatePassword =
	(user_id, old_password, new_password, retype_new_password) =>
	async (dispatch) => {
		try {
			const { data } = await axios.post(
				`https://finosell.link/api/user/updatepassword`,
				{
					user_id,
					old_password,
					new_password,
					retype_new_password,
				}
			);
			dispatch({
				type: UserActionType.UPDATE_PASSWORD_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: UserActionType.UPDATE_PASSWORD_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

// export const getProduct = () => async (dispatch) => { 
// 	try {
         
// 	}
// }

// PRODUCT

export const getProduct = (businessid, limitno, pageno) => async (dispatch,getState) => {
	try {
		const {
			businessSignIn: {
				user: {
					businessDetails: { message },
				},
			},
		} = getState();
		const config = {
			headers: {
				Authorization: `Bearer ${message.password}`,
			},
		};
		const { data } = await axios.post(`https://finosell.link/api/products/all`,
			{
				businessid,
				limitno,
				pageno,
			},
			config
		);
		dispatch({
			type: ProductActionType.GET_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ProductActionType.GET_PRODUCT_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};