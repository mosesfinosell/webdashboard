import OrderActionType from '../constants/OrderActionType';
import UserActionType from '../constants/UserActionType';

const INITIAL_STATE = {
	user: {
		businessDetails: localStorage.getItem('businessDetails')
			? JSON.parse(localStorage.getItem('businessDetails'))
			: null,
	},
	error: null,
	loading: true,
	amount: null,
	orders: [],
	customer: null
};

export const businessSignUpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.SIGN_UP_SUCCESS:
		case UserActionType.SIGN_UP_ERROR:
			return {
				...state,
				loading: true,
				businessDetails: action.payload,
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

// export const creditUserRedux = (state = INITIAL_STATE, action) => {
// 	switch(action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.CREDIT_USER_SUCCESS:
// 		case UserActionType.CREDIT_USER_ERROR: 
// 		return {
// 			...state,
// 			loading: true,
// 			amount: action.payload,
// 			error: action.payload
// 		}
// 		default:
// 					return state;
// 	}
// }

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
					// state.orders.map(order => business_id === business_id ? order = data : null),
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