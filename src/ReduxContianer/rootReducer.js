import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import {
	personalSignInReducer,
	personalSignUpReducer,
	personalOtpRedcuer,
	personalVerifyOtpRedcuer
} from './PersonalRedux/PersonalReducer';
// import storage from 'redux-persist/lib/storage/session';
import {
	businessSignUpReducer,
	businessSignInReducer,
	businessOtpReducer,
	businessVerifyOtpReducer,
	getOrderReducer
} from './BussinessRedux/BusinessReducer';

// const persistConfig = {
//    key: 'root',
//    storage,
//    whitelist: [ 'personal']
// }

const rootReducer = combineReducers({
	//Personal Reducer
	personalSignIn: personalSignInReducer,
	personalSignUp: personalSignUpReducer,
	personalOtp: personalOtpRedcuer,
	personalVerifyOtp: personalVerifyOtpRedcuer,

	//Business Reducer
	businessSignUp: businessSignUpReducer,
	businessSignIn: businessSignInReducer,
	businessOtp: businessOtpReducer,
	businessVerifyOtp: businessVerifyOtpReducer,
	getOrder: getOrderReducer
});

// export default persistReducer(persistConfig, rootReducer);

export default rootReducer;
