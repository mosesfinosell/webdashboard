import UserActionType from '../constants/UserActionType';

const INITIAL_STATE = {
	users: null,
	user: {
		userDeatails: localStorage.getItem('userDeatails')
			? JSON.parse(localStorage.getItem('userDeatails'))
			: null,
	},
	error: null,
	loading: true,
};

const personalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionType.DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UserActionType.SIGN_UP_SUCCESS:
			return {
				...state,
				users: action.payload,
				userDeatails: action.payload.user,
			};
		case UserActionType.SIGN_UP_ERROR:
			return {
				...state,
				error: action.payload,
			};

		case UserActionType.SIGN_IN_SUCCESS:
			return {
				...state,
				users: action.payload,
				userDeatails: action.payload.user,
			};

		case UserActionType.SIGN_IN_ERROR:
			return {
				...state,
				error: action.payload,
			};

		case UserActionType.SEND_SMS_SUCCESS:
			return {
				...state,
				users: action.payload,
				userDeatails: action.payload.user,
			};

		case UserActionType.SEND_SMS_ERROR:
			return {
				...state,
				error: action.payload,
			};

		case UserActionType.VERIFY_NUMBRER_SUCCESS:
			return {
				...state,
				users: action.payload,
				userDeatails: action.payload.user,
			};

		case UserActionType.VERIFY_NUMBRER_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case UserActionType.GET_USER_DETAIL_SUCCESS:
			return {
				...state,
				users: action.payload,
				userDeatails: action.payload.user,
			};

		case UserActionType.GET_USER_DETAIL_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default personalReducer;
