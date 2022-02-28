import UserActionType from '../constants/UserActionType';

const INITIAL_STATE = {
	user: {
		userDetails: localStorage.getItem('userDetails')
			? JSON.parse(localStorage.getItem('userDetails'))
			: null,
	},
	error: null,
	loading: true,
};

export const personalSignUpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UserActionType.SIGN_UP_SUCCESS:
			return {
				...state,
				userDetails: action.payload,
			};
		case UserActionType.SIGN_UP_ERROR:
			return {
				...state,
				error: action.payload,
			};
			default:
			return state;
	}
}

export const personalSignInReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.SIGN_IN_SUCCESS:
			return {
				...state,
				userDetails: action.payload.user,
			};

		case UserActionType.SIGN_IN_ERROR:
			return {
				...state,
				error: action.payload,
			};
			default:
			return state;
	}
}

export const personalOtpRedcuer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.SEND_SMS_SUCCESS:
		case UserActionType.SEND_SMS_ERROR:
			return {
				...state,
				loading: true,
				userDetails: action.payload,
				error: action.payload
			};
		default:
			return state;
	}
}

export const personalVerifyOtpRedcuer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
		case UserActionType.VERIFY_NUMBRER_SUCCESS:
		case UserActionType.VERIFY_NUMBRER_ERROR:
			return {
				...state,
				loading: true,
				userDetails: action.payload,
				error: action.payload,
			};
		default:
			return state;
	}
};
