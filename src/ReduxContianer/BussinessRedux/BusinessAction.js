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
  SAVE_TRANSACTION_DETAIL,
  SET_MODAL,
  GET_BUSINESS_STAT_SUCCESS,
  GET_BUSINESS_STAT_ERROR,
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
      console.log(res, "STORE LINK");
      dispatch({
        type: CREATE_STORE_LINK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_STORE_LINK_ERROR,
        payload: err.response.data.error,
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
