// import OrderActionType from '../constants/OrderActionType';
// import ProductActionType from '../constants/ProductActionType';
// import UserActionType from '../constants/UserActionType';

// const INITIAL_STATE = {
// 	users: [],
// 	user: {
// 		businessDetails: localStorage.getItem('businessDetails')
// 			? JSON.parse(localStorage.getItem('businessDetails'))
// 			: null,
// 	},
// 	error: {},
// 	loading: false,
// 	orders: [],
// 	customers: [],
// 	products: [],
// 	picture: null,
// 	team: null,
// 	authCode: null,
// 	transaction: null,
// 	storeLink: null,
// };

// export const businessSignUpReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.SIGN_UP_SUCCESS:
// 		case UserActionType.SIGN_UP_ERROR:
// 			// localStorage.setItem('password', action.payload.password);
// 			return {
// 				...state,
// 				loading: true,
// 				businessDetails: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}

// }

// export const businessSignInReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.SIGN_IN_SUCCESS:
// 		case UserActionType.SIGN_IN_ERROR:
// 			//  localStorage.setItem('password',action.payload.password);
// 			return {
// 				...state,
// 				loading: true,
// 				businessDetails: action.payload,
// 				error: action.payload
// 			};
// 		default:
// 			return state;
// 	}
// }

// export const businessOtpReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.SEND_SMS_SUCCESS:
// 		case UserActionType.SEND_SMS_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				businessDetails: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const businessVerifyOtpReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.VERIFY_NUMBRER_SUCCESS:
// 		case UserActionType.VERIFY_NUMBRER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				businessDetails: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const getUserDetailsReducer = (state = INITIAL_STATE, action) => {
// 	switch(action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_USER_DETAIL_SUCCESS:
// 		case UserActionType.GET_USER_DETAIL_ERROR:
// 		return {
// 			...state,
// 			loading: true,
// 			users: action.payload?.message,
// 			error: action.payload
// 		}
// 		default:
// 					return state;
// 	}
// }

// export const getOrderReducer = (state= INITIAL_STATE ,action) => {
// 	switch(action.type){
// 		case OrderActionType.DATA_REQUEST:
// 			case OrderActionType.GET_ORDER_SUCCESS:
// 				case OrderActionType.GET_ORDER_ERROR:
// 				return {
// 					...state,
// 					loading: true,
// 					orders: action.payload,
// 					error: action.payload
// 				}
// 				default:
// 					return state;
// 	}
// }

// export const createOrderReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case OrderActionType.DATA_REQUEST:
// 		case OrderActionType.CREATE_ORDER_SUCCESS:
// 		case OrderActionType.CREATE_ORDER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				orders: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const createCustomerReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.CREATE_CUSTOMER_SUCCESS:
// 		case UserActionType.CREATE_CUSTOMER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				customers: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// }

// export const updatePasswordReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.UPDATE_PASSWORD_SUCCESS:
// 		case UserActionType.UPDATE_PASSWORD_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				users: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const getProductReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case ProductActionType.DATA_REQUEST:
// 		case ProductActionType.GET_PRODUCT_SUCCESS:
// 		case ProductActionType.GET_PRODUCT_ERROR:
// 			return {
// 				...state,
// 				loading: false,
// 				products: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const uploadImageReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.UPLOAD_IMAGE_SUCCESS:
// 		case UserActionType.UPLOAD_IMAGE_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				picture: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const addTeamReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.ADD_TEAM_SUCCESS:
// 		case UserActionType.ADD_TEAM_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				team: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const fetchTeamReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_TEAM_SUCCESS:
// 		case UserActionType.GET_TEAM_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				team: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const fetchCustomerReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_CUSTOMER_SUCCESS:
// 		case UserActionType.GET_CUSTOMER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				customers: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const updateUserProfileReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_CUSTOMER_SUCCESS:
// 		case UserActionType.GET_CUSTOMER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				users: action.payload,
// 				businessDetails: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const sendAuthCodeReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_CUSTOMER_SUCCESS:
// 		case UserActionType.GET_CUSTOMER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				authCode: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const createTransactionReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case OrderActionType.DATA_REQUEST:
// 		case OrderActionType.CREATE_TRANSACTION_SUCCESS:
// 		case OrderActionType.CREATE_TRANSACTION_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				transaction: action.payload,
// 				error: action.payload
// 			};
// 		default:
// 			return state;
// 	}
// }

// export const getTransactionReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case OrderActionType.DATA_REQUEST:
// 		case OrderActionType.GET_TRANSACTION_SUCCESS:
// 		case OrderActionType.GET_TRANSACTION_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				transaction: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const createStoreReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.CREATE_STORELINK_SUCCESS:
// 		case UserActionType.CREATE_STORELINK_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				storeLink: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };
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
};

const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default BusinessReducer;
