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
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.error,
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
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.error,
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
			dispatch({
				type: UserActionType.DATA_REQUEST,
			});
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

export const getCustomers = (business_id) => async (dispatch,getState) => {
	dispatch({
		type: UserActionType.DATA_REQUEST,
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
		const { data } = await axios.get(
			baseUrl + `/customer/fetch?business_id=${business_id}`,config
		);
		dispatch({
			type: UserActionType.GET_CUSTOMER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UserActionType.GET_CUSTOMER_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}; 


export const createCustomers = (customer_name,customer_email,customer_id,customer_phonenumber,customer_address,business_id) => async (dispatch,getState) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
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
			dispatch({
				type: UserActionType.DATA_REQUEST,
			});
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
	
export const updateProfile =
	(user_id, phonenumber, name, email, auth_code) => async (dispatch,getState) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
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
			const { data } = await axios.post(
				`https://finosell.link/api/user/updateinfo`,
				{ user_id, phonenumber, name, email, auth_code },config
			);
			dispatch({
				type: UserActionType.UPDATE_PROFILE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: UserActionType.UPDATE_PROFILE_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const sendAuthCode = (email) => async (dispatch,getState) => {
    dispatch({
			type: UserActionType.DATA_REQUEST,
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
		const { data } = await axios.put(baseUrl + `/reset/vemail/${email}`);
		dispatch({
			type: UserActionType.SEND_AUTH_CODE_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: UserActionType.SEND_AUTH_CODE_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}

export const uploadImage = (businessid, image) => async (dispatch) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
	try {
		const { data } = await axios.post(
			`https://finosell.link/api/user/updateimg`,
			{ businessid, image }
		);
		dispatch({
			type: UserActionType.UPLOAD_IMAGE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UserActionType.UPLOAD_IMAGE_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};


export const addTeamMember =
	(account_id, phone, email, user_id, account_type, business_id) =>
	async (dispatch, getState) => {
		dispatch({
			type: UserActionType.DATA_REQUEST,
		});
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
		try {
			const { data } = await axios.post(
				baseUrl + `/team/create`,
				{
					account_id,
					phone,
					email,
					user_id,
					account_type,
					business_id,
				},
				config
			);
			dispatch({
				type: UserActionType.ADD_TEAM_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: UserActionType.ADD_TEAM_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
	
export const fetchTeamMember =
		(business_id) =>
		async (dispatch, getState) => {
			dispatch({
				type: UserActionType.DATA_REQUEST,
			});
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
			try {
				const { data } = await axios.get(
					baseUrl + `/team/fetch?business_id=${business_id}`,config
				);
				dispatch({
					type: UserActionType.GET_TEAM_SUCCESS,
					payload: data,
				});
			} catch (error) {
				dispatch({
					type: UserActionType.GET_TEAM_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.message,
				});
			}
			};
		

// PRODUCT

export const getProduct = (businessid) => async (dispatch,getState) => {
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
		const { data } = await axios.get(
			`https://finosell.link/api/products/all?businessid=${businessid}`,
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

export const createTransaction =
	(
		transaction_id,
		details,
		payement_date,
		payment_id,
		business_id,
		customer_id,
		payment_status,
		payment_method,
		payment_ref,
		transaction_type,
		amount,
		product_id
	) =>
	async (dispatch, getState) => {
		dispatch({
			type: OrderActionType.DATA_REQUEST,
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
			const { data } = await axios.post(baseUrl + `/history/record`, {
				transaction_id,
				details,
				payement_date,
				payment_id,
				business_id,
				customer_id,
				payment_status,
				payment_method,
				payment_ref,
				transaction_type,
				amount,
				product_id,
			},config);
		} catch (error) {
			dispatch({
				type: OrderActionType.GET_PRODUCT_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const getTransaction = () => async (dispatch,getState) => {
	dispatch({
			type: OrderActionType.DATA_REQUEST
	})
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
		const { data } = axios.get(baseUrl + `history/fetch`);
			dispatch({
				type: OrderActionType.GET_TRANSACTION_SUCCESS,
				payload: data
			})
	} catch (error) {
		dispatch({
			type: OrderActionType.GET_TRANSACTION_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
		})
		}
}