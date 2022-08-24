import {
	GET_BUSINESS_USER_DETAIL,
	FETCH_BUSINESS_USER_DETAIL_WITH_ID,
	FETCH_BUSINESS_USER_DETAIL_WITH_ID_ERROR,
	FETCH_BUSINESS_USER_DETAIL_WITH_ID_SUCCESS,
	CREATE_ORDER_START,
	CREATE_ORDER_SUCCESS,
	CREATE_ORDER_ERROR,
	CREATE_INVOICE_START,
	CREATE_INVOICE_SUCCESS,
	CREATE_INVOICE_ERROR,
	GET_INVOICE_START,
	GET_INVOICE_SUCCESS,
	GET_INVOICE_ERROR,
	GET_STORE_LINK_START,
	GET_STORE_LINK_SUCCESS,
	GET_STORE_LINK_ERROR,
	// CREATE_RECIEPT_START,
	// CREATE_RECIEPT_SUCCESS,
	// CREATE_RECIEPT_ERROR,
	// GET_RECIEPT_START,
	// GET_RECIEPT_SUCCESS,
	// GET_RECIEPT_ERROR,
	CREATE_STORE_LINK_START,
	CREATE_STORE_LINK_SUCCESS,
	CREATE_STORE_LINK_ERROR,
	GET_ORDER_START,
	GET_ORDER_SUCCESS,
	GET_ORDER_ERROR,
	GET_ORDER_PAGINATION,
	GET_CUSTOMERS_START,
	GET_CUSTOMERS_SUCCESS,
	GET_CUSTOMERS_ERROR,
	GET_TEAMS_START,
	GET_TEAMS_SUCCESS,
	GET_TEAMS_ERROR,
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
	CREATE_PRODUCT_LOADING,
	CREATE_PRODUCT_SUCCESS,
	CREATE_PRODUCT_ERROR,
	CREATE_CUSTOMERS_START,
	CREATE_CUSTOMERS_SUCCESS,
	CREATE_CUSTOMERS_ERROR,
	CREATE_TEAMS_START,
	CREATE_TEAMS_SUCCESS,
	CREATE_TEAMS_ERROR,
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
	UPDATE_STORE_PROFILE_START,
	UPDATE_STORE_PROFILE_SUCCESS,
	UPDATE_STORE_PROFILE_ERROR,
	UPDATE_SOCIALMEDIA_START,
	UPDATE_SOCIALMEDIA_SUCCESS,
	UPDATE_SOCIALMEDIA_ERROR,
} from '../constants/UserActionType.js';

const initialState = {
	isFetching: false,
	error: '',
	businessUserInfo: null,
	businessUserIdDetails: null,
	order: null,
	invoice: null,
	products: null,
	customers: null,
	teams: null,
	paginatedOrderResponse: null,
	stepOne: null,
	stepTwo: null,
	transactionRef: null,
	modalStatus: false,
	businessStat: null,
	profileImage: null,
	codeSend: '',
	store: null
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
		case CREATE_INVOICE_START:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_INVOICE_SUCCESS:
			return {
				...state,
				isFetching: false,
				invoice: action.payload,
			};
		case CREATE_INVOICE_ERROR:
			return {
				...state,
				isFetching: false,
			};
		case GET_INVOICE_START:
			return {
				...state,
				isFetching: true,
			};
		case GET_INVOICE_SUCCESS:
			return {
				...state,
				isFetching: false,
				invoice: action.payload,
			};
		case GET_INVOICE_ERROR:
			return {
				...state,
				isFetching: false,
			};
		case CREATE_PRODUCT_LOADING:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_PRODUCT_SUCCESS:
			return {
				...state,
				isFetching: false,
				products: action.payload,
			};
		case CREATE_PRODUCT_ERROR:
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
		case CREATE_CUSTOMERS_START:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_CUSTOMERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				customers: action.payload,
			};
		case CREATE_CUSTOMERS_ERROR:
			return {
				...state,
				isFetching: false,
			};
		case CREATE_TEAMS_START:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_TEAMS_SUCCESS:
			return {
				...state,
				isFetching: false,
				teams: action.payload,
			};
		case CREATE_TEAMS_ERROR:
			return {
				...state,
				isFetching: false,
			};
		case GET_TEAMS_START:
			return {
				...state,
				isFetching: true,
			};
		case GET_TEAMS_SUCCESS:
			return {
				...state,
				isFetching: false,
				teams: action.payload,
			};
		case GET_TEAMS_ERROR:
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
		case SEND_AUTH_CODE_START:
			return {
				...state,
				isFetching: true,
			};
		case SEND_AUTH_CODE_SUCCESS:
			return {
				...state,
				isFetching: false,
				codeSend: action.payload,
			};
		case SEND_AUTH_CODE_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case UPDATE_PROFILE_START:
			return {
				...state,
				isFetching: true,
			};
		case UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				isFetching: false,
				businessUserInfo: action.payload,
			};
		case UPDATE_PROFILE_ERROR:
			return {
				...state,
				error: action.payload,
			};
			case CREATE_STORE_LINK_START:
			return {
				...state,
				isFetching: true,
			};
		case CREATE_STORE_LINK_SUCCESS:
			return {
				...state,
				isFetching: false,
				store: action.payload,
			};
		case CREATE_STORE_LINK_ERROR:
			return {
				...state,
				error: action.payload,
			};
			case GET_STORE_LINK_START:
			return {
				...state,
				isFetching: true,
			};
		case GET_STORE_LINK_SUCCESS:
			return {
				...state,
				isFetching: false,
				store: action.payload,
			};
		case GET_STORE_LINK_ERROR:
			return {
				...state,
				error: action.payload,
			};

       case UPDATE_STORE_PROFILE_START:
			return {
				...state,
				isFetching: true,
			};
		case UPDATE_STORE_PROFILE_SUCCESS:
			return {
				...state,
				isFetching: false,
				store: action.payload,
			};
		case UPDATE_STORE_PROFILE_ERROR:
			return {
				...state,
				error: action.payload,
			};
			case UPDATE_SOCIALMEDIA_START:
			return {
				...state,
				isFetching: true,
			};
		case UPDATE_SOCIALMEDIA_SUCCESS:
			return {
				...state,
				isFetching: false,
				store: action.payload,
			};
		case UPDATE_SOCIALMEDIA_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case UPLOAD_IMAGE_LOADING: {
			return {
				...state,
				isFetching: true,
			};
		}
		case UPLOAD_IMAGE_SUCCESS: {
			return {
				...state,
				isFetching: false,
				profilePicture: action.payload,
			};
		}
		case UPLOAD_IMAGE_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		case UPDATE_PASSWORD_START:
			return {
				...state,
				isFetching: true,
			};
		case UPDATE_PASSWORD_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.payload,
			};
		case UPDATE_PASSWORD_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default BusinessReducer;
