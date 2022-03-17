import { combineReducers } from 'redux';
import {
	personalSignInReducer,
	personalSignUpReducer,
	personalOtpRedcuer,
	personalVerifyOtpRedcuer,

} from './PersonalRedux/PersonalReducer';

import {
	businessSignUpReducer,
	businessSignInReducer,
	businessOtpReducer,
	businessVerifyOtpReducer,
	getOrderReducer,
	createCustomerReducer,
	getUserDetailsReducer,
	updatePasswordReducer,
	getProductReducer,
	uploadImageReducer,
	addTeamReducer,
	fetchTeamReducer,
	fetchCustomerReducer,
	createTransactionReducer,
	getTransactionReducer,
	createOrderReducer,
} from './BussinessRedux/BusinessReducer';



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
	getOrder: getOrderReducer,
	createOrder : createOrderReducer,
	getUser: getUserDetailsReducer,
	createCustomer: createCustomerReducer,
	fetchCustomer: fetchCustomerReducer,
	updateUserPassword: updatePasswordReducer,
	fetchProduct: getProductReducer,
	uploadImg: uploadImageReducer,
	addTeams: addTeamReducer,
	fetchTeam: fetchTeamReducer,
	createPayment: createTransactionReducer,
	getPayment: getTransactionReducer,
});



export default rootReducer;
