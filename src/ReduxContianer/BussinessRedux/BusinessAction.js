// import axios from 'axios';
// import UserActionType from '../constants/UserActionType';
// import OrderActionType from '../constants/OrderActionType';
// import ProductActionType from '../constants/ProductActionType';

// const baseUrl = `https://finosell.link/api/v2`;
// export const businessUserSignUp =
// 	(name, phone_number, email, password, address, industry, account_type) =>
// 	async (dispatch) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 		try {
// 			const { data } = await axios.post(baseUrl + `/auths/firststage`, {
// 				name,
// 				phone_number,
// 				email,
// 				password,
// 				address,
// 				industry,
// 				account_type,
// 			});
// 			dispatch({
// 				type: UserActionType.SIGN_UP_SUCCESS,
// 				payload: data,
// 			});

// 			localStorage.setItem('businessDetails', JSON.stringify(data));
// 		} catch (error) {
// 			dispatch({
// 				type: UserActionType.SIGN_UP_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.error,
// 			});
// 		}
// 	};

// export const businessUserLogin =
// 	(phonenumber, password) => async (dispatch) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 		try {
// 			const { data } = await axios.post(baseUrl + `/auths/login`, {
// 				phonenumber,
// 				password,
// 			});
// 			dispatch({
// 				type: UserActionType.SIGN_IN_SUCCESS,
// 				payload: data,
// 			});

// 			localStorage.setItem('businessDetails', JSON.stringify(data));
// 		} catch (error) {
// 			dispatch({
// 				type: UserActionType.SIGN_IN_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.error,
// 			});
// 		}
// 	};

// 	export const getUserDetails = (user_id) => async(dispatch,getState) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST
// 		});
// 		try {
// 			const {
// 				businessSignIn: {
// 					user: {
// 						businessDetails: { message },
// 					},
// 				},
// 			} = getState();
// 			const config = {
// 				headers: {
// 					Authorization: `Bearer ${message.password}`,
// 				},
// 			};
// 			const { data } = await axios.get(baseUrl + `/auths/signin?user=${user_id}`, config);
// 			dispatch({
// 				type: UserActionType.GET_USER_DETAIL_SUCCESS,
// 				payload: data,
// 			});
// 		}catch (error) {
// 			dispatch({
// 				type: UserActionType.GET_USER_DETAIL_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 			});
// 		}
// 	}

// export const getOrders = (business_id) => async (dispatch) => {
// 			dispatch({
// 				type: UserActionType.DATA_REQUEST,
// 			});
// 		try{
// 			const {data} = await axios.get(baseUrl + `/order/fetch?business_id=${business_id}`)
// 			dispatch({
// 				type: OrderActionType.GET_ORDER_SUCCESS,
// 				payload: data
// 			})
// 		}catch (error){
// 			 dispatch({
// 					type: OrderActionType.GET_ORDER_ERROR,
// 					payload:
// 						error.response && error.response.data.message
// 							? error.response.data.message
// 							: error.message,
// 				});
// 		}
// }

