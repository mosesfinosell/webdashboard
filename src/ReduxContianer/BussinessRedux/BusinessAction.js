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
	CREATE_CUSTOMERS_START,
	CREATE_CUSTOMERS_SUCCESS,
	CREATE_CUSTOMERS_ERROR,
	CREATE_INVOICE_START,
	CREATE_INVOICE_SUCCESS,
	CREATE_INVOICE_ERROR,
	GET_INVOICE_START,
	GET_INVOICE_SUCCESS,
	GET_INVOICE_ERROR,
	// CREATE_RECIEPT_START,
	// CREATE_RECIEPT_SUCCESS,
	// CREATE_RECIEPT_ERROR,
	// GET_RECIEPT_START,
	// GET_RECIEPT_SUCCESS,
	// GET_RECIEPT_ERROR,
	CREATE_TEAMS_START,
	CREATE_TEAMS_SUCCESS,
	CREATE_TEAMS_ERROR,
	GET_TEAMS_START,
	GET_TEAMS_SUCCESS,
	GET_TEAMS_ERROR,
	GET_PRODUCTS_START,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
  	GET_STORE_METRIC_START,
	GET_STORE_METRIC_SUCCESS,
	GET_STORE_METRIC_ERROR,
	GET_STEP_ONE_DETAIL,
	GET_STEP_TWO_DETAIL,
	CREATE_STORE_LINK_START,
	CREATE_STORE_LINK_SUCCESS,
	CREATE_STORE_LINK_ERROR,
	GET_STORE_LINK_START,
	GET_STORE_LINK_SUCCESS,
	GET_STORE_LINK_ERROR,
	UPDATE_STORE_PROFILE_START,
	UPDATE_STORE_PROFILE_SUCCESS,
	UPDATE_STORE_PROFILE_ERROR,
	UPDATE_SOCIALMEDIA_START,
	UPDATE_SOCIALMEDIA_SUCCESS,
	UPDATE_SOCIALMEDIA_ERROR,
	CREATE_PAYMENT_START,
	CREATE_PAYMENT_SUCCESS,
	CREATE_PAYMENT_ERROR,
	CREATE_PRODUCT_LOADING,
	CREATE_PRODUCT_SUCCESS,
	CREATE_PRODUCT_ERROR,
	SAVE_TRANSACTION_DETAIL,
	SET_MODAL,
	GET_BUSINESS_STAT_SUCCESS,
	GET_BUSINESS_STAT_ERROR,
	UPLOAD_IMAGE_LOADING,
	UPLOAD_IMAGE_SUCCESS,
	UPLOAD_IMAGE_ERROR,
	SEND_AUTH_CODE_START,
	SEND_AUTH_CODE_SUCCESS,
	SEND_AUTH_CODE_ERROR,
	UPDATE_PROFILE_START,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_ERROR,
	UPDATE_PASSWORD_START,
	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_ERROR,
} from '../constants/UserActionType';
import { axiosWithAuth, cancelToken } from '../../utils/axiosWithAuth';
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
  dispatch({ type: CREATE_ORDER_START });
  axiosWithAuth()
    .post(`/order/createorder`, {
      payment_method: orderPayload.orderPayload.payment_method,
      title: orderPayload.orderPayload.title,
      // buyer_id: "BusW5xmF",
      buyer_id: orderPayload.orderPayload.buyer_id,
      business_id: orderPayload.orderPayload.business_id,
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
      console.log(res, "GT");
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
        description: `${err.response.data.message}`,
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
		 toast({
        position: "top",
        title: `Store Link Created`,
        description: "You have successfully create a store link",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(res, "STORE LINK");
      dispatch({
        type: CREATE_STORE_LINK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
		 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
      dispatch({
        type: CREATE_STORE_LINK_ERROR,
        payload: err.response.data.error,
      });
    });
};


export const updatePassword =
	(user_id, oldPassword, newPassword, retypeNewPassword) => (dispatch) => {
		dispatch({ type: UPDATE_PASSWORD_START });
		axiosWithAuth()
			.post(`/user/updatepassword`, {
				user_id: user_id,
				old_password: oldPassword,
				new_password: newPassword,
				retype_new_password: retypeNewPassword,
			})
			.then((res) => {
				 toast({
        position: "top",
        title: `Password Updated`,
        description: "You have successfully update your password",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
				dispatch({
					type: UPDATE_PASSWORD_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
				dispatch({
					type: UPDATE_PASSWORD_ERROR,
					payload: err.response.data.error,
				});
			});
	};

export const updateProfileInfo =
	(user_id, phonenumber, name, email, auth_code) => (dispatch) => {
		dispatch({ type: UPDATE_PROFILE_START });
		axiosWithAuth()
			.post(`/user/updateinfo`, {
				user_id: user_id,
				phonenumber: phonenumber,
				name: name,
				email: email,
				auth_code: auth_code,
			})
			.then((res) => {
				 toast({
        position: "top",
        title: `Profile Updated`,
        description: "You have successfully update your profile",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
				dispatch({
					type: UPDATE_PROFILE_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
				dispatch({
					type: UPDATE_PROFILE_ERROR,
					payload: err.response.data.error,
				});
			});
	};

export const sendAuthCode = (email) => (dispatch) => {
	dispatch({ type: SEND_AUTH_CODE_START });
	axiosWithAuth()
		.put(`/reset/vemail/${email}`, {
			email: email,
		})
		.then((res) => {
			 toast({
        position: "top",
        title: `Auth Code`,
        description: "Auth code sent successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
			dispatch({
				type: SEND_AUTH_CODE_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
			dispatch({
				type: SEND_AUTH_CODE_ERROR,
				payload: err.response.data.error,
			});
		});
};


export const createProduct = () => (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_LOADING });
  axiosWithAuth()
    .post(`/products/create`)
    .then((res) => {
      console.log(res, "PRODUCT CREATED");
      toast({
        position: "top",
        title: `Product Creation`,
        description: "Completed Succesfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data?.message,
      });
    })
    .catch((err) => {
      console.log(err, "error");
      toast({
        position: "top",
        title: `Unsuccessful Attempt`,
        description: `${err.response?.data}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: err.response?.data.error,
      });
    });
};

export const createCustomers =
  (
    customer_name,
    customer_email,
    customer_id,
    customer_phonenumber,
    customer_address,
    business_id
  ) =>
  (dispatch) => {
    dispatch({ type: CREATE_CUSTOMERS_START });
    axiosWithAuth()
      .post(`/customer/create`, {
        customer_name,
        customer_email,
        customer_id,
        customer_phonenumber,
        customer_address,
        business_id,
      })
      .then((res) => {
        console.log(res, "CUSTOMER CREATED");
        toast({
          position: "top",
          title: `CUSTOMER Creation`,
          description: "Completed Succesfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch({
          type: CREATE_CUSTOMERS_SUCCESS,
          payload: res.data?.message,
        });
      })
      .catch((err) => {
        console.log(err, "error");
        toast({
          position: "top",
          title: `Unsuccessful Attempt`,
          description: `${err.response?.data}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        dispatch({
          type: CREATE_CUSTOMERS_ERROR,
          payload: err.response?.data.error,
        });
      });
  };

  
  export const addTeamMember =
		(account_id, phone, email, user_id, account_type, business_id) =>
		(dispatch) => {
			dispatch({ type: CREATE_TEAMS_START });
			axiosWithAuth()
				.post(`/team/create`, {
					account_id,
					phone,
					email,
					user_id,
					account_type,
					business_id,
				})
				.then((res) => {
					console.log(res, 'CUSTOMER CREATED');
					toast({
						position: 'top',
						title: `CUSTOMER Creation`,
						description: 'Completed Succesfully',
						status: 'success',
						duration: 3000,
						isClosable: true,
					});
					dispatch({
						type: CREATE_TEAMS_SUCCESS,
						payload: res.data?.message,
					});
				})
				.catch((err) => {
					console.log(err, 'error');
					toast({
						position: 'top',
						title: `Unsuccessful Attempt`,
						description: `${err.response?.data}`,
						status: 'error',
						duration: 3000,
						isClosable: true,
					});
					dispatch({
						type: CREATE_TEAMS_ERROR,
						payload: err.response?.data.error,
					});
				});
		};

export const createTransaction = (values) => (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_START });
  axiosWithAuth()
    .post(`/payment/createpayment`, values)
    .then((res) => {
      toast({
        position: "top",
        title: `Payment Completed`,
        description: "You have successfully made your payment",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response, "PAYMENT ERR");
      console.log(err, "ert");
      toast({
        position: "top",
        title: `Unsuccessful Attempt`,
        description: `${err.response.data.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_PAYMENT_ERROR,
        payload: err.response.data.message,
      });
    });
};

// export const getOrders = (business_id, page) => (dispatch) => {
//   dispatch({ type: GET_ORDER_START });
//   axiosWithAuth()
//     .get(`/order/getorders?bussiness_id=${business_id}&page=${page}`)
//     .then((res) => {
// 		return res.data

// 	dispatch({
// 		type: GET_ORDER_SUCCESS,
// 		payload: res.data,
// 	});
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
export const getPendingOrders = (business_id, pendingPage) =>
  axiosWithAuth().get(
    `/order/getorderstatus?business_id=${business_id}&page=${pendingPage}&order_status=pending`
  );
export const getCompletedOrders = (business_id, completedPage) =>
  axiosWithAuth().get(
    `/order/getorderstatus?business_id=${business_id}&page=${completedPage}&order_status=completed`
  );
export const getCancelledOrders = (business_id, cancelledPage) =>
  axiosWithAuth().get(
    `/order/getorderstatus?business_id=${business_id}&page=${cancelledPage}&order_status=cancelled`
  );
export const getPayment = (businessId) =>
  axiosWithAuth().get(`payment/getpayments?business_id=${businessId}`);

export const setBusinessModal = (payload) => {
  return {
    type: SET_MODAL,
    payload,
  };
};
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

export const generateInvoice = (order_id,customer_id) => (dispatch) => {
  dispatch({ type: CREATE_INVOICE_START });
  axiosWithAuth()
    .get(`invoice/generate?order_id=${order_id}?customer_id=${customer_id}`)
    .then((res) => {
		 toast({
        position: "top",
        title: `Invoice Generated`,
        description: "You have successfully generated invoice",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
		console.log(res, 'Invoice');
      dispatch({
        type: CREATE_INVOICE_SUCCESS,
        payload: res.data
      });
  
    })
    .catch((err) => {
		 toast({
        position: "top",
        title: `Unsuccessful Attempt`,
        description: `${err.response.data.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: CREATE_INVOICE_ERROR,
        payload: err.response?.data.error,
      });
    });
};


export const getInvoice = (order_id) => (dispatch) => {
  dispatch({ type: GET_INVOICE_START });
  axiosWithAuth()
    .get(`invoice/download?order_id=${order_id}`)
    .then((res) => {
		 toast({
        position: "top",
        title: `Download Invoice`,
        description: "Invoice downloading...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
		console.log(res, 'Invoice');
      dispatch({
        type: GET_INVOICE_SUCCESS,
        payload: res.data
      });
  
    })
    .catch((err) => {
		 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.result}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
      dispatch({
        type: GET_INVOICE_ERROR,
        payload: err.response?.data.error,
      });
    });
};



export const getStoreMetric = (business_id) => (dispatch) => {
  dispatch({ type: GET_STORE_METRIC_START });
  axiosWithAuth()
    .get(`storemetrics/${business_id}`, {cancelToken: cancelToken.token,})
    .then((res) => {
      dispatch({
        type: GET_STORE_METRIC_SUCCESS,
        payload: res.data
      });
//    console.log(res.data, "Store Metric")
    })
    .catch((err) => {
      dispatch({
        type: GET_STORE_METRIC_ERROR,
        payload: err.response?.data.error,
      });
    });
	return () => {
		cancelToken.cancel();
	}
};



export const getStoreLink = (userId) => (dispatch) => {
  dispatch({ type: GET_STORE_LINK_START });
  axiosWithAuth()
    .post(`storelink/get_store_link`,{
		user_id: userId
	})
    .then((res) => {
		// console.log(res, 'Product');
      dispatch({
        type: GET_STORE_LINK_SUCCESS,
        payload: res.data.products
      });
  
    })
    .catch((err) => {
      dispatch({
        type: GET_STORE_LINK_ERROR,
        payload: err.response?.data.error,
      });
    });
};

export const getProduct = (business_id) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });
  axiosWithAuth()
    .get(`/products/all?businessid=${business_id}`)
    .then((res) => {
		console.log(res, 'Product');
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res.data.products
      });
  
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: err.response?.data.error,
      });
    });
};
export const getCustomers = (business_id) => (dispatch) => {
  dispatch({ type: GET_CUSTOMERS_START });
  axiosWithAuth()
    .get(`/customer/fetchAll?business_id=${business_id}`)
    .then((res) => {
    //   console.log(res, "CUSTOMERS");
      dispatch({
        type: GET_CUSTOMERS_SUCCESS,
        payload: res.data.customers,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CUSTOMERS_ERROR,
        payload: err.response?.data.error,
      });
    });
};

export const fetchTeamMember = (business_id) => (dispatch) => {
	dispatch({ type: GET_TEAMS_START });
	axiosWithAuth()
		.get(`/team/fetch?business_id=${business_id}`)
		.then((res) => {
			// console.log(res, 'CUSTOMERS');
			dispatch({
				type: GET_TEAMS_SUCCESS,
				payload: res.data.customer,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_TEAMS_ERROR,
				payload: err.response.data.error,
			});
		});
};

export const getBusinessStat = (seller) => (dispatch) => {
  dispatch({ type: GET_CUSTOMERS_START });
  axiosWithAuth()
    .post(`/seller/fetchstore`, { seller })
    .then((res) => {
      dispatch({
        type: GET_BUSINESS_STAT_SUCCESS,
        payload: res.data.details,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_BUSINESS_STAT_ERROR,
        payload: err.response.data.error,
      });
    });
};

export const uploadImage = () => async (dispatch) => {
	dispatch({
		type: UPLOAD_IMAGE_LOADING,
	});
  axiosWithAuth()
    .post(`/user/updateimg`)
    .then((res) => {
			 toast({
        position: "top",
        title: `Image Upload`,
        description: "You have successfully upload image",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
		 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
      dispatch({
        type: UPLOAD_IMAGE_ERROR,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
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

export const saveTransactionRef = (payload) => {
  return {
    type: SAVE_TRANSACTION_DETAIL,
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


export const updateStoreInfo =
	(businessId,name,desc,email,industry,address) => (dispatch) => {
		dispatch({ type: UPDATE_STORE_PROFILE_START });
		axiosWithAuth()
			.patch(`seller/updatestore?businessid=${businessId}`, {
			name,desc,email,industry,address
			})
			.then((res) => {
					 toast({
        position: "top",
        title: `Profile Updated`,
        description: "You have successfully update store profile",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
				dispatch({
					type: UPDATE_STORE_PROFILE_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
				dispatch({
					type: UPDATE_STORE_PROFILE_ERROR,
					payload: err.response.data.error,
				});
			});
	};

	export const updateSocialMedia =
	(businessId,instagram,whatsapp,youtube) => (dispatch) => {
		dispatch({ type: UPDATE_SOCIALMEDIA_START });
		axiosWithAuth()
			.patch(`seller/updatesocial?businessid=${businessId}`, {
			businessId,instagram,whatsapp,youtube
			})
			.then((res) => {
				 toast({
        position: "top",
        title: `Social Media Updated`,
        description: "You have successfully update social media",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
				dispatch({
					type: UPDATE_SOCIALMEDIA_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				 toast({
				position: 'top',
				title: `Unsuccessful Attempt`,
				description: `${err.response.data.message}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
				dispatch({
					type: UPDATE_SOCIALMEDIA_ERROR,
					payload: err.response.data.error,
				});
			});
	};

  
