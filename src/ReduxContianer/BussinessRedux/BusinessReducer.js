import OrderActionType from '../constants/OrderActionType';
import ProductActionType from '../constants/ProductActionType';
import UserActionType from '../constants/UserActionType';

const INITIAL_STATE = {
	users: [],
	user: {
		businessDetails: localStorage.getItem('businessDetails')
			? JSON.parse(localStorage.getItem('businessDetails'))
			: null,
	},
	error: {},
	loading: true,
	orders: [],
	customers: null,
	products: [],
	picture: null,
	team: null
};

export const businessSignUpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.SIGN_UP_SUCCESS:
		case UserActionType.SIGN_UP_ERROR:
			// localStorage.setItem('password', action.payload.password);
			return {
				...state,
				loading: true,
				businessDetails: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}

}
		
export const businessSignInReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.SIGN_IN_SUCCESS:
		case UserActionType.SIGN_IN_ERROR:
			//  localStorage.setItem('password',action.payload.password);
			return {
				...state,
				loading: true,
				businessDetails: action.payload,
				error: action.payload
			};
		default:
			return state;
	}		
}
	
export const businessOtpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.SEND_SMS_SUCCESS:
		case UserActionType.SEND_SMS_ERROR:
			return {
				...state,
				loading: true,
				businessDetails: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

	
export const businessVerifyOtpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.VERIFY_NUMBRER_SUCCESS:
		case UserActionType.VERIFY_NUMBRER_ERROR:
			return {
				...state,
				loading: true,
				businessDetails: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getUserDetailsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.GET_USER_DETAIL_SUCCESS:
		case UserActionType.GET_USER_DETAIL_ERROR: 
		return {
			...state,
			loading: true,
			users: action.payload?.message,
			error: action.payload
		}
		default:
					return state;
	}
}

export const getOrderReducer = (state= INITIAL_STATE ,action) => {
	switch(action.type){
		case OrderActionType.DATA_REQUEST:
			case OrderActionType.GET_ORDER_SUCCESS:
				case OrderActionType.GET_ORDER_ERROR: 
				// const {business_id, data} = action.payload
				return {
					...state,
					loading: true,
					orders: action.payload,               
					error: action.payload
				}
				default:
					return state;
	}
}

export const createCustomerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.CREATE_CUSTOMER_SUCCESS:
		case UserActionType.CREATE_CUSTOMER_ERROR:
			return {
				...state,
				loading: true,
				customer: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
}

export const updatePasswordReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.UPDATE_PASSWORD_SUCCESS:
		case UserActionType.UPDATE_PASSWORD_ERROR:
			return {
				...state,
				loading: true,
				users: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getProductReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductActionType.DATA_REQUEST:
		case ProductActionType.GET_PRODUCT_SUCCESS:
		case ProductActionType.GET_PRODUCT_ERROR:
			return {
				...state,
				loading: true,
				products: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const uploadImageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.UPLOAD_IMAGE_SUCCESS:
		case UserActionType.UPLOAD_IMAGE_ERROR:
			return {
				...state,
				loading: true,
				picture: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const addTeamReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.ADD_TEAM_SUCCESS:
		case UserActionType.ADD_TEAM_ERROR:
			return {
				...state,
				loading: true,
				team: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const fetchTeamReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.GET_TEAM_SUCCESS:
		case UserActionType.GET_TEAM_ERROR:
			return {
				...state,
				loading: true,
				team: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const fetchCustomerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.GET_CUSTOMER_SUCCESS:
		case UserActionType.GET_CUSTOMER_ERROR:
			return {
				...state,
				loading: true,
				customers: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};
