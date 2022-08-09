import {
	VERIFICATION,
	SIGN_UP_LOADING,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
} from '../constants/businessSignupActionType';

const initialState = {
	users: null,
	verification: 'phoneNumber',
	// error: false,
	// loading: false,
	// success: false,
	type: undefined,
};
const signupReducer = (state=initialState, action) => {
    switch (action.type) {
			case SIGN_UP_LOADING:
				return {
					...state,
					error: false,
					success: false,
					loading: true,
				};
		case SIGN_UP_SUCCESS: 
			return {
				...state,
				error: null,
				success: true,
				users: action.payload,
				loading: false,
			};
		case SIGN_UP_ERROR:
			return {
             ...state,
				error: action.payload,
				success: false,
				users: null,
				loading: false,
			}
			
			case VERIFICATION:
				return {
					...state,
					verification: state.verification === 'phoneNumber' ? 'email' : 'phoneNumber',
				};
			default:
				return state;
		}
}

export default signupReducer