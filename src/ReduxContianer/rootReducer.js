import { combineReducers } from "redux";
import PersonalReducer from "./PersonalRedux/PersonalReducer.js";
import BusinessReducer from "./BussinessRedux/BusinessReducer"
import BusinessSignupReducer from "./BusinessSignup/signupReducer"
import ShoppingCartReducer from "./shoppingCart/shoppingCartReducer"
// import {
// 	businessSignUpReducer,
// 	businessSignInReducer,
// 	businessOtpReducer,
// 	businessVerifyOtpReducer,
// 	getOrderReducer,
// 	createCustomerReducer,
// 	getUserDetailsReducer,
// 	updatePasswordReducer,
// 	getProductReducer,
// 	uploadImageReducer,
// 	addTeamReducer,
// 	fetchTeamReducer,
// 	fetchCustomerReducer,
// 	createTransactionReducer,
// 	getTransactionReducer,
// 	createOrderReducer,
// } from './BussinessRedux/BusinessReducer';

const rootReducer = combineReducers({
  //Personal Reducer
  
  personalReducer: PersonalReducer,
  businessReducer: BusinessReducer,
  businessSignup: BusinessSignupReducer,
  shoppingCart: ShoppingCartReducer,
  // personalSignUp: personalSignUpReducer,
  // personalOtp: personalOtpRedcuer,
  // personalVerifyOtp: personalVerifyOtpRedcuer,

  //Business Reducer
  // businessSignUp: businessSignUpReducer,
  // businessSignIn: businessSignInReducer,
  // businessOtp: businessOtpReducer,
  // businessVerifyOtp: businessVerifyOtpReducer,
  // getOrder: getOrderReducer,
  // createOrder : createOrderReducer,
  // getUser: getUserDetailsReducer,
  // createCustomer: createCustomerReducer,
  // fetchCustomer: fetchCustomerReducer,
  // updateUserPassword: updatePasswordReducer,
  // fetchProduct: getProductReducer,
  // uploadImg: uploadImageReducer,
  // addTeams: addTeamReducer,
  // fetchTeam: fetchTeamReducer,
  // createPayment: createTransactionReducer,
  // getPayment: getTransactionReducer,
});

export default rootReducer;
