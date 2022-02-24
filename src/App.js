
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import AccountBox from './layouts/AccountBox/AccountBox'
import PersonalAccountSignUp from './layouts/SignUp/PersonalSignUpPage/PersonalAccountSignUp'
import PersonalAccountSignIn from "./layouts/SignIn/PersonalLogInPage/PersonalAccountSignIn";
import PersonalForgetPassword from "./layouts/SignIn/PersonalLogInPage/PersonalForgetPassword";

import BusinessAccountSignUp from './layouts/SignUp/BusinessSignUpPage/BusinessAccountSignUp'
import BusinessAccountSignIn from './layouts/SignIn/BusinessLogInPage/BusinessAccountSignIn'
import AddBusinessPage from "./layouts/SignUp/BusinessSignUpPage/AddBusinessPage";
import StoreInventory from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/StoreInventory";

import VerifyPhoneNumber from "./layouts/SignUp/PersonalSignUpPage/VerifyPhoneNumber";
import InputOtp from "./layouts/SignUp/PersonalSignUpPage/VerifyOtp";
import PasswordPage from "./layouts/SignUp/PasswordPage";
import DashboardPage from "./layouts/Dashboard/DashoardContianer";
import BusinessDashboard from "./layouts/Dashboard/BusinessDashboard/BusinessDashboard";
import AddProduct from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addProduct";
import ProductModal from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addProductModal";
import DeliveryRequest from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/delivery";
import InvoiceBoard from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/InvoiceBoard";
import AddInvoice from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addInvoice";
import ResendOtp from "./layouts/SignUp/PersonalSignUpPage/resendOtpPage";



function App() {
  return (
    <Router>
      <Switch>
     <Route exact path='/' >
     <AccountBox/>
     </Route>

      {/* Personal Account  */}

        <Route path='/personal-signup'>
          <PersonalAccountSignUp/>
        </Route>
        <Route path='/personal-signin'>
          <PersonalAccountSignIn/>
        </Route>
        <Route path='/verify-number'>
          <VerifyPhoneNumber/>
        </Route>
        <Route path='/verify-otp'>
          <InputOtp/>
        </Route>
        <Route path='/password'>
          <PasswordPage/>
        </Route>
        <Route path='/forget-password'>
          <PersonalForgetPassword/>
        </Route>
        <Route path='/personal-dashboard'>
          <DashboardPage/>
        </Route>
        <Route path='/resend-otp'>
          <ResendOtp/>
        </Route>
        
       {/* Bussiness Account  */}

        <Route path='/business-signup'>
        <BusinessAccountSignUp/>
        </Route>
        <Route path='/business-signin'>
        <BusinessAccountSignIn/>
        </Route>
        <Route path='/addbusiness'>
        <AddBusinessPage/>
        </Route>
        <Route path='/business-dashboard'>
        <BusinessDashboard/>
        </Route>
        <Route path='/store-inventory'>
        <StoreInventory/>
        </Route>
        <Route path='/add-product'>
        <AddProduct/>
        </Route>
        <Route path='/delivery'>
        <DeliveryRequest/>
        </Route>
        <Route path='/invoice'>
        <InvoiceBoard/>
        </Route>
        <Route path='/add-invoice'>
        <AddInvoice/>
        </Route>
        </Switch>
    </Router>

  );
}

export default App;
