import UserActionType from '../constants/UserActionType';

const INITIAL_STATE = {
	user: {
		businessDetails: localStorage.getItem('businessDetails')
			? JSON.parse(localStorage.getItem('businessDetails'))
			: null,
	},
	error: null,
	loading: true,
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


