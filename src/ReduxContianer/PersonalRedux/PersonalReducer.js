// import UserActionType from '../constants/UserActionType';

// const INITIAL_STATE = {
// 	users: [],
// 	user: {
// 		userDetails: localStorage.getItem('userDetails')
// 			? JSON.parse(localStorage.getItem('userDetails'))
// 			: null,
// 	},
// 	error: null,
// 	loading: true,
// };

// export const personalSignUpReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 			return {
// 				...state,
// 				loading: true,
// 			};
// 		case UserActionType.SIGN_UP_SUCCESS:
// 			return {
// 				...state,
// 				userDetails: action.payload,
// 			};
// 		case UserActionType.SIGN_UP_ERROR:
// 			return {
// 				...state,
// 				error: action.payload,
// 			};
// 			default:
// 			return state;
// 	}
// }

// export const personalSignInReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.SIGN_IN_SUCCESS:
// 			return {
// 				...state,
// 				userDetails: action.payload,
// 			};

// 		case UserActionType.SIGN_IN_ERROR:
// 			return {
// 				...state,
// 				error: action.payload,
// 			};
// 			default:
// 			return state;
// 	}
// }

// export const personalOtpRedcuer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.SEND_SMS_SUCCESS:
// 		case UserActionType.SEND_SMS_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				userDetails: action.payload,
// 				error: action.payload
// 			};
// 		default:
// 			return state;
// 	}
// }

// export const personalVerifyOtpRedcuer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.VERIFY_NUMBRER_SUCCESS:
// 		case UserActionType.VERIFY_NUMBRER_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				userDetails: action.payload,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const getUserDetailsReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionType.DATA_REQUEST:
// 		case UserActionType.GET_USER_DETAIL_SUCCESS:
// 		case UserActionType.GET_USER_DETAIL_ERROR:
// 			return {
// 				...state,
// 				loading: true,
// 				users: action.payload?.message,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

import {
  GET_USER_DETAIL,
  FETCH_USER_DETAIL_WITH_ID,
  FETCH_USER_DETAIL_WITH_ID_SUCCESS,
  FETCH_USER_DETAIL_WITH_ID_ERROR,
} from "../constants/UserActionType";
//   import UserActionType from '../constants/UserActionType';

const initialState = {
  isFetching: false,
  error: "",
  userInfo: null,
  userIdDetails: null,
};

const PersonalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAIL:
      return {
        ...state,
        isFetching: false,
        userInfo: action.payload,
      };
    case FETCH_USER_DETAIL_WITH_ID:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_DETAIL_WITH_ID_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_USER_DETAIL_WITH_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userIdDetails: action.payload,
      };

    default:
      return state;
  }
};

export default PersonalReducer;
