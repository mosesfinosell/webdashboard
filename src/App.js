import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { Suspense } from "react";
import { Text, Spinner } from "@chakra-ui/react";
import ErrorBoundary from "./ErrorBoundary";
import AccountBox from "./layouts/AccountBox/AccountBox";
import PersonalAccountSignUp from "./layouts/SignUp/PersonalSignUpPage/PersonalAccountSignUp";
import PersonalAccountSignIn from "./layouts/SignIn/PersonalLogInPage/PersonalAccountSignIn";
import PersonalForgetPassword from "./layouts/SignIn/PersonalLogInPage/PersonalForgetPassword";

import BusinessAccountSignUp from "./layouts/SignUp/BusinessSignUpPage/BusinessAccountSignUp";
import BusinessAccountSignIn from "./layouts/SignIn/BusinessLogInPage/BusinessAccountSignIn";
import AddBusinessPage from "./layouts/SignUp/BusinessSignUpPage/AddBusinessPage";
import StoreInventory from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/StoreInventory";
import StorePage from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/StorePage";
import Cart from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/Cart";
import VerifyPhoneNumber from "./layouts/SignUp/PersonalSignUpPage/VerifyPhoneNumber";
import InputOtp from "./layouts/SignUp/PersonalSignUpPage/VerifyOtp";
import PasswordPage from "./layouts/SignUp/PasswordPage";
import DashboardPage from "./layouts/Dashboard/DashboardPage";
import BusinessDashboard from "./layouts/Dashboard/DashboardItems/BusinessDashboard";
import AddProduct from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addProduct";
import ProductModal from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addProductModal";
import DeliveryRequest from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/delivery";
import InvoiceBoard from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/InvoiceBoard";
import AddInvoice from "./layouts/Dashboard/BusinessDashboard/HomeBusiness/addInvoice";
import ResendOtp from "./layouts/SignUp/PersonalSignUpPage/resendOtpPage";
import BusinessVerifyOtp from "./layouts/SignUp/PersonalSignUpPage/BusinessVerifyOtp";
import AddTeam from "./layouts/Dashboard/BusinessDashboard/Account/addTeam";
import DealDashboard from "../src/layouts/Dashboard/DashboardItems/DealDashboard";
import HomeDashboard from "../src/layouts/Dashboard/DashboardItems/HomeDashboard";
import PaymentPage from "../src/layouts/Dashboard/DashboardItems/PaymentPage";
import AccountUserProfile from "./layouts/Dashboard/DashboardItems/AccountUserProfile";
import BusinessOrders from "./layouts/Dashboard/DashboardItems/OrderHistory";
import StoreLink from "./layouts/Dashboard/BusinessDashboard/StoreLink/addUrlPage";
import CreateTransaction from "./layouts/Dashboard/BusinessDashboard/Payment/createTransaction";
import PayWithCard from "../src/layouts/Dashboard/DashboardItems/PayWithCard";
import PayWithUssd from "../src/layouts/Dashboard/DashboardItems/PayWithUssd";
import UssdConfirmation from "../src/layouts/Dashboard/DashboardItems/UssdConfirmation";
import PayWithTransfer from "../src/layouts/Dashboard/DashboardItems/PayWithTransfer";
import BankPayment from "../src/layouts/Dashboard/DashboardItems/BankPayment";
import Home from "../src/layouts/Home";
import Individual from "./layouts/Individual";
import Business from "./layouts/Business";
import Terms from "./layouts/Terms";
import Pricing from "./layouts/Pricing";

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
function App() {
  return (
    <>
    <Router>
    <Header />
      <div className="App">
        {/* <Switch> */}
        <Route exact path="/account" component={AccountBox} />
        <Route
          exact
          path="/"
          component={Home}
        />
         <Route
          exact
          path="/individual"
          component={Individual}
        />
         <Route
          exact
          path="/business-home"
          component={Business}
        />
        <Route
          exact
          path="/terms"
          component={Terms}
        />
 <Route
          exact
          path="/pricing"
          component={Pricing}
        />
        <Route
          exact
          path="/personal-signup"
          component={PersonalAccountSignUp}
        />
        <Route
          exact
          path="/personal-signin"
          component={PersonalAccountSignIn}
        />
        {/* <DashboardPage /> */}
        <PrivateRoute
          exact
          path="/personal-dashboard"
          component={HomeDashboard}
        />
        <PrivateRoute exact path="/choose-payment" component={PaymentPage} />
        <PrivateRoute exact path="/pay-with-card" component={PayWithCard} />
        <PrivateRoute exact path="/pay-with-ussd" component={PayWithUssd} />
        <PrivateRoute
          exact
          path="/pay-with-transfer"
          component={PayWithTransfer}
        />
        <PrivateRoute exact path="/bank-payment" component={BankPayment} />
        <PrivateRoute
          exact
          path="/ussd-confirmation"
          component={UssdConfirmation}
        />
        <PrivateRoute path="/personal-deals" component={DealDashboard} />

        <PrivateRoute path="/personal-account" component={AccountUserProfile} />

        {/* </Switch> */}

        {/* Bussiness Account  */}

        <Route path="/business-signup" component={BusinessAccountSignUp} />

        <Route path="/business-signin" component={BusinessAccountSignIn} />
        <PrivateRoute
          exact
          path="/business-dashboard"
          component={BusinessDashboard}
        />
        <PrivateRoute
          exact
          path="/business/orders"
          component={BusinessOrders}
        />
        <PrivateRoute
          exact
          path="/business/store-inventory"
          component={StoreInventory}
        />
        <PrivateRoute exact path="/business/store-page" component={StorePage} />
        <PrivateRoute exact path="/business/storelink" component={StoreLink} />
        <PrivateRoute exact path="/business/store-page/cart" component={Cart} />
        <PrivateRoute
          exact
          path="/business/payment"
          component={CreateTransaction}
        />
      </div>
    <Footer />
    </Router>
    </>
  );
}

export default App;
