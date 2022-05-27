import {
  GET_BUSINESS_USER_DETAIL,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID_ERROR,
  FETCH_BUSINESS_USER_DETAIL_WITH_ID_SUCCESS,
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  GET_ORDER_PAGINATION,
  GET_CUSTOMERS_START,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_STEP_ONE_DETAIL,
  GET_STEP_TWO_DETAIL,
  SAVE_TRANSACTION_DETAIL,
  SET_MODAL,
  GET_BUSINESS_STAT_START,
  GET_BUSINESS_STAT_SUCCESS,
  GET_BUSINESS_STAT_ERROR,
} from "../constants/UserActionType.js";

const initialState = {
  isFetching: false,
  error: "",
  businessUserInfo: null,
  businessUserIdDetails: null,
  order: [],
  products: [],
  customers: [],
  paginatedOrderResponse: null,
  stepOne: null,
  stepTwo: null,
  transactionRef: null,
  modalStatus: false,
  businessStat: null,
};

const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modalStatus: action.payload,
      };
    case SAVE_TRANSACTION_DETAIL:
      return {
        ...state,
        isFetching: false,
        transactionRef: action.payload,
      };
    case GET_STEP_TWO_DETAIL:
      return {
        ...state,
        isFetching: false,
        stepTwo: action.payload,
      };
    case GET_STEP_ONE_DETAIL:
      return {
        ...state,
        isFetching: false,
        stepOne: action.payload,
      };
    case GET_BUSINESS_USER_DETAIL:
      return {
        ...state,
        isFetching: false,
        businessUserInfo: action.payload,
      };
    case FETCH_BUSINESS_USER_DETAIL_WITH_ID:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_BUSINESS_USER_DETAIL_WITH_ID_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_BUSINESS_USER_DETAIL_WITH_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        businessUserIdDetails: action.payload,
      };
    case CREATE_ORDER_START:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        order: action.payload,
      };
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_ORDER_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        order: action.payload,
      };
    case GET_ORDER_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_ORDER_PAGINATION:
      return {
        ...state,
        paginatedOrderResponse: action.payload,
      };
    case GET_CUSTOMERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customers: action.payload,
      };
    case GET_CUSTOMERS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_BUSINESS_STAT_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_BUSINESS_STAT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        businessStat: action.payload,
      };
    case GET_BUSINESS_STAT_ERROR:
      return {
        ...state,
        businessStat: false,
      };
    default:
      return state;
  }
};

export default BusinessReducer;