// export const createOrders = (title,buy_id,buyer_email,buyer_phone,order_status,order_type, order_id,order_date,sales_channel,discount,shipping_address,payment_status,payment_method,product_id,business_id) => async (dispatch,getState) => {
// 	dispatch({
// 		type: UserActionType.DATA_REQUEST,
// 	});
// 	const {
// 		businessSignIn: {
// 			user: {
// 				businessDetails: { message },
// 			},
// 		},
// 	} = getState();
// 	const config = {
// 		headers: {
// 			Authorization: `Bearer ${message.password}`,
// 		},
// 	};
// 	try {
// 		const { data } = await axios.post(
// 			baseUrl +
// 				`/order/record`,{title,buy_id,buyer_email,buyer_phone,order_status,order_type, order_id,order_date,sales_channel,discount,shipping_address,payment_status,payment_method,product_id,business_id},config
// 		);
// 		dispatch({
// 			type: OrderActionType.CREATE_ORDER_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: OrderActionType.CREATE_ORDER_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const getCustomers = (business_id) => async (dispatch,getState) => {
// 	dispatch({
// 		type: UserActionType.DATA_REQUEST,
// 	});
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = await axios.get(
// 			baseUrl + `/customer/fetch?business_id=${business_id}`,config
// 		);
// 		dispatch({
// 			type: UserActionType.GET_CUSTOMER_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: UserActionType.GET_CUSTOMER_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const createCustomers = (customer_name,customer_email,customer_id,customer_phonenumber,customer_address,business_id) => async (dispatch,getState) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 	try {
// 		const {
// 			businessSignIn: { user: { businessDetails: { message } } },
// 		} = getState();
// 		 const config = {
// 			 headers: {
// 					Authorization: `Bearer ${message.password}`
// 				},
// 			};
// 		const { data } = await axios.post(
// 			baseUrl + `/customer/create`,

// 				{customer_name,
// 				customer_email,
// 				customer_id,
// 				customer_phonenumber,
// 				customer_address,
// 				business_id},

// 		 config
// 		);
// 			dispatch({
// 				type: UserActionType.CREATE_CUSTOMER_SUCCESS,
// 				payload: data
// 			})
// 	} catch (error) {
// 		    dispatch({
// 					type: UserActionType.CREATE_CUSTOMER_ERROR,
// 					payload:
// 						error.response && error.response.data.message
// 							? error.response.data.message
// 							: error.message,
// 				});
// 		}
// }

// export const updatePassword =
// 	(user_id, old_password, new_password, retype_new_password) =>
// 		async (dispatch) => {
// 			dispatch({
// 				type: UserActionType.DATA_REQUEST,
// 			});
// 		try {
// 			const { data } = await axios.post(
// 				`https://finosell.link/api/user/updatepassword`,
// 				{
// 					user_id,
// 					old_password,
// 					new_password,
// 					retype_new_password,
// 				}
// 			);
// 			dispatch({
// 				type: UserActionType.UPDATE_PASSWORD_SUCCESS,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: UserActionType.UPDATE_PASSWORD_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 			});
// 		}
// 		};

// export const updateProfile =
// 	(user_id, phonenumber, name, email, auth_code) => async (dispatch,getState) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 		try {
// 			const {
// 				businessSignIn: {
// 					user: {
// 						businessDetails: { message },
// 					},
// 				},
// 			} = getState();
// 			const config = {
// 				headers: {
// 					Authorization: `Bearer ${message.password}`,
// 				},
// 			};
// 			const { data } = await axios.post(
// 				`https://finosell.link/api/user/updateinfo`,
// 				{ user_id, phonenumber, name, email, auth_code },config
// 			);
// 			dispatch({
// 				type: UserActionType.UPDATE_PROFILE_SUCCESS,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: UserActionType.UPDATE_PROFILE_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 			});
// 		}
// 	};

// export const sendAuthCode = (email) => async (dispatch,getState) => {
//     dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 	});
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = await axios.put(baseUrl + `/reset/vemail/${email}`,config);
// 		dispatch({
// 			type: UserActionType.SEND_AUTH_CODE_SUCCESS,
// 			payload: data
// 		})
// 	} catch (error) {
// 		dispatch({
// 			type: UserActionType.SEND_AUTH_CODE_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// }

// export const uploadImage = (businessid, image) => async (dispatch) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 	try {
// 		const { data } = await axios.post(
// 			`https://finosell.link/api/user/updateimg`,
// 			{ businessid, image }
// 		);
// 		dispatch({
// 			type: UserActionType.UPLOAD_IMAGE_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: UserActionType.UPLOAD_IMAGE_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const addTeamMember =
// 	(account_id, phone, email, user_id, account_type, business_id) =>
// 	async (dispatch, getState) => {
// 		dispatch({
// 			type: UserActionType.DATA_REQUEST,
// 		});
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		try {
// 			const { data } = await axios.post(
// 				baseUrl + `/team/create`,
// 				{
// 					account_id,
// 					phone,
// 					email,
// 					user_id,
// 					account_type,
// 					business_id,
// 				},
// 				config
// 			);
// 			dispatch({
// 				type: UserActionType.ADD_TEAM_SUCCESS,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: UserActionType.ADD_TEAM_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 			});
// 		}
// 	};

// export const fetchTeamMember =
// 		(business_id) =>
// 		async (dispatch, getState) => {
// 			dispatch({
// 				type: UserActionType.DATA_REQUEST,
// 			});
// 			const {
// 				businessSignIn: {
// 					user: {
// 						businessDetails: { message },
// 					},
// 				},
// 			} = getState();
// 			const config = {
// 				headers: {
// 					Authorization: `Bearer ${message.password}`,
// 				},
// 			};
// 			try {
// 				const { data } = await axios.get(
// 					baseUrl + `/team/fetch?business_id=${business_id}`,config
// 				);
// 				dispatch({
// 					type: UserActionType.GET_TEAM_SUCCESS,
// 					payload: data,
// 				});
// 			} catch (error) {
// 				dispatch({
// 					type: UserActionType.GET_TEAM_ERROR,
// 					payload:
// 						error.response && error.response.data.message
// 							? error.response.data.message
// 							: error.message,
// 				});
// 			}
// 			};

// // PRODUCT

// export const createProduct = (description, title, seller, businessid, image, category, size, color,price) => async (dispatch, getState) => {
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = await axios.post(
// 			`https://finosell.link/api/seller/upload`,
// 			{
// 				description,
// 				title,
// 				seller,
// 				businessid,
// 				image,
// 				category,
// 				size,
// 				color,
// 				price,
// 			},
// 			config
// 		);
// 		dispatch({
// 			type: ProductActionType.CREATE_PRODUCT_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: ProductActionType.CREATE_PRODUCT_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const getProduct = (businessid) => async (dispatch,getState) => {
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = await axios.get(
// 			`https://finosell.link/api/products/all?businessid=${businessid}`,
// 			config
// 		);
// 		dispatch({
// 			type: ProductActionType.GET_PRODUCT_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: ProductActionType.GET_PRODUCT_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const createTransaction =
// 	(
// 		transaction_id,
// 		details,
// 		payement_date,
// 		payment_id,
// 		business_id,
// 		customer_id,
// 		payment_status,
// 		payment_method,
// 		payment_ref,
// 		transaction_type,
// 		amount,
// 		product_id
// 	) =>
// 	async (dispatch, getState) => {
// 		dispatch({
// 			type: OrderActionType.DATA_REQUEST,
// 		});
// 		try {
// 			const {
// 				businessSignIn: {
// 					user: {
// 						businessDetails: { message },
// 					},
// 				},
// 			} = getState();
// 			const config = {
// 				headers: {
// 					Authorization: `Bearer ${message.password}`,
// 				},
// 			};
// 			const { data } = await axios.post(baseUrl + `/history/record`, {
// 				transaction_id,
// 				details,
// 				payement_date,
// 				payment_id,
// 				business_id,
// 				customer_id,
// 				payment_status,
// 				payment_method,
// 				payment_ref,
// 				transaction_type,
// 				amount,
// 				product_id,
// 			}, config)
// 			dispatch({
// 				type: OrderActionType.CREATE_TRANSACTION_SUCCESS,
// 				payload: data
// 			})

// 		} catch (error) {
// 			dispatch({
// 				type: OrderActionType.CREATE_TRANSACTION_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 			});
// 		}
// 	};

// export const getTransaction = () => async (dispatch,getState) => {
// 	dispatch({
// 			type: OrderActionType.DATA_REQUEST
// 	})
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = axios.get(baseUrl + `history/fetch`, config);
// 			dispatch({
// 				type: OrderActionType.GET_TRANSACTION_SUCCESS,
// 				payload: data
// 			})
// 	} catch (error) {
// 		dispatch({
// 			type: OrderActionType.GET_TRANSACTION_ERROR,
// 				payload:
// 					error.response && error.response.data.message
// 						? error.response.data.message
// 						: error.message,
// 		})
// 		}
// }

// export const createStoreLink = (sub, user) => async (dispatch, getState) => {
// 	dispatch({
// 		type: OrderActionType.DATA_REQUEST,
// 	});
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = axios.post(`https://finosell.link/api/subdomain/create`, {
// 			sub,
// 			user,
// 		},config);
// 		dispatch({
// 			type: UserActionType.CREATE_STORELINK_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: UserActionType.CREATE_STORELINK_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

// export const checkUserExist = (user) => async (dispatch, getState) => {
// 	dispatch({
// 		type: OrderActionType.DATA_REQUEST,
// 	});
// 	try {
// 		const {
// 			businessSignIn: {
// 				user: {
// 					businessDetails: { message },
// 				},
// 			},
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${message.password}`,
// 			},
// 		};
// 		const { data } = axios.post(
// 			`https://finosell.link/api/subdomain/create`,
// 			{
// 				user,
// 			},
// 			config
// 		);
// 		dispatch({
// 			type: UserActionType.CREATE_STORELINK_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: UserActionType.CREATE_STORELINK_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

import {
  GET_BUSINESS_USER_DETAIL,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID_SUCCESS,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID_ERROR,
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  GET_ORDER_PAGINATION,
  GET_ORDER_PAGINATION_ERROR,
  GET_CUSTOMERS_START,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_STEP_ONE_DETAIL,
  GET_STEP_TWO_DETAIL,
  CREATE_STORE_LINK_START,
  CREATE_STORE_LINK_SUCCESS,
  CREATE_STORE_LINK_ERROR,
  CREATE_PAYMENT_START,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_ERROR,
} from "../constants/UserActionType";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { createStandaloneToast } from "@chakra-ui/react";
const toast = createStandaloneToast();
export const getBusinessUserInfo = (payload) => {
  return {
    type: GET_BUSINESS_USER_DETAIL,
    payload,
  };
};

export const getBusinessUserDetails = (user_id) => (dispatch) => {
  dispatch({ type: FETCH_BUSINESS_USER_DETAIL_WITH_ID });
  axiosWithAuth()
    .get(`/auths/signin?user=${user_id}`)
    .then((res) => {
      dispatch({
        type: FETCH_BUSINESS_USER_DETAIL_WITH_ID_SUCCESS,
        payload: res.data.message,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BUSINESS_USER_DETAIL_WITH_ID_ERROR,
        payload: err.response.data.error,
      });
    });
};

export const createOrders = (orderPayload) => (dispatch) => {
  console.log(orderPayload.orderPayload, "ORDER PAYLOAD");
  dispatch({ type: CREATE_ORDER_START });
  axiosWithAuth()
    .post(`/order/createorder`, {
      payment_method: orderPayload.orderPayload.payment_method,
      title: orderPayload.orderPayload.title,
      // buyer_id: "BusW5xmF",
      buyer_id: orderPayload.orderPayload.buyer_id,
      business_id: orderPayload.orderPayload.business_id[0],
      totalamount: orderPayload.orderPayload.totalamount,
      buyer_email: orderPayload.orderPayload.buyer_email,
      buyer_phone: orderPayload.orderPayload.buyer_phone,
      order_status: orderPayload.orderPayload.order_status,
      order_id: orderPayload.orderPayload.order_id,
      order_date: orderPayload.orderPayload.order_date,
      sales_channel: orderPayload.orderPayload.sales_channel,
      customer_id: orderPayload.orderPayload.customer_id,
      discount: orderPayload.orderPayload.discount,
      shipping_address: orderPayload.orderPayload.shipping_address,
      payment_status: orderPayload.orderPayload.payment_status,
      products: orderPayload.orderPayload.products,
    })
    .then((res) => {
      toast({
        position: "top",
        title: `Order Creation`,
        description: "Completed Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res.data.message,
      });
    })
    .catch((err) => {
      toast({
        position: "top",
        title: `Unsuccessful Attempt`,
        description: `Error creating order`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_ORDER_ERROR,
        payload: err.response.data.error,
      });
    });
};

export const createStoreLink = (user_id, storeName) => (dispatch) => {
  dispatch({ type: CREATE_STORE_LINK_START });
  axiosWithAuth()
    .post(`/subdomain/create`, {
      sub: storeName,
      user_id: user_id,
    })
    .then((res) => {
      console.log(res, "STORE LINK");
      dispatch({
        type: CREATE_STORE_LINK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "STORE ERR");
      dispatch({
        type: CREATE_STORE_LINK_ERROR,
        payload: err.response.data.error,
      });
    });
};

export const createTransaction = () => (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_START });
  axiosWithAuth()
    .post(`/history/createpayment`, {
      payment_status: 1,
      payment_method: "offline",
      payment_ref: "djhsjkamldad",
      transtype: 7,
      amount: 50000,
      product_id: "343rf43f3",
      customer_id: "868jdd5e4w4",
      business_id: "39394934nnnsed",
      payment_id: "fint4559444",
      Itemtype: "The details about the product",
      transaction_id: "t8e8394u9453434",
    })
    .then((res) => {
      console.log(res, "PAYMENT LINK");
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "PAYMENT ERR");
      dispatch({
        type: CREATE_PAYMENT_ERROR,
        payload: err.response.data.error,
      });
    });
};
// export const getOrders = (business_id, page) => (dispatch) => {
//   dispatch({ type: GET_ORDER_START });
//   axiosWithAuth()
//     .get(`/order/getorders?bussiness_id=${business_id}&page=${page}`)
//     .then((res) => {
// 		return res.data
//     //   dispatch({
//     //     type: GET_ORDER_SUCCESS,
//     //     payload: res.data,
//     //   });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_ORDER_ERROR,
//         payload: err.response.data.error,
//       });
//     });
// };

export const getOrders = (business_id, page) =>
  axiosWithAuth().get(
    `/order/getorders?bussiness_id=${business_id}&page=${page}`
  );

// export const getOrderPagination = (business_id) => (dispatch) => {
//   dispatch({ type: GET_ORDER_START });
//   axiosWithAuth()
//     .get(`/order/getorders?bussiness_id=${business_id}`)
//     .then((res) => {
//       console.log("PAGINATE", res.data);
//       dispatch({ type: GET_ORDER_PAGINATION, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_ORDER_PAGINATION_ERROR,
//         payload: err.response.data.error,
//       });
//     });
// };

export const getProduct = (business_id) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });
  axiosWithAuth()
    .get(`/products/all?businessid=${business_id}`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res.data.details,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: err.response.data.error,
      });
    });
};
export const getCustomers = (business_id) => (dispatch) => {
  dispatch({ type: GET_CUSTOMERS_START });
  axiosWithAuth()
    .get(`/customer/fetchAll?business_id=${business_id}`)
    .then((res) => {
      console.log(res, "CUSTOMERS");
      dispatch({
        type: GET_CUSTOMERS_SUCCESS,
        payload: res.data.customer,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CUSTOMERS_ERROR,
        payload: err.response.data.error,
      });
    });
};

export const getStepOneDetails = (payload) => {
  return {
    type: GET_STEP_ONE_DETAIL,
    payload,
  };
};
export const getStepTwoDetails = (payload) => {
  return {
    type: GET_STEP_TWO_DETAIL,
    payload,
  };
};

// export const getPayments = (business_id) => (dispatch) => {
// 	dispatch({ type: GET_ORDER_START });
// 	axiosWithAuth()
// 	  .get(`/history/fetch`)
// 	  .then((res) => {
// 		console.log(res, "GET ORDER");
// 		dispatch({
// 		  type: GET_ORDER_SUCCESS,
// 		  payload: res.data.message,
// 		});
// 	  })
// 	  .catch((err) => {
// 		console.log(err, "GET ORDER ERROR");
// 		dispatch({
// 		  type: GET_ORDER_ERROR,
// 		  payload: err.response.data.error,
// 		});
// 	  });
//   }
